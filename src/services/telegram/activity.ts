import { TELEGRAM_CONFIG } from './config';
import { getClientId } from '../../utils/clientId';

let lastAction = '';
let lastNotificationTime = 0;
const THROTTLE_TIME = 1000; // 1 second throttle

export async function sendActivityNotification(
  action: string, 
  type: 'initial' | 'leave' | 'return'
) {
  const now = Date.now();
  
  // Prevent duplicate actions and throttle
  if (action === lastAction && now - lastNotificationTime < THROTTLE_TIME) {
    return;
  }

  lastAction = action;
  lastNotificationTime = now;

  try {
    const clientId = getClientId();
    let symbol = '🟢'; // Default green for initial
    
    if (type === 'leave') {
      symbol = '🔴';
    } else if (type === 'return') {
      symbol = '🟡';
    }
    
    const message = `<code>${clientId}</code>\n\n${symbol} ${action}`;

    await fetch(`${TELEGRAM_CONFIG.baseUrl}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CONFIG.chatId,
        text: message,
        parse_mode: 'HTML'
      }),
    });
  } catch (error) {
    console.error('Failed to send activity notification:', error);
  }
}