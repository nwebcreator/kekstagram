import { createReducer } from "@reduxjs/toolkit";
import { setPopupPostAction } from "./actions";
import { CommonState } from "./common-state";

const initialState: CommonState = {
    popupPost: undefined
};

export const commonReducer = createReducer(initialState, builder => {
    builder
        .addCase(setPopupPostAction, (state, action) => {
            state.popupPost = action.payload;
        });
})