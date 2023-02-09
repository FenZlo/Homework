function generateNumberSequence(config) {
    if (typeof config !== 'object' || config === null) {
        throw new Error('Config param should be an object');
    }

    if (!config.count) {
        throw new Error('Config.count param should be defined');
    }

    const rangeMin = config.rangeMin || 0;
    const rangeMax = config.rangeMax || 9;

    return () => {
    let result = [];
    for (i = 0; i < config.count; i++) {
        result.push(Math.floor(Math.random() * rangeMax) + rangeMin);
    }
    return result;
    };
}

module.exports = generateNumberSequence;
