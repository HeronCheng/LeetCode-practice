/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let words = sentence.split(" ");
    if(words.length === 1){
        return words[0].slice(0,1) === words[0].slice(-1);
    }
    else {
        let result;
        for(let i=0;i<words.length;i++){
            if(i<(words.length-1) && words[i].slice(-1) !== words[i+1].slice(0,1)){
                result = false;
                break
            }
            else if(i===(words.length-1) && words[i].slice(-1) !== words[0].slice(0,1)){
                result = false;
                break
            }
            else{
                result = true;
            }
        }
        return result;
    }
};
