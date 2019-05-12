import { getStorage, setStorage } from "./libs/ChromeStorage";
import reloadExtension from "./libs/reloadExtension";

chrome.runtime.onInstalled.addListener(async details => {
  chrome.browserAction.enable();
  await setStorage("mode", false);
  chrome.browserAction.setBadgeText({ text: "OFF" });
});

chrome.runtime.onUpdateAvailable.addListener(async details => {
  reloadExtension();
});

/*ここに変数を置くのはだめそう*/
/*EventPageにおいてはインスタンスや状態は持てないものと思ったほうが良い?*/

/*chrome-promiseではtabs.exeCuteScriptが使えないようである */

const setModeOn = async () => {
  await setStorage("mode", true).catch(e => console.log(e));
  //await thenChrome.storage.local.set({ mode: true });
  chrome.browserAction.setBadgeText({ text: "ON" });
};

const setModeOff = async () => {
  await setStorage("mode", false).catch(e => console.log(e));
  //await thenChrome.storage.local.set({ mode: false });
  chrome.browserAction.setBadgeText({ text: "OFF" });
};

const injectScript = () => {
  chrome.tabs.executeScript({ file: "./scripts/content.js" }, result => {
    console.dir(result);
  });
};

chrome.browserAction.onClicked.addListener(async tab => {
  console.log("browserAction is clicked");
  console.dir(tab);

  const present: boolean = await getStorage("mode");
  if (present == true) {
    await setModeOff();
  } else if (present == false) {
    await setModeOn();
    injectScript();
  }
});

chrome.tabs.onActivated.addListener(tab => {
  console.log("tab is activated!");
  console.dir(tab);
});
