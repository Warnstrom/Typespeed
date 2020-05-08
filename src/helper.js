import words from "../public/words2.json";

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
    let ctr = words.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = words[ctr];
        words[ctr] = words[index];
        words[index] = temp;
    }
    return words;
}