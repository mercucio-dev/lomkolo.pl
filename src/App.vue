<template>
<div class="container">
  <div class="item header">
    <h2>Laboratorium Oceny Mleka w Kole Spółka z O.O.</h2>
  </div>
  <div class="item nav">
    <div class="nav">
      <router-link to="/"><span class="navitem">Strona główna</span></router-link>
      <router-link to="/o-firmie"><span class="navitem">O firmie</span></router-link>
      <router-link to="/oferta"><span class="navitem">Nasza oferta</span></router-link>
      <router-link to="/cennik"><span class="navitem">Cennik</span></router-link>
      <router-link to="/kontakt"><span class="navitem">Kontakt</span></router-link>
      <router-link to="/galeria"><span class="navitem">Galeria</span></router-link>
    </div>
  </div>
  <div class="item content">
    <div id="app">
      <router-view />
    </div>
  </div>
  <div class="item footer">Copyright © 2018 Laboratorium Oceny
     Mleka w Kole Spółka z o.o. & Mercucio
  </div>
</div>
</template>

<script>
import VueGallery from 'vue-gallery';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Offer from './components/Offer.vue';
import PriceList from './components/PriceList.vue';
import Contact from './components/Contact.vue';
import Gallery from './components/Gallery.vue';

export default {
  name: 'app',
  components: {
    Home,
    About,
    Offer,
    PriceList,
    Contact,
    Gallery,
    VueGallery,
  },
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  /* background-color: black;
  opacity: 0.8; */
}

:root{
  /* --main-color: white;
  --font-color-headers: white;
  --font-color-text: black;
  --background-header-color: #999;
  --background-nav-color: #444;
  --nav-underline-color: #444;
  --nav-underling-color-hover: red; */
}

body{
    margin: 0;
    /* font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
    font-family: 'Josefin Sans', Helvetica, Arial, sans-serif;
    font-size: 1.3vmax;
    font-weight: bold;
}

body.home {
    background-image: url('images/home-background-2.jpg');
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
}
body.about {
    background-image: url('images/about-background-2.jpg');
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
}
body.offer {
    background-image: url('images/offer-background.jpg');
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
}
body.price {
    background-image: url('images/pricelist-background.jpg');
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
}
body.gallery {
    background-image: url('images/contact-background.jpg');
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
}
body.contact {
    background-image: url('images/gallery-background-2.jpg');
    background-repeat: no-repeat;
    overflow: hidden;
    background-size: cover;
}

.container {
  display: grid;
  column-gap: 5px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 10vh 5vh 1fr 5vh;
  grid-template-areas:
  "header header"
  "nav nav"
  "content content"
  "footer footer";
  height: 100vh;
  /* background-color: #fff; */
  color: #444;
  justify-content: center;
  justify-items: stretch;
  align-items: center;
  align-content: center;
}

.item{
  /* background-color: white; */
  color: #fff;
  padding: 5px;
  margin-bottom: 5px;
}

.content {
  grid-area: content;
  /* margin: 4vw; */
}

.header{
  text-align: left;
  grid-area: header;
  padding-bottom: 0;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: 0;
  padding-left: 5%;
}

.footer{
  grid-area: footer;
  font-size: 0.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
}

.nav{
  grid-area: nav;
  display: inline;
  text-align: right;
  /* background-color: #444; */
  padding-right: 10%;
}

.nav > a{
  text-decoration: none !important;
  font-size: 1vmax;
  color: white;
  margin-right: 1%;
  outline: 0;
}

.navitem{
  /* border-bottom: 0.2vh solid #444; */
}

.navitem:hover{
  border-bottom: 0.2vh solid red;
  cursor: pointer;
}

.router-link-exact-active > span{
  text-decoration: none !important;
  text-align: right;
  color: white;
  border-bottom: 0.2vh solid transparent;
}

@media (max-width: 1078px) {
  .container{
      height: auto;
  }
}

</style>
