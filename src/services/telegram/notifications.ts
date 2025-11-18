import { TELEGRAM_CONFIG } from './config';
import { getIPInfo } from '../ip';
import { getClientId } from '../../utils/clientId';
import { getDeviceInfo } from '../../utils/deviceInfo';

let hasInitialNotificationSent = false;

export async function sendVisitorNotification() {
  if (hasInitialNotificationSent) return;
  hasInitialNotificationSent = true;

  try {
    const clientId = getClientId();
    
    const message = `🆕 ✨ New Visitor\n\n` +
                   `<code>${clientId}</code>`;

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
    console.error('Failed to send visitor notification:', error);
  }
}