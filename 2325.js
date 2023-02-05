// 2325. Decode the Message
// Easy
/*
ou are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.
*/

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let newArr = [];
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    for(const letter of key){
        if(!newArr.includes(letter) && letter !== " "){
            newArr.push(letter);
        }
    }
    let output = [];
    for(const msg of message){
        if(msg === " ") {
            output.push(" ");
        }
        else {
            let code = newArr.indexOf(msg);
            output.push(code);
        }
    }
    output = output.map((item) => {
        return item === " " ? " " : alphabet[item];
    })
    return output.join("");
};
