<script>
export default {

}
</script>



<template>
    <!-- JUMBO SECTION -->
    <section class="jumbo__section">
        <h1 class="jumbo__title">Brand New Arrivals</h1>
        <h2 class="jumbo__subtitle">NEW COLLECTION FROM NEW YORK</h2>
        <div class="jumbo__buttons">
            <button class="jumbo__button">VIEW ALL</button>
            <button class="jumbo__button">LOOKBOOK</button>
        </div>

        <div class="badges">
            <div class="badge">
                <div class="atlassian">
                    <font-awesome-icon :icon="['fab', 'atlassian']" />
                </div>
                <p>Demos</p>
            </div>
            <div class="badge">
                <p class="badge__price">39$</p>
                <p>On Sale</p>
            </div>
        </div>
    </section>
</template>



<style lang="scss" scoped>
@import '.././style/partials/variables.scss';

// JUMBO SECTION 
.jumbo__section {
    height: 650px;
    background-image: url('/home1_slide_three_bg_2.jpg');
    background-size: cover;
    background-position: center;
    color: $white;
    position: relative;
}

.jumbo__title {
    font-size: 80px;
    text-align: center;
    padding-top: 220px;
}

.jumbo__subtitle {
    font-size: 30px;
    text-align: center;
    font-weight: 100;
    padding-top: 15px;
    padding-bottom: 40px;
}

.jumbo__buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.jumbo__button {
    border: 3px solid $white;
    border-radius: 30px;
    padding: 20px 40px;
    background-color: rgba($white, 0.15);
    font-size: 16px;
}

.badges {
    position: absolute;
    top: -10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.badge {
    background-color: $white;
    color: $dark-grey;
    font-size: 14px;
    display: inline-block;
    padding: 10px 15px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px -1px 10px $grey;
}

.atlassian {
    background-color: $dark-grey;
    color: $white;
    display: inline-block;
    padding: 4px 10px;
    border-radius: 10px;
}

.badge__price {
    color: #7AC58D;
    font-weight: 600;
    font-size: 20px;
}
</style>