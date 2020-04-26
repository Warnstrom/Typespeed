const SERVER_ROOT = 'https://localhost'

let GETConfig = {
    method: 'GET',
    mode: 'cors',
    headers: {},
    cache: 'default'
};

export const getScores = () => {
    const url = SERVER_ROOT + '/typespeed/api/get_scores.php';

    fetch(url, GETConfig)
    .then(response => {
        console.log(response.text());
        return response.text();
    }).then(data => {
        console.log(JSON.parse(data));
    }).catch(error => {
        console.log(error)
        return
    });
}