import App from "../src/App";

chrome.runtime.onInstalled.addListener(() => {
    App()
});