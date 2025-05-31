// --- Защита от открытия консоли и выкачивания сайта ---
(function() {
  document.addEventListener('contextmenu', e => e.preventDefault());
  document.onkeydown = function(e) {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'U')
    ) {
      return false;
    }
  };
  window.addEventListener('keydown', function(e) {
    if (e.key === 'F12') e.preventDefault();
  });
})();

// --- Авторизация ---
const users = [
  { login: 'sosal', password: '677ATCK6ri', name: 'Друг' },
  { login: 'alexandervilovsky', password: '48katilo', name: 'Я' }
];

let currentUser = null;

const authForm = document.getElementById('auth-form');
const authError = document.getElementById('auth-error');
const authContainer = document.getElementById('auth-container');
const chatContainer = document.getElementById('chat-container');
const logoutBtn = document.getElementById('logout');

if (authForm) {
  authForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();
    const user = users.find(u => u.login === login && u.password === password);
    if (user) {
      currentUser = user;
      authContainer.style.display = 'none';
      chatContainer.style.display = '';
      loadMessages();
    } else {
      authError.textContent = 'Неверный логин или пароль';
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', function() {
    currentUser = null;
    chatContainer.style.display = 'none';
    authContainer.style.display = '';
    document.getElementById('login').value = '';
    document.getElementById('password').value = '';
    authError.textContent = '';
  });
}

// --- Заглушка для загрузки сообщений (реализую позже) ---
function loadMessages() {
  // TODO: Загрузка сообщений с сервера
} 