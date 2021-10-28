<script setup>
// 3. Käyttäjä valitsee "Listaa yrityksen avoimet työpaikat"
// 4. Käyttäjä valitsee listalta työpaikan
// 5. Käyttäjä valitsee "Listaa työpaikkaan sopivia hakijoita"
</script>


<template>
<div class="wrapper">
    <h1>TODO</h1>
    <p>Tämä sivusto sisältää vasta lähtökohdan, minkä perusteella voidaan aloittaa dashboardin kehittäminen. Otan mielelläni vastaan kehitysideoita sekä käyttöliittymästä että sivuston sisällöstä.</p>

    <div class="usecases">
        <p>Käyttötapaukset:</p>

        <div class="usecase">
            <p>Yrityksien tiedot ja niiden työpaikkoihin hakijoiden selvittäminen</p>
            <ul>
                <li>Käyttäjä valitsee "Yritystiedot" välilehden</li>
                <li>Käyttäjä etsii haluamansa yrityksen</li>
                <li>Käyttäjä valitsee "Avoimet työpaikat" nähdäkseen valitsemansa yrityksen avoimet työpaikat</li>
                <li>Käyttäjä valitsee listasta haluamansa työpaikan</li>
                <li>Käyttäjä näkee työpaikan tiedot, tässä vaiheessa vain työpaikkaa hakevat henkilöt</li>
            </ul>
        </div>

        <div class="usecase">
            <p>Koulutusryhmien luominen ja niiden osallistujien koulutuksen valvominen (PDC:n ja osaamiskartoituksen integraatio)</p>
            <ul>
                <li>Käyttäjä valitsee "Koulutukset" välilehden</li>
                <li>Käyttäjä valitsee koulutettavan ryhmän tai luo uuden sellaisen</li>
                <li>Käyttäjä näkee näkymän, missä hän voi seurata koulutettavan ryhmän koulutuksen edistymistä</li>
                <li>Käyttäjä voi kutsua lisää henkilöitä ryhmään jakamalla osaamiskartoituksen linkin</li>
                <li>Käyttäjä voi seurata yksittäisen henkilön osaamista valitsemalla listasta haluamansa henkilön</li>
            </ul>
        </div>
    </div>
</div>
</template>


<style scoped>
h1 {
    font-size: 2rem;
    width: 100%;
    height: 100%;
    line-height: 8vh;
}

p {
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
}

.usecases {
    text-align: start;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    margin: 3rem auto 0 auto;
}

.usecase > p {
    font-size: 1.2rem;
}

.usecase {
    margin-bottom: 2rem;
}
.wrapper {
    display: flex;
    flex-direction: column;
}
</style>