import axios from 'axios';


export const getScores = () => {
    const url = 'http://localhost:8080/typespeed/get_scores.php'
    axios.get(url)
        .then(data => console.log(data))
        .catch(err => console.log(err))

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