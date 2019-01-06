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
    <div class="shadow"></div>
    <img class="logo" src="../images/logo.png" />
</div>
</template>

<script>
export default {
  name: 'About',
  beforeCreate() {
    document.body.className = 'about';
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
    z-index: 1;
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
