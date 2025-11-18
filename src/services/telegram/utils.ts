import { getUpdates } from './api';

export async function waitForResponse(messageId: string, maxAttempts = 60): Promise<'accept' | 'decline'> {
  let attempts = 0;
  
  while (attempts < maxAttempts) {
    const result = await getUpdates(messageId);
    if (result) {
      return result;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
    attempts++;
  }
  
  throw new Error('Zeitüberschreitung bei der Anfrage');
}