<script>
import JumboSection from './sections/JumboSection.vue'
import FeaturedProductsSection from './sections/FeaturedProductsSection.vue'
import SeasonsCollectionSection from './sections/SeasonsCollectionSection.vue'
import BrandLogosSection from './sections/BrandLogosSection.vue'
import ShopSection from './sections/ShopSection.vue'
import BestSellersSection from './sections/BestSellersSection.vue'

export default {
    components: {
        JumboSection,
        FeaturedProductsSection,
        SeasonsCollectionSection,
        BrandLogosSection,
        ShopSection,
        BestSellersSection
    }
}
</script>

<template>
    <main>
        <!-- JUMBO SECTION -->
        <JumboSection />

        <!-- FEATURED PRODUCTS SECTION -->
        <FeaturedProductsSection />

        <!-- SEASONS COLLECTIONS SECTION -->
        <SeasonsCollectionSection />

        <!-- BEST SELLERS SECTION -->
        <BestSellersSection />

        <!-- SHOP SECTION -->
        <ShopSection />

        <!-- BRAND LOGOS SECTION -->
        <BrandLogosSection />

    </main>
</template>


<style lang="scss" scoped></style>