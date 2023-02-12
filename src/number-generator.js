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
    const result = [];

    for (let i = 0; i < config.count; i += 1) {
      result.push(Math.floor(Math.random() * rangeMax) + rangeMin);
    }

    return result;
  };
}

module.exports = generateNumberSequence;
