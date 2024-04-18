import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface gameState {
  roomNum: number;
  nickname: string;
  id: string;
  myStream: any;
  userList: any;
}

const initialState: gameState = {
  id: "",
  roomNum: 0,
  nickname: "",
  myStream: "",
  userList: [],
};

export const gameSlice = createSlice({
  name: "gameInfo",
  initialState,
  reducers: {
    setStream: (state, action: PayloadAction<any>) => {
      state.myStream = action.payload;
    },
    setID: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setRooms: (state, action: PayloadAction<number>) => {
      state.roomNum = action.payload;
    },
    setNickName: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setSocketID: (state, action: PayloadAction<string>) => {
      state.userList.push(action.payload);
    },
  },
});

export const { setSocketID, setRooms, setNickName, setID, setStream } =
  gameSlice.actions;

export default gameSlice.reducer;
