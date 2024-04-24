<script>
export default {

}
</script>



<template>
    <section class="seasons__section">
        <div class="winter__collection">
            <h1 class="seasons__title">Winter Season</h1>
            <h2 class="seasons__subtitle">STYLISH AND WARM</h2>
            <button class="seasons__button">VIEW MORE</button>
        </div>
        <div class="spring__collection">
            <h1 class="seasons__title">Spring Season</h1>
            <h2 class="seasons__subtitle">BRIGHT AND COLORFUL</h2>
            <button class="seasons__button">VIEW MORE</button>
        </div>
        <div class="autumn__collection">
            <h1 class="seasons__title">Autumn Season</h1>
            <h2 class="seasons__subtitle">RICH AND COMFORTABLE</h2>
            <button class="seasons__button">VIEW MORE</button>
        </div>
    </section>
</template>



<style lang="scss" scoped>
@import '.././style/partials/variables.scss';

.seasons__section {
    height: 615px;
    display: flex;
    color: $white;
}

.seasons__section>* {
    height: 100%;
    width: calc(100% / 3);
    background-size: cover;
    background-position: center;
}

.winter__collection {
    background-image: url('/collections/winter_collection_bg.jpg');
}

.spring__collection {
    background-image: url('/collections/spring_collection_bg.jpg');
}

.autumn__collection {
    background-image: url('/collections/autumn_collection_bg.jpg');
}

.winter__collection,
.autumn__collection,
.spring__collection {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.seasons__title {
    font-size: 40px;
    text-align: center;
    margin-top: 400px;
}

.seasons__subtitle {
    font-size: 18px;
    text-align: center;
    font-weight: 100;
    padding-top: 15px;
    padding-bottom: 30px;
}

.seasons__button {
    border: 2px solid $white;
    border-radius: 30px;
    padding: 14px 25px;
    background-color: rgba($white, 0.15);
    font-size: 14px;
    font-weight: 600;
}
</style>