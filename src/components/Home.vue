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
        <img class="image" src="../images/img_0053.jpg" />
        <p class="address">
        Laboratorium Oceny Mleka w Kole Spółka z o.o.<br>
        Ul. Składowa 7<br>
        62-600 Koło<br>
        tel. (0-63) 26-16-411<br>
        fax: (0-63) 26 16 094<br>
        e-mail: lab@lomkolo.pl
        </p>
    </span>
</div>
</template>

<script>
export default {
  name: 'Home',
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
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5;
  margin-left: 4vw;
  margin-right: 4vw;
  flex: 3;
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
