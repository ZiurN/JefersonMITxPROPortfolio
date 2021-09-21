const Greet= (name) => {
    if(name === null) {
        return 'Hello!! stranger';
    } else if(Array.isArray(name)) {
        let stringToReturn = 'Hello!! ';
        for(let i = 0; i < name.length; i++) {
            if(i === name.length - 1) {
                stringToReturn += name[i];
            }else {
                stringToReturn += name[i] + ', ';
            }
        }
        return stringToReturn;
    }else if(typeof name === 'string') {
        if(name === name.toUpperCase()) {
            return 'HELLO!! ' + name;
        } else {
            return 'Hello!! ' + name;
        }
    }
}
module.exports = Greet;