function renderTest(data) {
  const area = document.getElementById("test-question-area");
  const badge = document.getElementById("test-count-badge");

  if (!area || !badge) return;

  area.innerHTML = "";

  if (!data.length) {
    badge.textContent = "0문항";
    area.innerHTML = `<div class="empty-state">등록된 테스트 문항이 없습니다.</div>`;
    dynamicTestAnswerKey = {};
    return;
  }

  const sorted = [...data].sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
  badge.textContent = `${sorted.length}문항`;

  dynamicTestAnswerKey = {};

  area.innerHTML = sorted.map((q, idx) => {
    const no = idx + 1;
    const title = q.title || q.question || `문항 ${no}`;
    const c1 = q.choice1 || "";
    const c2 = q.choice2 || "";
    const c3 = q.choice3 || "";
    const c4 = q.choice4 || "";
    const answer = String(q.answer || "").trim();
    dynamicTestAnswerKey[`q${no}`] = answer;

    return `
      <div class="question">
        <h4>${no}. ${escapeHtml(title)}</h4>
        ${c1 ? `<label><input type="radio" name="q${no}" value="1"> ${escapeHtml(c1)}</label>` : ""}
        ${c2 ? `<label><input type="radio" name="q${no}" value="2"> ${escapeHtml(c2)}</label>` : ""}
        ${c3 ? `<label><input type="radio" name="q${no}" value="3"> ${escapeHtml(c3)}</label>` : ""}
        ${c4 ? `<label><input type="radio" name="q${no}" value="4"> ${escapeHtml(c4)}</label>` : ""}
      </div>
    `;
  }).join("");
}

function startTest() {
  const resultArea = document.getElementById("test-result-area");
  if (resultArea) {
    resultArea.innerHTML = `<strong>시험이 시작되었습니다.</strong><br>모든 문제를 확인한 뒤 제출해주세요.`;
  }

  const section = document.getElementById("test-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function submitTest() {
  const total = Object.keys(dynamicTestAnswerKey).length;
  if (!total) return;

  let score = 0;
  const wrongList = [];

  for (let i = 1; i <= total; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const userAnswer = selected ? selected.value : "";
    const correct = dynamicTestAnswerKey[`q${i}`];

    if (userAnswer === correct) {
      score++;
    } else {
      wrongList.push(i);
    }
  }

  const percent = Math.round((score / total) * 100);
  const resultArea = document.getElementById("test-result-area");

  resultArea.innerHTML = `
    <h4 style="margin-top:0;">결과</h4>
    <p>점수: <strong>${score} / ${total}</strong> (${percent}점)</p>
    <p>오답 번호: <strong>${wrongList.length ? wrongList.join(", ") : "없음"}</strong></p>
  `;

  resultArea.scrollIntoView({ behavior: "smooth", block: "center" });
}
