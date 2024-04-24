<script>
export default {

}
</script>


<template>
    <section class="best__section">
        <h2 class="best__title">Best Sellers</h2>
        <h4 class="best__subtitle">Must have products from our top sellers</h4>
        <ul class="products">
            <img class="product" src="/products/spring_printed_dress.jpg" alt="">
            <img class="product" src="/products/modern_love_tee.jpg" alt="">
            <img class="product" src="/products/black_leather_jacket.jpg" alt="">
            <img class="product" src="/products/black_elegant_leather_jacket.jpg" alt="">
            <img class="product" src="/products/hipster_black_top.jpg" alt="">
            <div class="arrow left"></div>
            <div class="arrow right"></div>
        </ul>
    </section>
</template>



<style lang="scss" scoped>
@import '.././style/partials/variables.scss';

.best__section {
    height: 715px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 150px;
    border-top: 1px solid rgba($grey, 0.9);
}

.best__title {
    font-size: 40px;
    font-weight: 700;
    background-color: white;
    transform: translateY(-50%);
    padding: 0px 45px;
    margin-bottom: -20px;
}

.best__subtitle {
    font-weight: 400;
    margin-bottom: 60px;
}

.products {
    display: flex;
    gap: 10px;
    position: relative;
}

.product {
    max-width: 231px;
}
</style>