import {ApiClient} from "@twurple/api";

import { authProvider } from "./auth.js";

export const apiClient = new ApiClient({
  authProvider,
})