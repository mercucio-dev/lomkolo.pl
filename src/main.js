import Vue from 'vue';
import Router from 'vue-router';
import VueMq from 'vue-mq';
import App from './App.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Offer from './components/Offer.vue';
import PriceList from './components/PriceList.vue';
import Contact from './components/Contact.vue';
import Gallery from './components/Gallery.vue';

Vue.config.productionTip = false;

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/o-firmie',
    component: About,
  },
  {
    path: '/oferta',
    component: Offer,
  },
  {
    path: '/cennik',
    component: PriceList,
  },
  {
    path: '/kontakt',
    component: Contact,
  },
  {
    path: '/galeria',
    component: Gallery,
  },
  { path: '*', redirect: '/' },
];

const router = new Router({
  routes,
  mode: 'history',
});

Vue.use(VueMq, {
  breakpoints: {
    mobile: 800,
    laptop: 1250,
    desktop: Infinity,
  },
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app');
