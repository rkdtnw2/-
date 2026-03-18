const SOP_SPREADSHEET_ID = "1irp_D1Sd8b1CJees0iO6iIzw_92BX3v70mW4e2MCQzw";
const SOP_GID = "655112432";

let sopData = [];
let groupedData = {};
let currentChapter = "";
let currentTopic = "";
let currentSlides = [];
let currentSlideIndex = 0;

let searchResults = [];
let currentSearchIndex = 0;

document.addEventListener("DOMContentLoaded", async () => {
  await loadSopData();
});

async function fetchSopSheet() {
  const url = `https://docs.google.com/spreadsheets/d/${SOP_SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=${SOP_GID}`;
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

async function loadSopData() {
  try {
    sopData = await fetchSopSheet();

    groupedData = {};
    sopData.forEach(row => {
      const chapter = row.chapter || row.Chapter || "기본 챕터";
      const topic = row.topicTitle || row.topic || row.Topic || "기본 주제";

      if (!groupedData[chapter]) groupedData[chapter] = {};
      if (!groupedData[chapter][topic]) groupedData[chapter][topic] = [];
      groupedData[chapter][topic].push(row);
    });

    renderChapters();

    const firstChapter = Object.keys(groupedData)[0];
    if (firstChapter) {
      selectChapter(firstChapter);
    }
  } catch (e) {
    document.getElementById("slide-content-area").innerHTML =
      `<div class="empty-state">SOP 데이터를 불러오지 못했습니다.</div>`;
  }
}

function renderChapters() {
  const area = document.getElementById("chapter-list");
  const chapters = Object.keys(groupedData);

  area.innerHTML = chapters.map(chapter => `
    <button class="chapter-btn ${chapter === currentChapter ? "active" : ""}" onclick="selectChapter('${escapeJs(chapter)}')">
      ${escapeHtml(chapter)}
    </button>
  `).join("");
}

function selectChapter(chapter) {
  currentChapter = chapter;
  renderChapters();

  const topics = Object.keys(groupedData[chapter] || {});
  const area = document.getElementById("topic-list");

  area.innerHTML = topics.map(topic => `
    <button class="topic-btn ${topic === currentTopic ? "active" : ""}" onclick="selectTopic('${escapeJs(topic)}')">
      ${escapeHtml(topic)}
    </button>
  `).join("");

  if (topics.length) selectTopic(topics[0]);
}

function selectTopic(topic) {
  currentTopic = topic;

  document.querySelectorAll(".topic-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.trim() === topic);
  });

  currentSlides = groupedData[currentChapter][currentTopic] || [];
  currentSlideIndex = 0;
  renderCurrentSlide();
}

function renderCurrentSlide() {
  const titleEl = document.getElementById("slide-title");
  const subtitleEl = document.getElementById("slide-subtitle");
  const area = document.getElementById("slide-content-area");

  if (!currentSlides.length) {
    titleEl.textContent = "슬라이드 없음";
    subtitleEl.textContent = "";
    area.innerHTML = `<div class="empty-state">등록된 슬라이드가 없습니다.</div>`;
    return;
  }

  const slide = currentSlides[currentSlideIndex];
  const slideTitle = slide.slideTitle || slide.title || currentTopic;
  const slideText = slide.slideContent || slide.content || slide.description || "";
  const image = convertGoogleDriveUrl(slide.image || slide.imageUrl || "");

  titleEl.textContent = slideTitle;
  subtitleEl.textContent = `${currentChapter} · ${currentTopic}`;

  area.innerHTML = `
    <div class="slide-card">
      <div class="slide-text">${escapeHtml(slideText)}</div>
      ${image ? `<img class="slide-image" src="${image}" alt="${escapeHtml(slideTitle)}">` : ""}
    </div>
  `;
}

function searchSlides() {
  const keyword = document.getElementById("sop-search-input").value.trim().toLowerCase();
  const info = document.getElementById("search-result-info");

  if (!keyword) {
    info.textContent = "검색어를 입력해주세요.";
    return;
  }

  searchResults = [];

  Object.keys(groupedData).forEach(chapter => {
    Object.keys(groupedData[chapter]).forEach(topic => {
      groupedData[chapter][topic].forEach((slide, index) => {
        const text = [
          slide.chapter,
          slide.topicTitle,
          slide.topic,
          slide.slideTitle,
          slide.slideContent,
          slide.content,
          slide.description
        ].join(" ").toLowerCase();

        if (text.includes(keyword)) {
          searchResults.push({ chapter, topic, index });
        }
      });
    });
  });

  if (!searchResults.length) {
    info.textContent = `"${keyword}" 검색 결과가 없습니다.`;
    return;
  }

  currentSearchIndex = 0;
  moveToSearchResult();
}

function moveToNextResult() {
  if (!searchResults.length) {
    document.getElementById("search-result-info").textContent = "먼저 검색해주세요.";
    return;
  }

  currentSearchIndex = (currentSearchIndex + 1) % searchResults.length;
  moveToSearchResult();
}

function moveToSearchResult() {
  const info = document.getElementById("search-result-info");
  const result = searchResults[currentSearchIndex];

  currentChapter = result.chapter;
  renderChapters();
  selectChapter(result.chapter);
  currentTopic = result.topic;

  document.querySelectorAll(".topic-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.trim() === result.topic);
  });

  currentSlides = groupedData[result.chapter][result.topic] || [];
  currentSlideIndex = result.index;
  renderCurrentSlide();

  info.textContent = `${currentSearchIndex + 1} / ${searchResults.length} · ${result.chapter} > ${result.topic}`;
}

function escapeJs(str) {
  return String(str || "").replace(/'/g, "\\'");
}
