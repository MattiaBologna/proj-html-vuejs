<script>
import JumboSection from './sections/JumboSection.vue'
import FeaturedProductsSection from './sections/FeaturedProductsSection.vue'
import SeasonsCollectionSection from './sections/SeasonsCollectionSection.vue'

export default {
    components: {
        JumboSection,
        FeaturedProductsSection,
        SeasonsCollectionSection
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

    </main>
</template>


<style lang="scss" scoped></style>