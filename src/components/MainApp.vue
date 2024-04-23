<script>
import JumboSection from './sections/JumboSection.vue'
import FeaturedProductsSection from './sections/FeaturedProductsSection.vue'

export default {
    components: {
        JumboSection,
        FeaturedProductsSection
    }
}
</script>

<template>
    <main>
        <!-- JUMBO SECTION -->
        <JumboSection />

        <!-- FEATURED PRODUCTS SECTION -->
        <FeaturedProductsSection />

    </main>
</template>


<style lang="scss" scoped></style>