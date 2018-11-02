<template>
<div class="container">
  <div class="item header"><h2>Laboratorium Oceny Mleka w Kole Spółka z o.o.</h2></div>
  <!-- <div class="item logo"></div> -->
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
     Mleka w Kole Spółka z o.o. & Mercucio</div>
</div>
</template>

<script>
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
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 1vmax;
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
  background-color: #fff;
  color: #444;
  justify-content: center;
  justify-items: stretch;
  align-items: center;
  align-content: center;
}

.item{
  background-color: white;
  color: #fff;
  padding: 5px;
  margin-bottom: 5px;
}

.content {
  grid-area: content;
  /* margin: 4vw; */
}

.header{
    grid-area: header;
    padding-bottom: 0;
}

.footer{
    grid-area: footer;
    font-size: 0.8vw;
}

/* .logo{
  grid-area: logo;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #444;
  height: 100%;
} */

.nav{
  grid-area: nav;
  display: inline;
  text-align: right;
  background-color: #444;
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
  border-bottom: 0.2vh solid #444;
}

.navitem:hover{
  border-bottom: 0.2vh solid red;
  cursor: pointer;
}

.header,
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #999;
  margin-bottom: 0;
}

.router-link-exact-active > span{
  text-decoration: none !important;
  text-align: right;
  color: white;
  border-bottom: 0.2vh solid white;
}

@media (max-width: 1078px) {
  .container{
      height: auto;
  }
}

</style>
