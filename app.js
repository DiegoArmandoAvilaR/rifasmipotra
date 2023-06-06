const TelegramBot = require('node-telegram-bot-api');
const token = '6211111061:AAFWQ2ZZvnbE9DVmuPxDUq056T3P_HWuNL4'; // Reemplaza con tu token
const bot = new TelegramBot(token, { polling: true });

// Manejar el comando /generar_numero
bot.onText(/\/generar_numero/, (msg) => {
  const chatId = msg.chat.id;
  const numeroAleatorio = generarNumero();
  bot.sendMessage(chatId, `Número aleatorio: ${numeroAleatorio}`);
});

// Función para generar un número aleatorio
function generarNumero() {
  const min = 100000; // Número mínimo
  const max = 999999; // Número máximo
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Iniciar el bot
bot.getMe().then((me) => {
  console.log(`El bot se ha iniciado correctamente. ¡Hola, soy ${me.username}!`);
}).catch((error) => {
  console.error('Error al iniciar el bot:', error);
});
