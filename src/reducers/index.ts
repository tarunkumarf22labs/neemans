import { State , Action } from "../types"

export function mediaHandler(state: State, action: Action) {
    const { type, payload } = action;
    switch (type) {
      case "SETTOGGLE":
        return { ...state, toogleopen: !state.toogleopen };
      case "SETVIDEOLENGTH":
        return { ...state, videolength: payload };
      case "SETISMUTE":
        return { ...state, ismute: !state.ismute };
    }
}
