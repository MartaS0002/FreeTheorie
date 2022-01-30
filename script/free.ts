namespace FreeTheorie {

console.log("script connected");

window.addEventListener("load", handleLoad);

let btnM1: HTMLButtonElement;
let btnM2: HTMLButtonElement;
let btnM3: HTMLButtonElement;
let btnM4: HTMLButtonElement;
let btnM5: HTMLButtonElement;
let btnKontakt: HTMLButtonElement;

function handleLoad(): void {
    console.log("window loaded");

    btnM1 = <HTMLButtonElement>document.querySelector("#btnM1");
    btnM1.addEventListener("click", handleButtonClick);

    btnM2 = <HTMLButtonElement>document.querySelector("#btnM2");
    btnM2.addEventListener("click", handleButtonClick);

    btnM3 = <HTMLButtonElement>document.querySelector("#btnM3");
    btnM3.addEventListener("click", handleButtonClick);

    btnM4 = <HTMLButtonElement>document.querySelector("#btnM4");
    btnM4.addEventListener("click", handleButtonClick);

    btnM5 = <HTMLButtonElement>document.querySelector("#btnM5");
    btnM5.addEventListener("click", handleButtonClick);

    btnKontakt = <HTMLButtonElement>document.querySelector("#btnKontakt");
    btnKontakt.addEventListener("click", handleKontaktButtonClick);
}

function handleButtonClick(): void {
    console.log("button clicked");
    window.alert("Vielen Dank, deine Antworten wurden eingereicht. Dein:e Professor:in wird sich bald bei mit dem Feedback bei dir melden.");
}

function handleKontaktButtonClick(): void {
    console.log("button clicked");
    window.alert("Deine Anfrage wurde versendet. Wir werden uns bald bei dir melden.");
}


}