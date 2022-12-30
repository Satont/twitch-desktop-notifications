import {RefreshingAuthProvider} from "@twurple/auth";
import fs from 'node:fs/promises'
import { resolve } from 'node:path'

import { config } from "../config.js";

const tokensPath = resolve(process.cwd(), 'tokens.json')

const tokenData = JSON.parse(await fs.readFile(tokensPath, 'utf-8'));
export const authProvider = new RefreshingAuthProvider({
    clientId: config.TWITCH_CLIENT_ID,
    clientSecret: config.TWITCH_CLIENT_SECRET,
    onRefresh: async (newTokenData) => {
      await fs.writeFile(
        tokensPath,
        JSON.stringify(newTokenData, null, 4),
        'utf-8')
    },
  },
  tokenData
);