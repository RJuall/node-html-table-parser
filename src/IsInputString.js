function IsInputString(input) {
    if (typeof input !== `string`) throw new TypeError(`Input must be a string.`);
}
module.exports = IsInputString;