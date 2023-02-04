function generateNumberSequence(config) {
    if (typeof config === 'object' && config !== null && Object.keys(config).length === 3) {
        return () => {
            let result = [];
            for ( i = 0; i < config.count; i++ ) {
                result.push(Math.floor(Math.random() * config.rangeMax) + config.rangeMin)
            }
            return result;
        }
    }
    throw new Error('Function parameters might be object with 3 properties')  
}

module.exports = generateNumberSequence;
