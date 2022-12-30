import dotenv from 'dotenv';
import { bool, cleanEnv, str } from 'envalid';

try {
  dotenv.config();
  // eslint-disable-next-line no-empty
} catch {}

export const config = cleanEnv(process.env, {
  TWITCH_CLIENT_ID: str(),
  TWITCH_CLIENT_SECRET: str()
})