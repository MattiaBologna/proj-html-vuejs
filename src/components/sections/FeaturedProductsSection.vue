<script>
export default {

}
</script>



<template>
    <section class="featured__section container">
        <h2 class="featured__title">Featured Products</h2>
        <h4 class="featured__subtitle">Must have products from our top sellers</h4>
        <ul class="categories">
            <li class="category">Men</li>
            <li class="category">Women</li>
            <li class="category">Accessories</li>
        </ul>
        <ul class="featured__products">
            <li class="card">
                <div class="card__top">
                    <img src="/products/black_elegant_leather_jacket-200x260.jpg" alt="black leather jacket">
                </div>
                <div class="card__bottom">
                    <div class="product__name">Black Leather Jacket</div>
                    <div class="product__infos">Men, Jackets, Jeans</div>
                    <div class="product__price">200$</div>
                </div>
            </li>
            <li class="card">
                <div class="card__top">
                    <img src="/products/black_leather_suit-200x260.jpg" alt="black leather jacket">
                </div>
                <div class="card__bottom">
                    <div class="product__name">Black Leather Suit</div>
                    <div class="product__infos">Men, Jackets</div>
                    <div class="product__price">176$</div>
                </div>
            </li>
            <li class="card">
                <div class="card__top">
                    <img src="/products/blue_jacket_and_white_stripe_tee-200x260.jpg" alt="black leather jacket">
                </div>
                <div class="card__bottom">
                    <div class="product__name">Blue Jacket & Stripe Tee</div>
                    <div class="product__infos">Men, Jackets, Suits</div>
                    <div class="product__price">580$</div>
                </div>
            </li>
            <li class="card">
                <div class="card__top">
                    <img src="/products/modern_black_leather_suit-200x260.jpg" alt="black leather jacket">
                </div>
                <div class="card__bottom">
                    <div class="product__name">Modern Black Leather Suit</div>
                    <div class="product__infos">Men, Jackets</div>
                    <div class="product__price">96$</div>
                </div>
            </li>
        </ul>
    </section>
</template>



<style lang="scss" scoped>
@import '.././style/partials/variables.scss';

.container {
    max-width: 1170px;
    margin: 0 auto;
}

.featured__section {
    margin-top: 130px;
    border-top: 1px solid rgba($grey, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.featured__title {
    font-size: 40px;
    font-weight: 700;
    background-color: white;
    transform: translateY(-50%);
    padding: 0px 45px;
    margin-bottom: -20px;
}

.featured__subtitle {
    font-weight: 400;

}

.categories {
    display: flex;
    justify-content: center;
    margin-top: 70px;
    margin-bottom: 60px;
}

.category {
    padding: 20px 50px;
    background-color: $contrast-white;
    border: 1px solid rgba($grey, 0.2);
    font-weight: 700;
}

.featured__products {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 210px;
}

// CARDS

.product__name {
    font-weight: 800;
}

.product__infos {
    font-weight: 100;
    font-size: 14px;
}

.product__price {
    color: $blue;
}
</style>