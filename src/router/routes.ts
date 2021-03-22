import { RouteConfig } from 'vue-router';

const Dashboard = () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue');

const routes: Array<RouteConfig> = [
  {
    component: Dashboard,
    name: 'Dashboard',
    path: '/',
  },
];

export default routes;
