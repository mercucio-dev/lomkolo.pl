<template>
<div class="flex" :class="$mq">
    <div class="content-text">
        <strong>Zapraszamy do współpracy </strong>
        <div>Laboratorium Oceny Mleka w Kole Spółka z o.o. </div>
        <div>ul. Składowa 7 </div>
        <div>62-600 Koło </div>
        <div>e-mail:
            <a href="mailto:lab@lomkolo.pl?Subject=www.lomkolo.pl" target="_top">
                <span>lab@lomkolo.pl</span>
            </a>
        </div>
        <div>tel. (0-63) 26 16 411</div>
        <div>fax. (0-63) 26 16 094 </div><br>
        <strong>
        <div>Prezes Zarządu </div>
        <div>Jacek Ziółkowski </div>
        </strong>
    </div>
    <div class="shadow"></div>
    <img class="logo" src="../images/logo.png" />
</div>
</template>

<script>
export default {
  name: 'Contact',
  beforeCreate() {
    document.body.className = 'contact';
  },
};
</script>

<style lang="postcss" scoped>
.flex{
    display: flex;
    flex-direction: column;
    position: relative;
}

.content-text{
  color: white;
  font-size: 1.5vmax;
  font-weight: bolder;
  text-align: center;
  line-height: 1.2;
  margin-left: 4vw;
  margin-right: 4vw;
  flex: 3;
  z-index: 2;
}

.shadow{
    background-color: black;
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    border: 2px solid, red;
    z-index: 1;
}

.content-text a {
    text-decoration: none;
    color: white;
}

.content-text a:hover {
    color: red;
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
