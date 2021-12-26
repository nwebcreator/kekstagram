import { NameSpace, RootState } from "../root-reducer";

export const getPopupPost = (state: RootState) => state[NameSpace.Common].popupPost;