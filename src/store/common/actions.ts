import { createAction } from "@reduxjs/toolkit";
import Post from "../../types/post";

export const setPopupPostAction = createAction(
    "SET_POPUP_POST",
    (post?: Post) => ({ payload: post }));