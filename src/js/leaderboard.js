const LEADERBOARD_MAX = 5;
const LEADERBOARD_KEY = 'tarso-quiz-leaderboard';

function isSupabaseConfigured() {
  return (
    typeof CONFIG !== 'undefined' &&
    CONFIG.supabaseUrl &&
    CONFIG.supabaseAnonKey &&
    !CONFIG.supabaseUrl.includes('COLOQUE_SUA_URL') &&
    !CONFIG.supabaseAnonKey.includes('COLOQUE_SUA_CHAVE')
  );
}

function supabaseHeaders() {
  return {
    apikey: CONFIG.supabaseAnonKey,
    Authorization: 'Bearer ' + CONFIG.supabaseAnonKey,
    'Content-Type': 'application/json'
  };
}

async function fetchLeaderboardFromCloud() {
  const url =
    CONFIG.supabaseUrl +
    '/rest/v1/leaderboard?select=name,score,time_seconds,created_at' +
    '&order=score.desc,time_seconds.asc' +
    '&limit=' + LEADERBOARD_MAX;

  const response = await fetch(url, { headers: supabaseHeaders() });

  if (!response.ok) {
    throw new Error('Erro ao carregar ranking');
  }

  const data = await response.json();
  return data.map((entry) => ({
    name: entry.name,
    score: entry.score,
    timeSeconds: entry.time_seconds,
    date: entry.created_at
  }));
}

async function saveLeaderboardToCloud(name, score, timeSeconds) {
  const url = CONFIG.supabaseUrl + '/rest/v1/leaderboard';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      ...supabaseHeaders(),
      Prefer: 'return=minimal'
    },
    body: JSON.stringify({
      name: name.slice(0, 30),
      score,
      time_seconds: timeSeconds
    })
  });

  if (!response.ok) {
    throw new Error('Erro ao salvar pontuação');
  }
}

function getLeaderboardLocal() {
  try {
    const data = localStorage.getItem(LEADERBOARD_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveLeaderboardLocal(name, score, timeSeconds) {
  const entry = { name, score, timeSeconds, date: new Date().toISOString() };
  const board = getLeaderboardLocal();
  board.push(entry);

  board.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.timeSeconds - b.timeSeconds;
  });

  localStorage.setItem(
    LEADERBOARD_KEY,
    JSON.stringify(board.slice(0, LEADERBOARD_MAX))
  );
}

async function getLeaderboard() {
  if (isSupabaseConfigured()) {
    return fetchLeaderboardFromCloud();
  }
  return getLeaderboardLocal();
}

async function saveLeaderboardEntry(name, score, timeSeconds) {
  if (isSupabaseConfigured()) {
    await saveLeaderboardToCloud(name, score, timeSeconds);
    return;
  }
  saveLeaderboardLocal(name, score, timeSeconds);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins > 0) {
    return mins + ' min ' + secs.toString().padStart(2, '0') + ' s';
  }
  return secs + ' s';
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

async function renderLeaderboard(container, currentName) {
  container.innerHTML = '<p class="leaderboard-loading">Carregando ranking...</p>';

  let board;
  try {
    board = await getLeaderboard();
  } catch {
    container.innerHTML =
      '<p class="leaderboard-empty">Não foi possível carregar o ranking. Tente recarregar a página.</p>';
    return;
  }

  container.innerHTML = '';

  if (board.length === 0) {
    container.innerHTML =
      '<p class="leaderboard-empty">Nenhum resultado ainda. Seja o primeiro!</p>';
    return;
  }

  const table = document.createElement('table');
  table.className = 'leaderboard-table';
  table.innerHTML =
    '<thead><tr>' +
    '<th>#</th><th>Nome</th><th>Pontos</th><th>Tempo</th>' +
    '</tr></thead>';

  const tbody = document.createElement('tbody');

  board.forEach((entry, index) => {
    const row = document.createElement('tr');
    if (entry.name === currentName) {
      row.classList.add('leaderboard-current');
    }
    row.innerHTML =
      '<td>' + (index + 1) + '</td>' +
      '<td>' + escapeHtml(entry.name) + '</td>' +
      '<td>' + entry.score + '</td>' +
      '<td>' + formatTime(entry.timeSeconds) + '</td>';
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);
}
