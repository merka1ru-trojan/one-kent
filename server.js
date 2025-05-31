const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Папки для хранения файлов
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const DATA_DIR = path.join(__dirname, 'data');
const CHAT_FILE = path.join(DATA_DIR, 'chat.txt');

// Создание папок, если не существуют
if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR);
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);
if (!fs.existsSync(CHAT_FILE)) fs.writeFileSync(CHAT_FILE, '');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// TODO: Добавить маршруты для авторизации, сообщений, загрузки файлов

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 