<script>
export default {

}
</script>


<template>
    <section class="shop__section">
        <div class="container">
            <div class="row">

                <!-- FEATURED PRODUCTS  -->

                <div class="col-3">
                    <h4 class="top__title">FEATURED</h4>
                    <ul class="top__products">

                        <!-- Black Leather Jacket -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Black Leather Jacket</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$125</div>
                            </div>
                            <img class="card__image" src="/products/black_leather_jacket-120x156.jpg" alt="">
                        </li>

                        <!-- Black Elegant Leather Jacket -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Black Leather Jacket</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price"><span class="original__price">200$</span>$45</div>
                            </div>
                            <img class="card__image" src="/products/black_elegant_leather_jacket-120x156.jpg" alt="">
                        </li>


                        <!-- Hipster black top -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Black top</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$35</div>
                            </div>
                            <img class="card__image" src="/products/hipster_black_top-120x156.jpg" alt="">
                        </li>

                    </ul>
                </div>


                <!-- ON SALE PRODUCTS  -->

                <div class="col-3">
                    <h4 class="top__title">ON SALE</h4>
                    <ul class="top__products">

                        <!-- LEATHER GLOVES -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Leather Gloves</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$45</div>
                            </div>
                            <img class="card__image" src="/products/leather_gloves-120x156.jpg" alt="">
                        </li>

                        <!-- BLACK LEATHER JACKET -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Leather Gloves</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$45</div>
                            </div>
                            <img class="card__image" src="/products/modern_leather_boots-120x156.jpg" alt="">
                        </li>


                        <!-- SPRING PRINTED DRESS -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Leather Gloves</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$45</div>
                            </div>
                            <img class="card__image" src="/products/blue_leather_jacket-120x156.jpg" alt="">
                        </li>

                    </ul>
                </div>


                <!-- TOP RATED PRODUCTS  -->

                <div class="col-3">
                    <h4 class="top__title">TOP RATED</h4>
                    <ul class="top__products">

                        <!-- LEATHER GLOVES -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Leather Gloves</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$45</div>
                            </div>
                            <img class="card__image" src="/products/casual_leather_belts-200x260.jpg" alt="">
                        </li>

                        <!-- BLACK LEATHER JACKET -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Leather Gloves</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$45</div>
                            </div>
                            <img class="card__image" src="/products/black_leather_suit-200x260.jpg" alt="">
                        </li>


                        <!-- SPRING PRINTED DRESS -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Leather Gloves</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$45</div>
                            </div>
                            <img class="card__image" src="/products/black_leather_suit-200x260.jpg" alt="">
                        </li>

                    </ul>
                </div>


                <!-- LAST REVIEWS  -->

                <div class="col-3">
                    <h4 class="top__title">LAST REVIEWS</h4>
                    <ul class="top__products">

                        <!-- LEATHER GLOVES -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Leather Gloves</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$45</div>
                            </div>
                            <img class="card__image" src="/products/black_leather_suit-200x260.jpg" alt="">
                        </li>

                        <!-- BLACK LEATHER JACKET -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Leather Gloves</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$45</div>
                            </div>
                            <img class="card__image" src="/products/black_leather_suit-200x260.jpg" alt="">
                        </li>


                        <!-- SPRING PRINTED DRESS -->

                        <li class="card">
                            <div class="card__info">
                                <h5 class="card__name">Leather Gloves</h5>
                                <div class="card__vote">
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                    <font-awesome-icon :icon="['fas', 'star']" />
                                </div>
                                <div class="card__price">$45</div>
                            </div>
                            <img class="card__image" src="/products/black_leather_suit-200x260.jpg" alt="">
                        </li>

                    </ul>
                </div>



            </div>
        </div>
    </section>
</template>



<style lang="scss" scoped>
@import '.././style/partials/variables.scss';

.shop__section {
    padding-bottom: 80px;
}

.container {
    max-width: 1170px;
    margin: 0 auto;
}

.row {
    display: flex;
}

.col-3 {
    width: calc((100% / 12) * 3);
    padding: 0px 10px;
}

.top__title {
    margin-top: 70px;
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 18px;
    color: $dark-grey;
}

.card {
    max-height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 14px 0px;
    border-bottom: 1px solid rgba($color: black, $alpha: 0.1);
    color: $dark-grey;

    .card__info {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .card__name {
        font-weight: 400;
        font-size: 15px;
    }

    .card__vote {
        color: $blue;
    }

    .card__image {
        object-fit: cover;
        width: 60px;
    }

    .card__price {
        font-weight: 700;
    }

    .original__price {
        font-size: 12px;
        text-decoration: line-through;
        margin-right: 5px;
    }

}
</style>