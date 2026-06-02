const TIMER_SECONDS = 15;
const TIMER_CIRCUMFERENCE = 2 * Math.PI * 18;

const CORRECT_EMOJIS = ['✅', '🎉', '⭐', '🏆', '🎊'];
const WRONG_EMOJIS = ['❌', '😬', '💔', '😅', '🙈'];

let playerName = '';
let quizStartTime = 0;
let currentQuestion = 0;
let score = 0;
let answeredCount = 0;
let timeLeft = TIMER_SECONDS;
let timer;

const quizContainer = document.getElementById('quiz-container');
const nameScreen = document.getElementById('name-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const playerNameInput = document.getElementById('player-name');
const nameError = document.getElementById('name-error');
const questionElement = document.getElementById('question');
const imageElement = document.getElementById('question-image');
const answersElement = document.getElementById('answers');
const scoreElement = document.getElementById('score');
const timerCircle = document.getElementById('timer-circle');
const questionNumberElement = document.getElementById('question-number');
const progressFill = document.getElementById('progress-fill');
const leaderboardList = document.getElementById('leaderboard-list');

timerCircle.style.strokeDasharray = TIMER_CIRCUMFERENCE;

function showScreen(screen) {
  nameScreen.style.display = 'none';
  quizScreen.style.display = 'none';
  resultScreen.style.display = 'none';
  screen.style.display = 'block';
}

function updateProgressBar() {
  const pct = (answeredCount / questions.length) * 100;
  progressFill.style.width = pct + '%';
}

function updateTimerRing() {
  const fraction = timeLeft / TIMER_SECONDS;
  const offset = TIMER_CIRCUMFERENCE * (1 - fraction);
  timerCircle.style.strokeDashoffset = offset;
}

function flashContainer(type) {
  const cls = type === 'correct' ? 'flash-correct' : 'flash-wrong';
  quizContainer.classList.add(cls);
  setTimeout(() => quizContainer.classList.remove(cls), 400);
}

function popScore() {
  scoreElement.classList.remove('score-pop');
  void scoreElement.offsetWidth;
  scoreElement.classList.add('score-pop');
  setTimeout(() => scoreElement.classList.remove('score-pop'), 400);
}

function spawnFloatingEmojis(button, isCorrect) {
  const pool = isCorrect ? CORRECT_EMOJIS : WRONG_EMOJIS;
  const count = 5 + Math.floor(Math.random() * 4);
  const rect = button.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;

  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'float-emoji ' + (isCorrect ? 'correct-anim' : 'wrong-anim');
    span.textContent = pool[Math.floor(Math.random() * pool.length)];

    const sizeRem = 1.5 + Math.random() * 1.5;
    const durationMs = 1100 + Math.random() * 500;
    const driftX = (Math.random() - 0.5) * 80;

    span.style.fontSize = sizeRem + 'rem';
    span.style.left = originX + (Math.random() - 0.5) * 60 + 'px';
    span.style.top = originY + 'px';
    span.style.setProperty('--duration', durationMs + 'ms');
    span.style.setProperty('--drift-x', driftX + 'px');

    document.body.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, durationMs + 50);
  }
}

function startQuiz() {
  const name = playerNameInput.value.trim();
  if (!name) {
    nameError.textContent = 'Por favor, digite seu nome para continuar.';
    playerNameInput.focus();
    return;
  }

  nameError.textContent = '';
  playerName = name;
  quizStartTime = Date.now();

  currentQuestion = 0;
  score = 0;
  answeredCount = 0;
  scoreElement.textContent = 'Pontos: 0';
  updateProgressBar();

  showScreen(quizScreen);
  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = TIMER_SECONDS;
  updateTimerRing();
  startTimer();

  const q = questions[currentQuestion];

  questionNumberElement.textContent = 'Pergunta ' + (currentQuestion + 1);
  questionElement.textContent = q.question;

  if (q.image) {
    imageElement.src = q.image;
    imageElement.style.display = 'block';
  } else {
    imageElement.style.display = 'none';
  }

  answersElement.innerHTML = '';

  q.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = answer;
    button.onclick = () => checkAnswer(index, button);
    answersElement.appendChild(button);
  });
}

function checkAnswer(selected, button) {
  clearInterval(timer);

  const correct = questions[currentQuestion].correct;
  const isCorrect = selected === correct;
  const buttons = answersElement.querySelectorAll('button');

  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correct) {
      btn.classList.add('correct');
    }
  });

  if (isCorrect) {
    score += 100;
    scoreElement.textContent = 'Pontos: ' + score;
    popScore();
    flashContainer('correct');
  } else {
    button.classList.add('wrong');
    flashContainer('wrong');
  }

  spawnFloatingEmojis(button, isCorrect);
  answeredCount++;
  updateProgressBar();

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      finishQuiz();
    }
  }, 1500);
}

function startTimer() {
  updateTimerRing();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerRing();

    if (timeLeft <= 0) {
      clearInterval(timer);
      answeredCount++;
      updateProgressBar();
      currentQuestion++;

      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        finishQuiz();
      }
    }
  }, 1000);
}

function getStarCount() {
  const correctCount = score / 100;
  const pct = (correctCount / questions.length) * 100;
  if (pct >= 90) return 5;
  if (pct >= 70) return 4;
  if (pct >= 50) return 3;
  if (pct >= 30) return 2;
  return 1;
}

function renderStars(count) {
  const starsEl = document.getElementById('stars');
  starsEl.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    star.textContent = i < count ? '⭐' : '☆';
    star.style.animationDelay = i * 0.15 + 's';
    starsEl.appendChild(star);
  }
}

async function finishQuiz() {
  clearInterval(timer);

  const timeSeconds = Math.round((Date.now() - quizStartTime) / 1000);

  document.getElementById('result-greeting').textContent =
    'Parabéns, ' + playerName + '!';
  document.getElementById('final-score').textContent =
    'Você fez ' + score + ' pontos em ' + formatTime(timeSeconds) + '!';

  renderStars(getStarCount());
  showScreen(resultScreen);

  try {
    await saveLeaderboardEntry(playerName, score, timeSeconds);
  } catch {
    /* ranking local ou mensagem na tela */
  }

  await renderLeaderboard(leaderboardList, playerName);
}

function restartQuiz() {
  document.getElementById('stars').innerHTML = '';
  playerNameInput.value = playerName;
  showScreen(nameScreen);
  playerNameInput.focus();
}

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.querySelector('.restart').addEventListener('click', restartQuiz);

playerNameInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') startQuiz();
});

showScreen(nameScreen);
updateProgressBar();
