import { TestingDashboard } from "../src/TestingDashboard.js";


document.addEventListener("readystatechange", (e) => {
    if (document.readyState === "complete") {
        new TestingDashboard();
    }
});