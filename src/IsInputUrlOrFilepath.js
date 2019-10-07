function IsInputUrlOrFilepath(input) {
    if (typeof input !== `string`) throw new TypeError(`Input must be a string.`);
    else console.log(`Excellent Input`);
}

module.exports = IsInputUrlOrFilepath;