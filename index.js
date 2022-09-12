function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    };
    return messages;
}
console.log(messages)

/*function countDown() {
    for (let countDown = 11; countDown > 0; countDown--){
        console.log(countDown);
    }
}
console.log(countDown)
*/
function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown--);
    }
    return countDown;
}