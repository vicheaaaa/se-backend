import TelegramBot from 'node-telegram-bot-api';

// Initialize the Telegram bot with your bot token
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Function to send a notification to Telegram
const sendOrderNotification = (orderDetails) => {
  const message = `
    New Order Alert!
    
    Order ID: ${orderDetails._id}
    Customer ID: ${orderDetails.userId}
    Items: ${orderDetails.items.length} items
    Total Amount: $${orderDetails.amount}
    Date: ${orderDetails.date}
    Address: ${orderDetails.address}
    Payment Method: ${orderDetails.paymentMethod}
    Order Status: ${orderDetails.status}
  `;
  
  const chatId = process.env.CHAT_ID;  // Get chat ID from environment variable

  // Send the message to the Telegram chat
  bot.sendMessage(chatId, message)
    .then(() => {
      console.log('Notification sent to Telegram');
    })
    .catch((error) => {
      console.error('Error sending notification:', error);
    });
};

export default sendOrderNotification;
