/*chrome.stroage関連の処理を一手に担う関数たち*/

export const getStorage = (key: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    chrome.storage.local.get(key, (result: any) => {
      const resultData: any[] = Object.values(result);
      if (resultData[0] != undefined) {
        resolve(resultData[0]);
      } else {
        console.log("something went wrong");
        reject();
      }
    });
  });
};

export const setStorage = (key: string, value: any): Promise<any> => {
  const saveData: object = { [key]: value };
  console.log(saveData);
  return new Promise<any>((resolve, reject) => {
    chrome.storage.local.set(saveData, async () => {
      const result: any = await getStorage(key);
      resolve(result);
    });
  });
};
