import chromep from 'chrome-promise';
import axios from 'axios';

console.log("This is content scripts");

axios.get("https://www.google.co.jp")
    .then((response) => {
        console.log(response);
    })
    .catch((e) => {
        console.log(e);
    });