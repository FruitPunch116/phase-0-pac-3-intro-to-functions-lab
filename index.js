function shout(string) {
    //todo
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
    switch(string){
        case string.toLowerCase():
        return  "I can't hear you!";
        break;
        case string.toUpperCase():
          return "YES INDEED!";
          break;
          case string ="Let's have dinner together!":
            return "I would love to!";
            break;
    }
}
