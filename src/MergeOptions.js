function mergeOptions(defaultOptions, opt) {
    return (typeof opt === 'object')
        ? Object.assign(defaultOptions, opt)
        : defaultOptions;
}
module.exports = mergeOptions;