import { IPInfo } from './types';
import { getClientId } from '../utils/clientId';

const IP_SERVICES = [
  'https://api.ipapi.is',
  'https://api.ipify.org?format=json',
  'https://api.ip.sb/geoip'
];

export async function getIPInfo(): Promise<IPInfo> {
  try {
    // Try each service until one succeeds
    for (const service of IP_SERVICES) {
      try {
        const response = await fetch(service);
        if (!response.ok) continue;
        
        const data = await response.json();
        
        return {
          ip: data.ip || data.query || 'Unknown',
          country: data.country || data.country_name || 'Unknown',
          city: data.city || 'Unknown',
          region: data.region || data.region_name || 'Unknown',
          clientId: getClientId()
        };
      } catch {
        continue;
      }
    }
    throw new Error('All IP services failed');
  } catch (error) {
    console.error('Error fetching IP info:', error);
    return {
      ip: 'Unknown',
      country: 'Unknown',
      city: 'Unknown',
      region: 'Unknown',
      clientId: getClientId()
    };
  }
}