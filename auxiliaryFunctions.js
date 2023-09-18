
let appetizer;
let index = 0;

function getAppetizer(arr) {
    appetizer = arr;
}

function gets() {
    return appetizer[index++];
}

function print(txt) {
    console.log(txt);
}

export default { getAppetizer, gets, print }