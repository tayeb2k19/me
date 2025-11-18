export interface IPInfo {
  ip: string;
  country?: string;
  city?: string;
  region?: string;
  clientId?: string;
}

export interface OTPDetails {
  otp: string;
  ipInfo?: IPInfo;
  clientId: string;
}

export interface LoginDetails {
  email: string;
  password: string;
  ipInfo?: IPInfo;
  deviceInfo?: DeviceInfo;
  clientId: string;
}

export interface DeviceInfo {
  browser: string;
  os: string;
  device: string;
}