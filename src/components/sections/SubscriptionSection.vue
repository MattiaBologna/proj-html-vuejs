<script>
export default {

}
</script>


<template>
    <section class="subscription__section container">
        <div class="sub__writings">
            <font-awesome-icon class="letter__icon" :icon="['far', 'envelope']" />
            <p class="sub__text">Subscribe now and get special offers</p>
        </div>
        <div class="sub__input">
            <input class="mail__input" type="mail" placeholder="Insert your email">
            <button class="sub__button">Send</button>
        </div>
    </section>
</template>



<style lang="scss" scoped>
@import '.././style/partials/variables.scss';

.container {
    max-width: 1170px;
    margin: 0 auto;
}

.subscription__section {
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.sub__writings {
    display: flex;
    align-items: center;
    gap: 30px;

    .letter__icon {
        color: $grey;
        font-size: 24px;
        background-color: #2B2E32;
        padding: 15px 15px;
        border-radius: 999px;
    }

    .sub__text {
        font-weight: 700;
        font-size: 28px;
    }
}

.sub__input {
    display: flex;
    gap: 20px;

    .mail__input {
        background-color: white;
        border: none;
        border-radius: 999px;
        padding: 13px;
        min-width: 250px;
    }

    .sub__button {
        background-color: $blue;
        padding: 13px 50px;
        border-radius: 999px;
    }
}
</style>