import { ActionsType, ActionResult } from "hyperapp"
import { State } from "./myState";

export interface Actions {
    up: (value :number) => (myState: State) => ActionResult<State>
    down : (value :number) => (myState: State) => ActionResult<State>
}

export const action: ActionsType<State, Actions> = {
    up : (value: number) => (myState) => {
        return {
            count: myState.count + value
        }
    },
    down : (value: number) => (myState) => {
        return {
            count: myState.count - value
        }
    }
};