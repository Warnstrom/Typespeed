import axios from 'axios';

export const getScores = () => {
    axios.get('http://localhost/get_scores.php')
        .then(function (results) {
            console.log(results.data);
        }).catch(function (error) {
            console.log(error)
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
}

/*
const SERVER_ROOT = 'https://localhost'

let GETConfig = {
    method: 'GET',
    headers: {'content-type':'application/json; charset=UTF-8'},
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
}*/