<template>
<div class="flex" :class="$mq">
    <div class="content-text">
      <strong>Cennik usług oferowanych przez Laboratorium Oceny Mleka
             w Kole Spółka z o.o.: </strong>
        <ol>
             Ceny netto. Nie zawierają 23% podatku VAT.
            <li>Pomiar ogólnej ilości bakterii - 2,90 zł </li>
            <li>Pomiar ilości komórek somatycznych - 1,65 zł </li>
            <li>Pomiar tłuszczu, białka, punktu zamarzania - 1,80 zł </li>
            <li>Pomiar tłuszczu i białka - 1,40 zł</li>
            <li>Pomiar punktu zamarzania - 2,00 zł </li>
            <li>Oznaczenie pozostałości substancji hamujących metodą Test BRT - 3,60 zł </li>
            <li>Oznaczenie pozostałości substancji hamujących metodą
                 - Beta s.t.a.r. - 10,50 zł </li>
            <li>Pomiar liczby komórek somatycznych, białka, tłuszczu,
                 punktu zamarzania - 3,40 zł</li>
        </ol>
    </div>
    <span class="side">
        <img class="image" src="../images/DSC02279.jpg" />
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
  name: 'PriceList',
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
  line-height: 1.2;
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
