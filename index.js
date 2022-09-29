function shout(string) {
    //todo
return string.toUpperCase();
}
"Hello!".toUpperCase();

function whisper(string) {
return string.toLowerCase()
}
//"Hello!".toLowerCase();

function logShout(string) {
    console.log(string.toUpperCase())
}
//console.log(string.toUpperCase)

function logWhisper(string) {
    console.log(string.toLowerCase())
}
/*If the string that is passed into the function is all lowercase, the function should return "I can't hear you!"
If the string that is passed into the function is all uppercase, the function should return "YES INDEED!"
If the string that is passed into the function is equal to "Let's have dinner together!", the function should return "I would love to!"*/
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) return "I can't hear you!"
    
    if (string === string.toUpperCase())  return "YES INDEED!"

    if (string === "Let's have dinner together!")  return "I would love to!"
    
}


console.log (sayHiToHeadphonedRoommate("HI"))