<template>
<div class="flex" :class="$mq">
    <div class="content-text">
        <ol><strong>Obecnie Laboratorium Oceny Mleka w Kole Spółka z o.o.
             świadczy następujące usługi: </strong>
            <li>Pomiar ogólnej ilości bakterii - metoda akredytowana. </li>
            <li>Pomiar ilości komórek somatycznych - metoda akredytowana.  </li>
            <li>Pomiar składu fizyko-chemicznego mleka (tłuszcz, białko)
                 - metoda akredytowana. </li>
            <li>Oznaczania pozostałości antybiotyków i substancji hamujących. </li>
            <li>Pomiar punktu zamarzania. </li>
        </ol>
        <p>
            Do wykonywania ww. oznaczeń Laboratorium wykorzystuje najnowsze
             urządzenia renomowanych i uznanych w świecie firm.
        </p>
        <p>
            Dla wszystkich Klientów którzy korzystają z usług naszej firym
             w zakresie oceny ogólnej ilości bakterii oraz pomiaru ilości komórek
              somatycznych Laboratorium przygotowało specjalną ofertę
               - Klienci otrzymuja bez dodatkowych opłat jednorazowe butelki do
                próbek oraz kody kreskowe do identyfikacji próbek od
                 poszczególnych dostawców.
        </p>
    </div>
    <div class="shadow"></div>
    <img class="logo" src="../images/logo.png" />
</div>
</template>

<script>
export default {
  name: 'Offer',
  beforeCreate() {
    document.body.className = 'offer';
  },
};
</script>

<style lang="postcss" scoped>
.flex{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
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
    z-index: 1;
}

.side{
    padding: 0;
    margin: 0;
    min-width: 30%;
    vertical-align: middle;
    flex: 1;
  }

.image {
  display: block;
  max-width: 50%;
  max-height: 100%;
  margin: auto;
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
  font-size: 0.7vmax;
  color: grey;
}

@media (min-width: 800px) {
    .flex{
        flex-direction: row;
    }
}
</style>
