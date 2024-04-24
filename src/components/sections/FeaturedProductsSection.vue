<script>
export default {
    data() {
        return {

        }
    }
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
                    <img class="card__image" src="/products/black_elegant_leather_jacket.jpg"
                        alt="black leather jacket">
                    <div class="card__hover">
                        <font-awesome-icon class="hover__check" :icon="['far', 'square-check']" />
                    </div>
                </div>
                <div class="card__bottom">
                    <div class="product__name">Black Leather Jacket</div>
                    <div class="product__infos">Men, Jackets, Jeans</div>
                    <div class="product__price">200$</div>
                </div>
            </li>
            <li class="card">
                <div class="card__top">
                    <img class="card__image" src="/products/black_leather_suit.jpg" alt="black leather jacket">
                    <div class="card__hover">
                        <font-awesome-icon class="hover__check" :icon="['far', 'square-check']" />
                    </div>
                </div>
                <div class="card__bottom">
                    <div class="product__name">Black Leather Suit</div>
                    <div class="product__infos">Men, Jackets</div>
                    <div class="product__price"><span class="original__price">200$</span> 176$</div>
                </div>
            </li>
            <li class="card">
                <div class="card__top">
                    <img class="card__image" src="/products/blue_jacket_and_white_stripe_tee.jpg"
                        alt="black leather jacket">
                    <div class="card__hover">
                        <font-awesome-icon class="hover__check" :icon="['far', 'square-check']" />
                    </div>
                </div>
                <div class="card__bottom">
                    <div class="product__name">Blue Jacket & Stripe Tee</div>
                    <div class="product__infos">Men, Jackets, Suits</div>
                    <div class="product__price">580$</div>
                </div>
            </li>
            <li class="card">
                <div class="card__top">
                    <img class="card__image" src="/products/modern_black_leather_suit.jpg" alt="black leather jacket">
                    <div class="card__hover">
                        <font-awesome-icon class="hover__check" :icon="['far', 'square-check']" />
                    </div>
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
    padding-top: 130px;
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

.category:hover {
    background-color: $white;
}

.featured__products {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 210px;
}

// CARDS
.card__top {
    position: relative;
}

.card__image {
    max-width: 200px;
}

.card__hover {
    background: rgb(83, 136, 213);
    background: linear-gradient(180deg, rgba(83, 136, 213, 1) 0%, rgba(240, 166, 211, 1) 100%);
    height: 260px;
    width: 200px;
    opacity: 0;
    position: absolute;
    transform: translateY(-101%);
    display: flex;
    justify-content: center;
    align-items: center;
}

.card:hover .card__hover {
    opacity: 95%;
}

.hover__check {
    padding: 20px;
    color: white;
    background-color: $dark-grey;
    border-radius: 999px;
}

.hover__check:hover {
    background-color: black;
}

.product__name {
    font-weight: 800;
}

.product__infos {
    font-weight: 100;
    font-size: 14px;
}

.original__price {
    font-size: 12px;
    text-decoration: line-through;
}

.product__price {
    color: $blue;
}
</style>