<script>
export default {

}
</script>

<template>
    <main>

        <!-- JUMBO SECTION -->
        <section class="jumbo__section">
            <h1 class="jumbo__title">Brand New Arrivals</h1>
            <h2 class="jumbo__subtitle">NEW COLLECTION FROM NEW YORK</h2>
            <div class="jumbo__buttons">
                <button class="jumbo__button">VIEW ALL</button>
                <button class="jumbo__button">LOOKBOOK</button>
            </div>
        </section>


    </main>
</template>


<style lang="scss" scoped>
@import './style/partials/variables.scss';


// JUMBO SECTION 
.jumbo__section {
    height: 650px;
    background-image: url('/home1_slide_three_bg_2.jpg');
    background-size: cover;
    background-position: center;
    color: $white;
}

.jumbo__title {
    font-size: 80px;
    text-align: center;
    padding-top: 220px;
}

.jumbo__subtitle {
    font-size: 30px;
    text-align: center;
    font-weight: 100;
    padding-top: 15px;
    padding-bottom: 40px;
}

.jumbo__buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.jumbo__button {
    border: 3px solid $white;
    border-radius: 30px;
    padding: 20px 40px;
    background-color: rgba($white, 0.15);
    font-size: 16px;
}
</style>