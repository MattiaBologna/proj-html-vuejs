<script>
export default {

}
</script>


<template>
    <section class="info__section">
        <div class="container">
            <div class="row">

                <!-- BRAND INFO -->

                <div class="col-3">
                    <img class="foot__logo" src="/Logos/classic_shop_logo_footer.png" alt="">
                    <div class="brand__info">
                        <p>12345 North Main Street,</p>
                        <p>New York, NY 555555</p>
                        <p>Phone: 1.800.555.6789</p>
                        <p>Email: info@company.com</p>
                        <p>Web: Theme-fusion.com</p>
                    </div>
                    <ul class="foot__socials">
                        <li><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
                        <li><font-awesome-icon :icon="['fab', 'twitter']" /></li>
                        <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
                        <li><font-awesome-icon :icon="['fab', 'youtube']" /></li>
                    </ul>
                </div>

                <!-- TOP RATED PRODUCTS  -->

                <div class="col-3">
                    <h4 class="top__title">TOP RATED PRODUCTS</h4>
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
                            <img class="card__image" src="/products/leather_gloves-120x156.jpg" alt="">
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
                            <img class="card__image" src="/products/leather_gloves-120x156.jpg" alt="">
                        </li>

                    </ul>
                </div>

                <!-- RECENT POSTS -->

                <div class="col-3">
                    <h4 class="top__title">RECENT POSTS</h4>
                    <ul class="posts">
                        <li class="card">
                            <p class="post"> > Lorem ipsum dolor sit.</p>
                        </li>
                        <li class="card">
                            <p class="post"> > Lorem ipsum dolor sit.</p>
                        </li>
                        <li class="card">
                            <p class="post"> > Lorem ipsum dolor sit.</p>
                        </li>
                        <li class="card">
                            <p class="post"> > Lorem ipsum dolor sit.</p>
                        </li>
                        <li class="card">
                            <p class="post"> > Lorem ipsum dolor sit.</p>
                        </li>
                        <li class="card">
                            <p class="post"> > Lorem ipsum dolor sit.</p>
                        </li>
                    </ul>

                </div>

                <!-- TAGS -->

                <div class="col-3">
                    <h4 class="top__title">TAGS</h4>
                    <ul class="tags__list">
                        <li class="tag">Black</li>
                        <li class="tag">Boots</li>
                        <li class="tag">Brown</li>
                        <li class="tag">Casual</li>
                        <li class="tag">D&G</li>
                        <li class="tag">Fabric</li>
                        <li class="tag">Flowers</li>
                        <li class="tag">Grey</li>
                        <li class="tag">Hat</li>
                        <li class="tag">Hipster</li>
                        <li class="tag">Lines</li>
                        <li class="tag">multi-purpose</li>
                        <li class="tag">Hipster</li>
                        <li class="tag">D&G</li>
                        <li class="tag">Fabric</li>
                        <li class="tag">Flowers</li>
                        <li class="tag">Grey</li>
                        <li class="tag">Hat</li>
                        <li class="tag">Hipster</li>
                        <li class="tag">Lines</li>
                        <li class="tag">multi-purpose</li>
                        <li class="tag">Hipster</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>



<style lang="scss" scoped>
@import '.././style/partials/variables.scss';


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

// INFO SECTION

.info__section {
    background-color: #2B2E32;
    height: 480px;
}

.foot__logo {
    height: 64px;
    margin-top: 80px;
    margin-bottom: 50px;
}

.brand__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-weight: 600;
    font-size: 14px;
}

.foot__socials {
    margin-top: 64px;
    display: flex;
    gap: 24px;
}


// TOP RATED PRODUCTS

.top__title {
    margin-top: 70px;
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 18px;
}

.card {
    max-height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 14px 0px;
    border-bottom: 1px solid rgba($color: white, $alpha: 0.1);

    .card__info {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .card__name {
        font-weight: 600;
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

}

// RECENT POSTS 

.post {
    font-size: 14px;
    font-weight: 600;
}

// TAGS 

.tags__list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
}

.tag {
    border: 1px solid rgba($color: white, $alpha: 0.1);
    padding: 2px 6px;
    font-weight: 600;
    font-size: 15px;
}
</style>