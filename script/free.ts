namespace FreeTheorie {

console.log("script connected");

window.addEventListener("load", handleLoad);

function handleLoad(): void {
    console.log("window loaded");

    let btnM1: HTMLButtonElement | null = <HTMLButtonElement>document.querySelector("#btnM1");
    if (!btnM1)
        return;
    btnM1.addEventListener("click", handleButtonClick);

    let btnM2: HTMLButtonElement | null = <HTMLButtonElement>document.querySelector("#btnM2");
    if (!btnM2)
        return;
    btnM2.addEventListener("click", handleButtonClick);

    let btnM3: HTMLButtonElement | null = <HTMLButtonElement>document.querySelector("#btnM3");
    if (!btnM3)
        return;
    btnM3.addEventListener("click", handleButtonClick);

    let btnM4: HTMLButtonElement | null = <HTMLButtonElement>document.querySelector("#btnM4");
    if (!btnM4)
        return;
    btnM4.addEventListener("click", handleButtonClick);

    let btnM5: HTMLButtonElement | null = <HTMLButtonElement>document.querySelector("#btnM5");
    if (!btnM5)
        return;
    btnM5.addEventListener("click", handleButtonClick);

    let btnKontakt: HTMLButtonElement | null = <HTMLButtonElement>document.querySelector("#btnKontakt");
    if (!btnKontakt)
        return;
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