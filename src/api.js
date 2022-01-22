import axios from 'axios';

export const getScores = () => {
    axios.get('http://localhost/get_scores.php')
        .then(function (results) {
            //console.log(results.data);
            return results.data;
        }).catch(function (error) {
            console.log(error)
        });
}