const removeSNames = (names) => {
    let expectedOutput = names;
    names.forEach(name => {
        if(name.toLowerCase().charAt(0) === 's') {
            const index = expectedOutput.indexOf(name);
            expectedOutput.splice(index, 1);
        }
    });
    return expectedOutput;
}
module.exports = removeSNames;