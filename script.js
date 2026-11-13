const quizData = [
  {
    topic: "網頁三層結構",
    question: "在製作網頁時，如果想讓使用者按下按鈕後跳出抽籤卡片或計算分數，這主要屬於網頁哪一層的工作？",
    options: [
      "HTML：負責網頁的骨架與內容",
      "CSS：負責網頁的視覺樣式",
      "JavaScript：負責網頁的行為與動態功能",
      "HTTP：負責瀏覽器與伺服器之間的通訊"
    ],
    answer: 2,
    explanation: "HTML 負責網頁的骨架與內容，CSS 負責外觀與排版，而 JavaScript 負責互動行為，例如按鈕點擊、計算分數及動態顯示卡片。"
  },
  {
    topic: "開發工具 Live Server",
    question: "在 VS Code 中安裝並開啟 Live Server 外掛後，寫程式碼時最大的優點是什麼？",
    options: [
      "可以自動將 HTML 轉換成 Python 程式碼",
      "存檔後瀏覽器會自動重新整理，即時呈現最新畫面",
      "會自動幫網頁套用漂亮的背景色彩",
      "可以免費將網頁發布到網際網路供全球搜尋"
    ],
    answer: 1,
    explanation: "Live Server 會在本機啟動開發伺服器，並在檔案存檔後自動重新載入瀏覽器頁面，方便即時檢查修改結果。它不會自動美化網頁，也不等於正式部署到網際網路。"
  },
  {
    topic: "HTML5 文件宣告",
    question: "寫在 HTML 檔案最前面的 <!DOCTYPE html>，主要功能是什麼？",
    options: [
      "宣告這是網頁的最高級標題",
      "告訴瀏覽器這是一份使用 HTML5 標準的文件",
      "設定網頁的文字編碼為中文",
      "在瀏覽器分頁上顯示標題文字"
    ],
    answer: 1,
    explanation: "<!DOCTYPE html> 是文件類型宣告，用來讓瀏覽器以標準模式解析 HTML 文件。它不是頁面標題，也不負責設定字元編碼。"
  },
  {
    topic: "語法屬性與標籤閉合",
    question: "下列哪一個 HTML 片段的標籤巢狀結構與閉合順序正確？",
    options: [
      "<p>我超愛<strong>珍奶</p></strong>",
      "<p>我超愛<strong>珍奶</strong></p>",
      "<p><strong>我超愛</p>珍奶</strong>",
      "<p>我超愛<strong>珍奶</p>"
    ],
    answer: 1,
    explanation: "HTML 巢狀元素要遵守「後開先關」原則。<strong> 在 <p> 裡面開啟，因此要先關閉 </strong>，再關閉外層的 </p>。"
  },
  {
    topic: "字元編碼與中文亂碼修復",
    question: "打開 HTML 網頁時，中文全部變成亂碼，最可能是 <head> 中遺漏了哪一行設定？",
    options: [
      '<meta charset="UTF-8">',
      '<title>我的網頁</title>',
      '<link rel="stylesheet" href="style.css">',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    ],
    answer: 0,
    explanation: '<meta charset="UTF-8"> 用來宣告文件使用 UTF-8 字元編碼，能正確處理中文及多種語言文字。'
  },
  {
    topic: "標題層級語法觀念",
    question: "關於 HTML 的標題標籤 <h1> 至 <h6>，下列敘述何者正確？",
    options: [
      "<h6> 代表字體最大、最重要的標題",
      "選用 <h1> 至 <h6> 應依據內容的重要層級與結構，而不是只看字體大小",
      "標題標籤只能使用 <h1>，不能使用其他層級",
      "<h1> 至 <h6> 是用來設定段落顏色的標籤"
    ],
    answer: 1,
    explanation: "<h1> 通常代表最高層級的標題，<h6> 則是較低層級。選擇標題標籤應反映文件的內容階層；若要改變字體大小或外觀，應使用 CSS。"
  },
  {
    topic: "超連結與新分頁開啟",
    question: "若希望點擊網頁上的超連結時，在新分頁中開啟目標網頁，<a> 標籤中應加上哪一個屬性？",
    options: [
      'href="_blank"',
      'target="_blank"',
      'rel="new_tab"',
      'src="new"'
    ],
    answer: 1,
    explanation: "<a> 標籤的 href 屬性指定目的地網址；target=\"_blank\" 則指示瀏覽器在新的瀏覽環境中開啟連結。實務上也可搭配 rel=\"noopener noreferrer\"。"
  },
  {
    topic: "圖片標籤與空元素",
    question: "關於圖片標籤 <img> 的說明，何者正確？",
    options: [
      "一定需要加上 </img> 作為結束標籤",
      "alt 屬性提供替代文字，對圖片無法顯示時及螢幕閱讀器使用者很重要",
      "src 代表圖片的替代文字，alt 代表圖片檔案路徑",
      "如果圖片找不到，瀏覽器會自動上網搜尋同名圖片補上"
    ],
    answer: 1,
    explanation: "<img> 是 HTML 空元素，不需要結束標籤。src 用來指定圖片來源，alt 用來提供圖片的文字替代資訊，能協助使用螢幕閱讀器的人理解圖片內容。"
  },
  {
    topic: "空白摺疊與強制換行",
    question: "在 HTML 的 <p> 段落中，連續輸入多個 Enter 與空白鍵，瀏覽器一般會如何呈現？",
    options: [
      "畫面會依照原始碼空白數量空出相同距離",
      "瀏覽器通常會將連續空白與換行摺疊成一個空白",
      "程式碼會直接報錯並停止渲染",
      "瀏覽器會自動把它們轉換成水平分隔線 <hr>"
    ],
    answer: 1,
    explanation: "一般 HTML 排版會將原始碼中的連續空白字元摺疊成一個空白。若要在同一段落中強制換行，可以使用 <br>；若要保留原始空白排版，可考慮 CSS 的 white-space 屬性。"
  },
  {
    topic: "專案檔名與首頁規範",
    question: "建立網頁專案時，關於檔案名稱與路徑規範，下列何者最恰當？",
    options: [
      "網站首頁常用 index.html，檔名建議使用英文小寫並避免空格",
      "檔名可以命名為 我的名片.html.txt，瀏覽器仍會當成標準 HTML 首頁",
      "圖片放在 images 資料夾時，路徑一律應使用 images\\\\avatar.png",
      "HTML 屬性值應使用中文全形引號，例如 “me.jpg”"
    ],
    answer: 0,
    explanation: "index.html 是許多伺服器與開發工具常見的預設首頁名稱。檔名使用英文小寫、避免空格可提升跨平台相容性；副檔名應為 .html。網址路徑通常使用正斜線 /，HTML 屬性值則使用半形引號。"
  }
];

