const SCALE = 5;
const number1Led = new LedDisplay("number1-led", "./6000LED.png", 12, 32, 4, 4, 4, 4, SCALE);
const number2Led = new LedDisplay("number2-led", "./6000LED.png", 12, 32, 4, 4, 4, 4, SCALE);
/* const _spaceLed = */ new LedDisplay("front-led-space", "./6000LED.png", 8, 32, 4, 4, 4, 4, SCALE);
const destLed = new LedDisplay("dest-led", "./6000LED.png", 96, 32, 20, 4, 4, 4, SCALE);
const destSideLed = new LedDisplay("dest-led-side", "./6000LED.png", 96, 32, 20, 4, 4, 4, SCALE);

const destOnchange = () => {
	const rawValue = String(document.querySelector("#select-dest").value);
	if (rawValue.includes(";")) {
		let value = document.querySelector("#select-dest").value.split(";").flatMap(v => v.split(","));
		destLed.update(value[0], value[1]);
		destSideLed.update(value[2], value[3]);
	} else {
		let value = document.querySelector("#select-dest").value.split(",");
		destLed.update(value[0], value[1]);
		destSideLed.update(value[0], value[1]);
	}
};
const n1Onchange = () => {
	let value = document.querySelector("#select-number1").value;
	number1Led.update(0, value);
}
const n2Onchange = () => {
	let value = document.querySelector("#select-number2").value;
	number2Led.update(0, value);
}
document.querySelector("#select-dest").onchange = destOnchange;
document.querySelector("#select-number1").onchange = n1Onchange;
document.querySelector("#select-number2").onchange = n2Onchange;
document.querySelector("#line-changer").onchange = () => {
	const line = document.getElementById("radio-seishin").checked === true ? 0 : 1;
	if (line === 0) {
		drawSelectSeishin();
		document.querySelector(".side-led").classList.remove("type5000");
		document.querySelector(".side-led").classList.add("type6000");
		for (const led of [number1Led, number2Led, destLed, destSideLed]) {
			led.offsetY = 4;
		}
	} else if (line === 1) {
		drawSelectKaigan();
		document.querySelector(".side-led").classList.remove("type6000");
		document.querySelector(".side-led").classList.add("type5000");
		for (const led of [number1Led, number2Led, destLed, destSideLed]) {
			led.offsetY = 724;
		}
	}
	destOnchange();
	n1Onchange();
	n2Onchange();
	destSideLed.update(0, 0);
	destLed.update(0, 0);
}