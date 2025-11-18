import { TELEGRAM_CONFIG } from './config';
import { TelegramMessage, TelegramUpdate } from './types';

export async function sendMessage(text: string): Promise<string> {
  const response = await fetch(`${TELEGRAM_CONFIG.baseUrl}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CONFIG.chatId,
      text,
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [[
          { text: '✅ Accept', callback_data: 'accept' },
          { text: '❌ Decline', callback_data: 'decline' }
        ]]
      }
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to send message');
  }

  const data = await response.json();
  return data.result.message_id;
}

export async function getUpdates(messageId: string): Promise<'accept' | 'decline' | null> {
  const response = await fetch(`${TELEGRAM_CONFIG.baseUrl}/getUpdates?offset=-1&limit=1`);
  if (!response.ok) {
    throw new Error('Failed to get updates');
  }
  
  const data = await response.json();
  
  const update = data.result.find((update: TelegramUpdate) => 
    update.callback_query?.message?.message_id.toString() === messageId.toString()
  );

  if (update?.callback_query?.data) {
    await fetch(`${TELEGRAM_CONFIG.baseUrl}/answerCallbackQuery`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        callback_query_id: update.callback_query.id
      })
    });

    return update.callback_query.data as 'accept' | 'decline';
  }

  return null;
}