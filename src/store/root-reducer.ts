import { combineReducers } from "redux";
import { commonReducer } from "./common/common-reducer";

export enum NameSpace {
    Common = "COMMON"
}

const reducers = {
    [NameSpace.Common]: commonReducer
};

export const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;