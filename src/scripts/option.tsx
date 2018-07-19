import chromep from 'chrome-promise';
import {h, app, View} from "hyperapp"
import {myState, State} from "./components/myState"
import {action, Actions} from "./components/action"
import {view} from "./components/view";

window.onload = async function () {
    console.log("This is Option Page.");
    const container = document.getElementById("root") as HTMLDivElement;
    app<State, Actions>(myState, action, view, document.body);
};