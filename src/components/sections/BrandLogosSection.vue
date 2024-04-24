<script>
export default {

}
</script>


<template>
    <section class="brand__section">
        <h3 class="brand__title">BRAND LOGOS</h3>
        <ul class="brand__logos">
            <img class="logo" src="/Logos/BrandLogos/b_logotype_6.png" alt="">
            <img class="logo" src="/Logos/BrandLogos/b_logotype_7.png" alt="">
            <img class="logo" src="/Logos/BrandLogos/b_logotype_1.png" alt="">
            <img class="logo" src="/Logos/BrandLogos/b_logotype_2.png" alt="">
            <img class="logo" src="/Logos/BrandLogos/b_logotype_3.png" alt="">
        </ul>
    </section>
</template>



<style lang="scss" scoped>
@import '.././style/partials/variables.scss';

.brand__section {
    height: 305px;
    text-align: center;
    color: $dark-grey;
    background-color: $contrast-white;
}

.brand__title {
    padding-top: 75px;
    margin-bottom: 30px;
    font-weight: 400;
    font-size: 14px;
}

.brand__logos {
    display: flex;
    justify-content: center;
    gap: 100px;
}

.logo {
    max-width: 150px;
}
</style>