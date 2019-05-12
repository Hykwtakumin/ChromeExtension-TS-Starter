import { getStorage } from "./libs/ChromeStorage";

console.log("This is content scripts");

/*injectされて最初に実行する関数*/
// const init = async () => {
//   const mode = await getStorage("mode");
//   if (mode) {
//     fillRed();
//   }
// };

// init();

chrome.storage.onChanged.addListener(details => {
  if (Object.keys(details).includes("mode")) {
    if (details.mode.newValue === true) {
      console.log(`mode is on`);
    } else if (details.mode.newValue === false) {
      console.log(`mode is off`);
    }
  }
});
