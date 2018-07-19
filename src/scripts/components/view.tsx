import {h, app, View} from "hyperapp"
import {myState, State} from "./myState"
import {action, Actions} from "./action"

export const view: View<State, Actions> = (myState, action) => (
    <div>
        <button onClick={() => {
            action.up(1)
        }}>プラス
        </button>

        <button onClick={() => {
            action.down(1)
        }}>マイナス
        </button>

        <h3>
            count:{myState.count}
        </h3>

    </div>
);