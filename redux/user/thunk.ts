import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../api";
import { User } from "../../types";
import { fetchJson } from "../../libs";

export const signIn = createAsyncThunk(
  "user/signIn",
  async (params: Parameters<typeof api.signIn>[0]) => {
    const user = await fetchJson<User>("/api/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
    return user;
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  await fetchJson("/api/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
});
