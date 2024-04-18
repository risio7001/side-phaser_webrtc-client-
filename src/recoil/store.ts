import { atom } from "recoil";

export const userName = atom<{
  name?: string;
} | null>({
  key: "users",
  default: null,
});
