const makeWowDelay = (delay, startingDelay) => {
	const delayFloat = parseFloat(`.${delay}`);
	const wowDelay = delayFloat + startingDelay + delayFloat;
	return `${wowDelay.toFixed(1)}s`;
};

export default makeWowDelay;
