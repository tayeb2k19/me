export function generateClientId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  return `${timestamp}-${random}`;
}

export function getClientId(): string {
  let clientId = sessionStorage.getItem('clientId');
  if (!clientId) {
    clientId = generateClientId();
    sessionStorage.setItem('clientId', clientId);
  }
  return clientId;
}