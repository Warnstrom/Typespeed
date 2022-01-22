const mainContent = () => import ( /* webpackChunkName: "home" */ './components/mainContent.vue')
const username = () => import ( /* webpackChunkName: "home" */ './components/username.vue')
const leaderboard = () => import ( /* webpackChunkName: "home" */ './components/leaderboard.vue')


const routes = [
    {
        path: '/leaderboard',
        component: leaderboard,
        name: 'leaderboard'
    },
    {
        path: '/login',
        component: username,
        name: 'login'
    },
    {
        path: '/typespeed',
        component: mainContent,
        name: 'mainContent'
    },
];

export default routes;