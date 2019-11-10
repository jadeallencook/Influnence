chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		if (
			window.location.host === 'www.instagram.com' &&
			window.location.search === '?feed'
		) {
			let liked = 0;
			setInterval(() => {
				let heart = document.querySelector('span.glyphsSpriteHeart__outline__24__grey_9[aria-label="Like"]');
				if (heart) {
					heart.click();
					liked++;
					console.log(`${liked} photo(s) liked ${new Date().toLocaleTimeString()}`);
					window.scrollBy(0, 500);
				} else {
					window.scrollBy(0, document.body.scrollHeight);
				}
			}, 45000)
		}
	}
	}, 10);
});