<script>
export default {

}
</script>


<template>
    <div class="container">

        <!-- TOP HEADER -->
        <div class="header__top">
            <div class="head__socials">Logos</div>
            <ul class="head__userpages">
                <li>Shopping Cart</li>
                <li>My Account</li>
                <li>Cart</li>
            </ul>
        </div>

        <!-- BOTTOM HEADER -->
        <div class="header__bottom">
            <div class="logo">Logo</div>
            <nav class="head__navbar">
                <div class="head__pages">
                    <a class="head__link" href="#">Home</a>
                    <a class="head__link" href="#">Shop</a>
                    <a class="head__link" href="#">Products</a>
                    <a class="head__link" href="#">Categories</a>
                    <a class="head__link" href="#">News</a>
                    <a class="head__link" href="#">Elements</a>
                </div>
                <div class="shopnow__button">SHOP NOW</div>
                <div class="searchbar">CERCA</div>
            </nav>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import './style/partials/variables.scss';

.container {
    max-width: 1170px;
    margin: 0 auto;
}

.header__top {
    height: 50px;
    display: flex;
    justify-content: space-between;
}

.head__userpages {
    display: flex;
}

.header__bottom {
    height: 100px;
    display: flex;
    justify-content: space-between;
}

.head__navbar {
    display: flex;
}
</style>