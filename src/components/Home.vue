<template>
<div class="flex" :class="$mq">
    <span class="content-text">
        <h2>Witamy na naszych stronach</h2>
        <p>
            Zapraszamy do zapoznania się z firmą Laboratorium Oceny Mleka w Kole Spółka z o.o.
             Można tu znaleźć informacje dotyczące naszej działalności,
             oferowanych przez nas usługach oraz obowiązującym cenniku.
             Zdajemy sobie sprawę, iż najważniejszą kwestją jest spełnienie
             wymagań naszych Klientów,
             ich zadowolenie oraz wiarygodność wykonywanych przez nas analiz,
             dlatego prosimy o nadsyłanie wszelkich uwag i sugestii dotyczących naszej firmy
             oraz oferowanych przez nas usługach.
        </p>
    </span>
    <span class="side">
        <p class="address">
        Laboratorium Oceny Mleka w Kole Spółka z o.o.<br>
        Ul. Składowa 7<br>
        62-600 Koło<br>
        tel. (0-63) 26-16-411<br>
        fax: (0-63) 26 16 094<br>
        <a href="mailto:lab@lomkolo.pl?Subject=www.lomkolo.pl" target="_top">
            <span>lab@lomkolo.pl</span>
        </a>
        </p>
    </span>
    <div class="shadow"></div>
    <img class="logo" src="../images/logo.png" />
</div>
</template>

<script>
export default {
  name: 'Home',
  beforeCreate() {
    document.body.className = 'home';
  },
};

</script>

<style scoped>
.flex{
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
}

.content-text{
  color: white;
  font-size: 1.3vmax;
  font-weight: bolder;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;
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
    z-index: 1;
}

.side{
    padding: 0;
    margin: 2vw;
    min-width: 30%;
    vertical-align: middle;
    flex: 1;
    z-index: 2;
  }

.image {
  display: block;
  margin: auto;
    width: 40%;
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

.address{
  text-align: center;
  font-size: 0.9vmax;
  color: white;
}

.address a {
    text-decoration: none;
    color: white;
}

.address a:hover {
    color: red;
}

@media (min-width: 800px) {
    .flex{
        flex-direction: row;
    }
}
</style>
