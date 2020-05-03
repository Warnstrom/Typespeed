import axios from 'axios';

export const getScores = () => {
    axios.get('http://localhost/get_scores.php')
        .then(function (results) {
            console.log(results.data);
            return results.data;
        }).catch(function (error) {
            console.log(error)
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });
}