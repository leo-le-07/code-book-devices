import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

Vue.use(Router)

const routes = [
  {
    path: '/', component: HomePage,
  },
  {
    path: '/booking', component: BookingPage,
  }
]

export default new Router({ routes });