const questionsEl = document.getElementById("questions");
const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const quizForm = document.getElementById("quiz-form");
const resultsEl = document.getElementById("results");

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function renderQuestions() {
  questionsEl.innerHTML = quizData.map((item, index) => `
    <section class="question-card" aria-labelledby="question-${index}">
      <div class="question-top">
        <span class="question-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="topic">${escapeHTML(item.topic)}</span>
      </div>
      <h2 class="question-title" id="question-${index}">${escapeHTML(item.question)}</h2>
      <div class="options">
        ${item.options.map((option, optionIndex) => `
          <label class="option">
            <input type="radio" name="question-${index}" value="${optionIndex}">
            <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>
            <span class="option-text">${escapeHTML(option)}</span>
          </label>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function updateProgress() {
  const answered = quizData.filter((_, index) =>
    document.querySelector(`input[name="question-${index}"]:checked`)
  ).length;
  progressText.textContent = `已作答 ${answered} / ${quizData.length} 題`;
  progressFill.style.width = `${answered / quizData.length * 100}%`;
}

function getUserAnswers() {
  return quizData.map((_, index) => {
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    return selected ? Number(selected.value) : null;
  });
}

function showResults(event) {
  event.preventDefault();

  const answers = getUserAnswers();
  const correct = answers.filter((answer, index) => answer === quizData[index].answer).length;
  const unanswered = answers.filter(answer => answer === null).length;
  const wrong = quizData.length - correct - unanswered;
  const score = correct * 10;

  document.getElementById("score").textContent = score;
  document.getElementById("score-percent").textContent = `${score}%`;
  document.getElementById("correct-count").textContent = correct;
  document.getElementById("wrong-count").textContent = wrong;
  document.getElementById("unanswered-count").textContent = unanswered;

  let message = "繼續練習，熟悉每個 HTML 基礎觀念！";
  if (score === 100) message = "太棒了！全部答對，完全掌握這次的測驗內容。";
  else if (score >= 80) message = "表現很好！再複習錯題就更完整了。";
  else if (score >= 60) message = "已經有不錯的基礎，建議再看一次錯題解析。";
  document.getElementById("score-message").textContent = message;

  document.getElementById("score-ring").style.background =
    `conic-gradient(#343940 ${score * 3.6}deg, #e9eaed 0deg)`;

  document.getElementById("review-list").innerHTML = quizData.map((item, index) => {
    const userAnswer = answers[index];
    const isCorrect = userAnswer === item.answer;
    const correctLetter = String.fromCharCode(65 + item.answer);
    const userText = userAnswer === null
      ? "未作答"
      : `${String.fromCharCode(65 + userAnswer)}. ${item.options[userAnswer]}`;

    return `
      <article class="review-card ${isCorrect ? "correct" : "incorrect"}">
        <div class="review-status">${isCorrect ? "✓ 答對" : "✕ " + (userAnswer === null ? "未作答" : "答錯")} · 第 ${index + 1} 題</div>
        <p class="review-question">${escapeHTML(item.question)}</p>
        <p class="review-answer">你的答案：${escapeHTML(userText)}</p>
        <p class="review-answer">正確答案：${correctLetter}. ${escapeHTML(item.options[item.answer])}</p>
        <div class="review-explanation"><strong>解析：</strong>${escapeHTML(item.explanation)}</div>
      </article>
    `;
  }).join("");

  resultsEl.classList.remove("hidden");
  document.getElementById("submit-button").disabled = true;
  document.getElementById("submit-button").textContent = "已提交";
  resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function retryQuiz() {
  quizForm.reset();
  resultsEl.classList.add("hidden");
  document.getElementById("submit-button").disabled = false;
  document.getElementById("submit-button").textContent = "提交答案並查看結果";
  updateProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

renderQuestions();
questionsEl.addEventListener("change", updateProgress);
quizForm.addEventListener("submit", showResults);
document.getElementById("retry-button").addEventListener("click", retryQuiz);
