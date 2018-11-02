<template>
<div class="flex" :class="$mq">
    <div class="content-text">
        <h3>Urządzenia pomiarowe firmy FOSS wykorzystywane do realizacji badań</h3>
    <div class="side images">
        <img src="../images/galery1.png" />
        <img src="../images/galery2.png" />
        <img src="../images/galery3.png" />
        <img src="../images/galery4.png" />
        <img src="../images/galery5.png" />
        <img src="../images/galery6.png" />
        <img src="../images/galery7.png" />
        <img src="../images/galery8.png" />
    </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Gallery',
};
</script>

<style lang="postcss" scoped>
.flex{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.content-text{
  color: black;
  font-size: 1.1vmax;
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

.images {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 70%;
  max-height: 100%;
  margin: auto;
  padding: 5px;
}

.images img {
    margin: 5px;
}

.address{
  text-align: center;
  font-size: 0.7vmax;
  color: grey;
}

@media (min-width: 800px) {
    .flex{
        flex-direction: row;
    }
}
</style>
