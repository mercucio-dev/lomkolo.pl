<template>
<div class="flex" :class="$mq">
  <div class="content-text">
    <h3>Urządzenia pomiarowe firmy FOSS wykorzystywane do realizacji badań</h3>
  <!-- <div class="side images">
    <img src="../images/gallery/re_IMG_1221.jpeg" />
    <img src="../images/gallery/re_IMG_1221.jpeg" />
    <img src="../images/gallery/re_IMG_1221.jpeg" />
    <img src="../images/gallery/re_IMG_1221.jpeg" />
    <img src="../images/gallery/re_IMG_1221.jpeg" />
    <img src="../images/gallery/re_IMG_1221.jpeg" />
    <img src="../images/gallery/re_IMG_1221.jpeg" />
    <img src="../images/gallery/re_IMG_1221.jpeg" />
  </div>
  </div>
  <img class="logo" src="../images/logo.png" /> -->
  <div class="side">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      ><img :src=image />
      </div>
    </div>
  </div>
  <img class="logo" src="../images/logo.png" />
</div>
</template>

<script>
import VueGallery from 'vue-gallery';

export default {
  name: 'Gallery',
  beforeCreate() {
    document.body.className = 'gallery';
  },
  data() {
    return {
      images: [
        require('../images/gallery/re_IMG_1221.jpeg'),
        require('../images/gallery/re_IMG_1223.jpeg'),
        require('../images/gallery/re_IMG_1225.jpeg'),
        require('../images/gallery/re_IMG_1226.jpeg'),
        require('../images/gallery/re_IMG_1227.jpeg'),
        require('../images/gallery/re_IMG_1228.jpeg'),
        require('../images/gallery/re_IMG_1230.jpeg'),
        require('../images/gallery/re_IMG_1231.jpeg'),
        require('../images/gallery/re_IMG_1232.jpeg'),
        require('../images/gallery/re_IMG_1234.jpeg'),
        require('../images/gallery/re_IMG_1235.jpeg'),

      ],
      index: null,
    };
  },
  components: {
    gallery: VueGallery,
  },
};
</script>

<style scoped>
.flex{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-text{
  color: white;
  font-size: 1.3vmax;
  font-weight: bolder;
  text-align: center;
  line-height: 1.2;
  margin-left: 4vw;
  margin-right: 4vw;
  flex: 3;
}

.content-text a {
  text-decoration: none;
  color: black;
  max-height: 60%;
}

.side{
  padding: 0;
  margin: 2vw;
  min-width: 30%;
  vertical-align: middle;
  flex: 1;
  }

.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
}

.image>img{
  width: 13vw;
  height: auto;
}

.logo{
  position: fixed;
  bottom: 5%;
  right: 5%;
  display: block;
  margin: auto;
  width: 8%;
  height: auto;
  z-index: 2;
}

@media (min-width: 800px) {
  .flex{
    flex-direction: row;
  }
}
</style>
