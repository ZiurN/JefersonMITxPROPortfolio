const removeSNames = (names) => {
    let expectedOutput = names;
    names.forEach(name => {
        console.log(name);
        console.log(name.toLowerCase().charAt(0));
        if(name.toLowerCase().charAt(0) === 's') {
            const index = expectedOutput.indexOf(name);
            expectedOutput.splice(index, 1);
        }
    });
    return expectedOutput;
}
module.exports = removeSNames;