const _select = (v) => {
	const visibleNonExist = true;

	if (v.neverDisplay) {
		return;
	}
	if (v.hr) {
		return `<hr>`
	}
	if (v.nonExist && visibleNonExist) {
		return `<option value="${v.x},${v.y}">${v.name}</option>`
	}
	if (!v.disabled) {
		return `<option value="${v.x},${v.y}">${v.name}</option>`
	} else {
		return `<option value="${v.x},${v.y}" disabled>${v.name}</option>`
	}
};

async function drawSelectSeishin() {
	const data = await (await fetch("data/dest.json")).json();

	let str = data.seishin.map(_select).join("\n");			
	document.querySelector("#select-dest").innerHTML = str;
}
async function drawSelectKaigan() {
	const data = await (await fetch("data/dest.json")).json();
	let str = data.kaigan.map(_select).join("\n");			
	document.querySelector("#select-dest").innerHTML = str;
}
(async () => {
	const data = ["_", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let str = data.map((v, i) => `<option value="${i}">${v}</option>`).join("\n");
	document.querySelector("#select-number1").innerHTML = str;
	document.querySelector("#select-number2").innerHTML = str;
	drawSelectSeishin();
})();