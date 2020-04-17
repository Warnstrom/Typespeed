import words from "../public/words.json";

export const getCookie = (username) => {
    let username_string = username + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(username_string) == 0) {
            return c.substring(username_string.length, c.length);
        }
    }
    return "";
}

export const setCookie = (username) => {
    document.cookie = "username" + "=" + username;
}

export const getWords = () => {
    return words;
}
/*
fs.readFile("words.txt", function (err, data) {
    if (err) throw err;
    let array = data.toString().split("\n");
    console.log(array[Math.floor(Math.random() * array.length)]);
})
*/