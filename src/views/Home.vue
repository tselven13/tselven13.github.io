<template>
    <Hero />
    <Skills/>
    <Services />
    <Portfolio/>
    <!-- Back to  top Start -->
    <div class="backto-top">
        <div>
            <i data-feather="arrow-up"></i>
        </div>
    </div>
    <!-- Back to top end -->
</template>

<script lang="js">
import Hero from '../components/Hero.vue'
import Services from '../components/Services.vue';
import Skills from '../components/Skills.vue';
import Portfolio from './Portfolio.vue';

export default {
    name: "Home",
    components: {
        Hero,
        Services,
        Portfolio,
        Skills
    }
}
</script>

<style scoped></style>