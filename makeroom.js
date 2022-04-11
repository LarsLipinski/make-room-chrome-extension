if (location.href.startsWith("https://developer.amazon.com/alexa/console/ask/test/")) {

	const persCheckbox = document.getElementById("alexa_personalization");
	if (persCheckbox && persCheckbox.disabled) {
		const persFrame0 = document.getElementById("iFrameResizer0");
		if (persFrame0) {persFrame0.remove();}

		const persFrame1 = document.getElementById("iFrameResizer1");
		if (persFrame1) {persFrame1.remove();}
	}
}