const endpoint = "https://b77a-103-208-204-162.ngrok-free.app/";

function getStatus() {
	fetch(endpoint + "/getStatus")
	.then(response => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	})
	.then(result => {
		if(result["led1"] == "ON") {
			ledOne.style.background = '#203b69';
			ledOneImage.src = './assets/images/led-on.png';
			ledOne.textContent = 'TURN OFF';
		} else {
			ledOne.style.background = '#212429';
			ledOneImage.src = './assets/images/led-off.png';
			ledOne.textContent = 'TURN ON';
		};
		if(result["led2"] == "ON") {
			ledTwo.style.background = '#203b69';
			ledTwoImage.src = './assets/images/led-on.png';
			ledTwo.textContent = 'TURN OFF';
		} else {
			ledTwo.style.background = '#212429';
			ledTwoImage.src = './assets/images/led-off.png';
			ledTwo.textContent = 'TURN ON';
		};
		if(result["led repeat"] == "ON") {
			ledRepeat.style.background = '#203b69';
			ledRepeatImage.src = './assets/images/led-on.png';
			ledRepeat.textContent = 'TURN OFF';
		} else {
			ledRepeat.style.background = '#212429';
			ledRepeatImage.src = './assets/images/led-off.png';
			ledRepeat.textContent = 'TURN ON';
		};
		if(result["relay1"] == "ON") {
			relayOne.style.background = '#203b69';
			relayOneImage.src = './assets/images/led-on.png';
			ledTwo.textContent = 'TURN OFF';
		} else {
			relayOne.style.background = '#212429';
			relayOneImage.src = './assets/images/led-off.png';
			relayOne.textContent = 'TURN ON';
		};
		if(result["relay2"] == "ON") {
			relayTwo.style.background = '#203b69';
			relayTwoImage.src = './assets/images/led-on.png';
			relayTwo.textContent = 'TURN OFF';
		} else {
			relayTwo.style.background = '#212429';
			relayTwoImage.src = './assets/images/led-off.png';
			relayTwo.textContent = 'TURN ON';
		}
	})
	.catch(error => {
		alert("Failled fetch data");
	})
}


function setStatus(button) {
	const value = button.getAttribute("data-set");

	fetch(endpoint + "/setStatus", {
		method: "POST",
		body: JSON.stringify({
			value: value
		})
	}).then(() => location.reload());
}

function setLedTwo() {
	fetch(endpoint + "/setLedTwo", {
		method: "POST"
	}).then(() => location.reload());
}

function setLedThree() {
	fetch(endpoint + "/setLedThree", {
		method: "POST"
	}).then(() => location.reload());
}

function setLedFour() {
	fetch(endpoint + "/setLedFour", {
		method: "POST"
	}).then(() => location.reload());
}

function setLedRepeat() {
	fetch(endpoint + "/setLedRepeat", {
		method: "POST"
	}).then(() => location.reload());
}

function setFanOne() {
	fanOne.style.background = '#203b69';
	fanOneImage.src = './assets/images/fan-on.png';
	fanOne.textContent = 'TURN OFF';
}

function setFanTwo() {
	fanTwo.style.background = '#203b69';
	fanTwoImage.src = './assets/images/fan-on.png';
	fanTwo.textContent = 'TURN OFF';
}

getStatus();
