const convertToKey = (string) => {
    // to lower array
    let arr = string.toLowerCase().split(' ');
    // to camel case
    arr.forEach((word, index) => {
        if (index > 0) {
             const firstLetterRemoved = word.substring(1, word.length);
             const upperCase = word.charAt(0).toUpperCase() + firstLetterRemoved;
             arr[index] = upperCase;
        }
    })

    return arr.join('');
}

const convertToName = (string) => {
    return string.replace(/([A-Z])/g, ' $1')
    .replace(/^./, function(str){ return str.toUpperCase();})
}

export default {convertToKey, convertToName};