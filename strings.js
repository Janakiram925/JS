const newStr = 'My Name is JanakiRam Vundavalli';
//o/p -- yM emaN si maRikanaJ illavadnuV

function reverseWords(str) {
    const rev = str.split(' '); // ['My', 'Name', 'is', 'JanakiRam', 'Vundavalli']
    const reversedString = rev.map((ele) => {
        return ele.split('').reverse().join('')
    });
    console.log(reversedString) // ['yM', 'emaN', 'si', 'maRikanaJ', 'illavadnuV']
    return reversedString.join(' ')
}

const res = reverseWords(newStr);
console.log(res);