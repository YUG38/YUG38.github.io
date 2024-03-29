const dynamicText = document.querySelector("span");
const words = ["Developer    ", "Gamer    ", "Youtuber    "];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
	const currentWord = words[wordIndex];
	const currentChar = currentWord.substring(0, charIndex);
	dynamicText.textContent = currentChar;
	dynamicText.classList.add("stop-blinking");
	if (currentWord == "Developer    ") {
		let gradient = `linear-gradient(to bottom, #33ccff, #0066ff)`;
		dynamicText.style.background = gradient;
		dynamicText.style.webkitBackgroundClip = "text";
		dynamicText.style.color = "transparent";
	}

	if (currentWord == "Gamer    ") {
		let gradient = `linear-gradient(to bottom, #8e44ad, #d2b4de)`;
		dynamicText.style.background = gradient;
		dynamicText.style.webkitBackgroundClip = "text";
		dynamicText.style.color = "transparent";
	}

	if (currentWord == "Youtuber    ") {
		let gradient = `linear-gradient(to bottom, #FF0000, #FFC2C2)`;
		dynamicText.style.background = gradient;
		dynamicText.style.webkitBackgroundClip = "text";
		dynamicText.style.color = "transparent";
	}
	if (!isDeleting && charIndex < currentWord.length) {
		charIndex++;
		setTimeout(typeEffect, 220);
	} else if (isDeleting && charIndex > 0) {
		charIndex--;
		setTimeout(typeEffect, 100);
	} else {
		isDeleting = !isDeleting;
		dynamicText.classList.remove("stop-blinking");
		wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
		setTimeout(typeEffect, 550);
	}
};

typeEffect();
