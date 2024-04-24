<script>
import SubscriptionSection from './sections/SubscriptionSection.vue'
import InfoSection from './sections/InfoSection.vue'
import PaymentsSection from './sections/PaymentsSection.vue'

export default {
    components: {
        SubscriptionSection,
        InfoSection,
        PaymentsSection

    }
}
</script>


<template>
    <footer>
        <SubscriptionSection />

        <InfoSection />

        <PaymentsSection />
    </footer>
</template>



<style lang="scss" scoped>
footer {
    background-color: #303337;
    color: white;
}
</style>