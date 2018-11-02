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
    <span class="side">
        <img class="image" src="../images/logo.png" />
    </span>
</div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="postcss" scoped>
.flex{
    display: flex;
    flex-direction: column;
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
}

.content-text a:hover {
    color: red;
}

.side{
    padding: 0;
    margin: 2vw;
    min-width: 30%;
    vertical-align: middle;
    flex: 1;
  }

.image {
  display: block;
  max-width: 70%;
  max-height: 100%;
  margin: auto;
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
