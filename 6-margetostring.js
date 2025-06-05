const String1 = 'hello';
const String2 = 'world';
let result = [];

const len = Math.max(String1.length, String2.length);

for (let i = 0; i < len; i++) {
    if (i < String1.length) {
        result += String1[i];
    }
    if (i < String2.length) {
        result += String2[i];
    }
}

console.log(result);
