<script>
import { store } from "../store.js";
import axios from 'axios';


export default {
    data() {
        return {
            store
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            axios.get('http://localhost:3000/headMenu').then((res) => {
                store.headMenu = res.data
                console.log(store.headMenu)
            })
        }
    }
}
</script>


<template>
    <header class="container">

        <!-- TOP HEADER -->
        <div class="header__top">
            <ul class="head__socials">
                <li><font-awesome-icon :icon="['fab', 'facebook-f']" /></li>
                <li><font-awesome-icon :icon="['fab', 'twitter']" /></li>
                <li><font-awesome-icon :icon="['fab', 'instagram']" /></li>
                <li><font-awesome-icon :icon="['fab', 'youtube']" /></li>
            </ul>
            <ul class="head__userpages">
                <li>Shopping Cart</li>
                <li class="account__page">My Account</li>
                <li>
                    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                    CART
                </li>
            </ul>
        </div>

        <!-- BOTTOM HEADER -->
        <div class="header__bottom">
            <img src="/Logos/classic_shop_logo1x.png" alt="avada logo" class="logo">
            <nav class="head__navbar">
                <div class="head__pages">
                    <a v-for="(page, i) in store.headMenu" :key="i" class="head__link" href="#">{{ page.name }}
                        <font-awesome-icon :icon="['fas', 'chevron-down']" />
                    </a>
                </div>
                <div class="shopnow__button">SHOP NOW!</div>
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
            </nav>
        </div>
    </header>
</template>


<style lang="scss" scoped>
@import './style/partials/variables.scss';

.container {
    max-width: 1170px;
    margin: 0 auto;
}

// HEADER TOP

.header__top {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $contrast-white;
}

.head__userpages {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 15px;
}

.account__page {
    border-left: 1px solid $dark-grey;
    border-right: 1px solid $dark-grey;
    padding: 0px 15px;
}

.head__socials {
    display: flex;
    gap: 24px;
    color: $dark-grey;
}

.shopnow__button {
    background-color: $blue;
    border-radius: 900px;
    padding: 15px 25px;
    color: $white;
    font-weight: 600;
    cursor: pointer;
}

.shopnow__button:hover {
    filter: grayscale(20%);
}

// HEADER BOTTOM

.header__bottom {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.head__navbar {
    display: flex;
    align-items: center;
    gap: 40px;
}

.head__pages {
    display: flex;
    gap: 40px;
    font-weight: 100;

    a>* {
        font-size: 10px;
    }
}

.head__link:hover {
    font-weight: 600;
    font-size: 15px;
}
</style>