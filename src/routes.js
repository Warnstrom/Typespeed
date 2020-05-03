import mainContent from './components/mainContent.vue';
import username from './components/username.vue';
import leaderboard from './components/leaderboard.vue';


const routes = [
    { path: '/leaderboard', component: leaderboard, name: 'leaderboard' },
    { path: '/login', component: username, name: 'login' },
    { path: '/typespeed', component: mainContent, name: 'mainContent' },
];

export default routes;