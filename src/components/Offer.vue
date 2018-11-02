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
    <span class="side">
        <img class="image" src="../images/0099.jpg" />
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
  name: 'Offer',
};
</script>

<style lang="postcss" scoped>
.flex{
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
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
