function validateInput(input, type) {
    if (typeof input !== type) throw new TypeError(`Input must be of type ${type}.`);
}
module.exports = validateInput;