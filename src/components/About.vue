<template>
<div class="flex" :class="$mq">
    <div class="content-text">
        <strong>Laboratorium Oceny Mleka w Kole Spółka z o.o.
            powstało w listopadzie 1999 roku.</strong>
        <ol>Udziały w spółce posiadają następujące podmioty:
            <li>Okręgowa Spółdzielnia Mleczarska w Kole. </li>
            <li>Okręgowa Spółdzielnia Mleczarska w Koninie. </li>
            <li>Okręgowa Spółdzielnia Mleczarska w Topoli Królewskiej. </li>
            <li>Zakład przetwórstwa Mleka VICTUS w Klementowie. </li>
        </ol>
        <p>
            Od samego początu istnienia Laboratorium zmierzało do
                zaoferowania swoim Klientom rzetelnych, kompleksowych i
                wiarygodnych badań.
                Laboratorium Oceny Mleka w Kole Spółka z o.o. posiada
                najnowocześniejsze aparaty do analizy składu mikrobiologicznego
                oraz fizyko-chemicznego mleka. Wykorzystywane przez nas
                urządzenia firmy FOSS (BactoScan FC; CombiFoss 5000; Milkoscan 4300)
                gwarantują najwyższą jakość wykonywanych analiz.
        </p>
        <p>
            Obecnie Laboratorium świadczy swe usługi dla dziewięciu podmiotów
                prowadzących skup mleka surowego.
        </p>
        <p>
            Gwarancją najwyższego poziomu świadczonych przez naszą firmę usług
                jest certyfikat akredytacji (Nr AB 457) zgodny z normą PN-EN ISO/IEC
                17025 nadany przaz Polskie Centrum Akredytacji w grudniu 2003 r.
        </p>
    </div>
    <span class="side">
        <img class="image" src="../images/DSC02282.jpg" />
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
  name: 'About',
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
