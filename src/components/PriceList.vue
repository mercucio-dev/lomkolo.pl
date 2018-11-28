<template>
<div class="flex" :class="$mq">
    <div class="content-text">
      <strong>Cennik usług oferowanych przez Laboratorium Oceny Mleka
             w Kole Spółka z o.o.: </strong>
        <ol>
             Ceny netto. Nie zawierają 23% podatku VAT.
            <li><span class="list_item">Pomiar ogólnej ilości bakterii - 2,90 zł </span></li>
            <li><span class="list_item">Pomiar ilości komórek somatycznych - 1,65 zł </span></li>
            <li><span class="list_item">Pomiar tłuszczu, białka, punktu zamarzania - 1,80 zł
                </span></li>
            <li><span class="list_item">Pomiar tłuszczu i białka - 1,40 zł</span></li>
            <li><span class="list_item">Pomiar punktu zamarzania - 2,00 zł </span></li>
            <li><span class="list_item">Oznaczenie pozostałości substancji hamujących metodą
                Test BRT - 3,60 zł</span></li>
            <li><span class="list_item">Oznaczenie pozostałości substancji hamujących metodą
                 - Beta s.t.a.r. - 10,50 zł </span></li>
            <li><span class="list_item">Pomiar liczby komórek somatycznych, białka, tłuszczu,
                 punktu zamarzania - 3,40 zł</span></li>
        </ol>
    </div>
    <div class="shadow"></div>
    <img class="logo" src="../images/logo.png" />
</div>
</template>

<script>
export default {
  name: 'PriceList',
  beforeCreate() {
    document.body.className = 'price';
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
  font-size: 1.3vmax;
  font-weight: bolder;
  text-align: justify;
  text-justify: inter-word;
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

.list_item:hover{
    border-bottom: 0.2vh solid red;
}

@media (min-width: 800px) {
    .flex{
        flex-direction: row;
    }
}
</style>
