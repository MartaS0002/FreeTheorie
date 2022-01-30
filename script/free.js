"use strict";
var FreeTheorie;
(function (FreeTheorie) {
    console.log("script connected");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("window loaded");
        let btnM1 = document.querySelector("#btnM1");
        if (!btnM1)
            return;
        btnM1.addEventListener("click", handleButtonClick);
        let btnM2 = document.querySelector("#btnM2");
        if (!btnM2)
            return;
        btnM2.addEventListener("click", handleButtonClick);
        let btnM3 = document.querySelector("#btnM3");
        if (!btnM3)
            return;
        btnM3.addEventListener("click", handleButtonClick);
        let btnM4 = document.querySelector("#btnM4");
        if (!btnM4)
            return;
        btnM4.addEventListener("click", handleButtonClick);
        let btnM5 = document.querySelector("#btnM5");
        if (!btnM5)
            return;
        btnM5.addEventListener("click", handleButtonClick);
        let btnKontakt = document.querySelector("#btnKontakt");
        if (!btnKontakt)
            return;
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