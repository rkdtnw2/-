const SPREADSHEET_ID = "1irp_D1Sd8b1CJees0iO6iIzw_92BX3v70mW4e2MCQzw";

const SHEET_GIDS = {
  sop: "655112432",
  edu: "153482899",
  test: "790084243"
};

let eduData = [];
let testData = [];
let dynamicTestAnswerKey = {};

document.addEventListener("DOMContentLoaded", async () => {
  await loadEducationData();
  await loadTestData();

  if (window.location.hash === "#edu-section") {
    showSection("edu-section");
  } else if (window.location.hash === "#test-section") {
    showSection("test-section");
  }
});

function showSection(sectionId) {
  const edu = document.getElementById("edu-section");
  const test = document.getElementById("test-section");

  if (edu) edu.classList.add("hidden");
  if (test) test.classList.add("hidden");

  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove("hidden");
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }
}

async function fetchSheetAsJson(gid) {
  const url = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=${gid}`;
  const res = await fetch(url);
  const text = await res.text();
  const jsonText = text.substring(47).slice(0, -2);
  const json = JSON.parse(jsonText);

  const cols = json.table.cols.map(col => col.label);
  const rows = json.table.rows.map(row => {
    const obj = {};
    cols.forEach((col, idx) => {
      obj[col] = row.c[idx] ? row.c[idx].v : "";
    });
    return obj;
  });

  return rows;
}

function convertGoogleDriveUrl(url) {
  if (!url) return "";
  const match = url.match(/\/d\/([^/]+)/);
  if (match) return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1600`;
  return url;
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function loadEducationData() {
  try {
    eduData = await fetchSheetAsJson(SHEET_GIDS.edu);
    renderEdu(eduData);
  } catch (e) {
    document.getElementById("edu-content-area").innerHTML =
      `<div class="empty-state">상품자료를 불러오지 못했습니다.</div>`;
  }
}

function renderEdu(data) {
  const area = document.getElementById("edu-content-area");
  const badge = document.getElementById("edu-count-badge");

  if (!area || !badge) return;

  if (!data.length) {
    badge.textContent = "0개 항목";
    area.innerHTML = `<div class="empty-state">등록된 상품자료가 없습니다.</div>`;
    return;
  }

  badge.textContent = `${data.length}개 항목`;

  area.innerHTML = data.map(item => {
    const category = item.category || item.Category || "상품자료";
    const title = item.title || item.Title || "제목 없음";
    const desc = item.description || item.desc || item.Description || "";
    const image = convertGoogleDriveUrl(item.image || item.imageUrl || item.Image || "");

    return `
      <article class="edu-card">
        ${image ? `<img class="edu-thumb" src="${image}" alt="${escapeHtml(title)}" />` : ""}
        <div class="edu-body">
          <span class="edu-category">${escapeHtml(category)}</span>
          <h4 class="edu-title">${escapeHtml(title)}</h4>
          <p class="edu-desc">${escapeHtml(desc)}</p>
        </div>
      </article>
    `;
  }).join("");
}

async function loadTestData() {
  try {
    testData = await fetchSheetAsJson(SHEET_GIDS.test);
    renderTest(testData);
  } catch (e) {
    document.getElementById("test-question-area").innerHTML =
      `<div class="empty-state">테스트 문항을 불러오지 못했습니다.</div>`;
  }
}
