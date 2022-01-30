"use strict";
var FreeTheorie;
(function (FreeTheorie) {
    console.log("script connected");
    window.addEventListener("load", handleLoad);
    let btnM1;
    let btnM2;
    let btnM3;
    let btnM4;
    let btnM5;
    let btnKontakt;
    function handleLoad() {
        console.log("window loaded");
        btnM1 = document.querySelector("#btnM1");
        btnM1.addEventListener("click", handleButtonClick);
        btnM2 = document.querySelector("#btnM2");
        btnM2.addEventListener("click", handleButtonClick);
        btnM3 = document.querySelector("#btnM3");
        btnM3.addEventListener("click", handleButtonClick);
        btnM4 = document.querySelector("#btnM4");
        btnM4.addEventListener("click", handleButtonClick);
        btnM5 = document.querySelector("#btnM5");
        btnM5.addEventListener("click", handleButtonClick);
        btnKontakt = document.querySelector("#btnKontakt");
        btnKontakt.addEventListener("click", handleKontaktButtonClick);
    }
    function handleButtonClick() {
        console.log("button clicked");
        window.alert("Vielen Dank, deine Antworten wurden eingereicht. Dein:e Professor:in wird sich bald bei mit dem Feedback bei dir melden.");
    }
    function handleKontaktButtonClick() {
        console.log("button clicked");
        window.alert("Deine Anfrage wurde versendet. Wir werden uns bald bei dir melden.");
    }
})(FreeTheorie || (FreeTheorie = {}));
//# sourceMappingURL=free.js.map