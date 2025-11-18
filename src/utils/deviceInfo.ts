import { DeviceInfo } from '../services/types';

export function getDeviceInfo(): DeviceInfo {
  const ua = navigator.userAgent;
  
  // Browser detection
  let browser = 'Unknown';
  if (ua.includes('Firefox/')) {
    browser = 'Firefox';
  } else if (ua.includes('Chrome/') && !ua.includes('Edg/')) {
    browser = 'Chrome';
  } else if (ua.includes('Safari/') && !ua.includes('Chrome/')) {
    browser = 'Safari';
  } else if (ua.includes('Edg/')) {
    browser = 'Edge';
  } else if (ua.includes('Opera/') || ua.includes('OPR/')) {
    browser = 'Opera';
  }

  // OS detection
  let os = 'Unknown';
  if (ua.includes('Windows')) {
    os = 'Windows';
  } else if (ua.includes('Mac OS')) {
    os = 'macOS';
  } else if (ua.includes('Android')) {
    os = 'Android';
  } else if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('iPod')) {
    os = 'iOS';
  } else if (ua.includes('Linux')) {
    os = 'Linux';
  }

  // Device type detection
  let device = 'Desktop';
  if (/Mobile|Android|iPhone|iPod/i.test(ua)) {
    device = 'Mobile';
  } else if (/iPad|Tablet/i.test(ua)) {
    device = 'Tablet';
  }

  return { browser, os, device };
}