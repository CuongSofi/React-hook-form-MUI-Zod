import { create } from "zustand";
import { ILogin } from "../modules/auth/interfaces/auth.interface";
import httpService from "../service/httpService";

interface IUserStore {
  info: ILogin;
  updateInfo: (newInfo: ILogin) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
  info: {
    username: httpService.getInfoLocal()?.username ?? "",
    password: httpService.getInfoLocal()?.password ?? "",
  },
  updateInfo: (newInfo) => set({ info: newInfo }),
}));
