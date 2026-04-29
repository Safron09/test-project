import { authenticator } from 'otplib';
import { config } from '../utils/config';

export function generateTotpCode(): string {
  return authenticator.generate(config.totpSecret);
}
