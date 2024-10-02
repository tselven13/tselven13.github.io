<template>
    <header class="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div class="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
            <!-- Start Header Left -->
            <div class="col-lg-2 col-6">
                <div class="header-left">
                    <div class="logo">
                        <router-link to="/">
                            <img src="/images/logo/logo.png" alt="logo" />
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- End Header Left -->

            <!-- Start Header Center -->
            <div class="col-lg-10 col-6">
                <div class="header-center">
                    <nav id="sideNav" class="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">
                        <!-- Start Mainmenu Nav -->
                        <ul class="primary-menu nav nav-pills">
                            <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                            <li class="nav-item"><router-link class="nav-link" to="/skills">Skills</router-link></li>
                            <li class="nav-item"><router-link class="nav-link" to="/portfolio">Portfolio</router-link></li>
                            <li class="nav-item"><router-link class="nav-link" to="/resume">Resume</router-link></li>
                            <li class="nav-item"><a href="https://tselven.blogspot.com" target="_blank">Blog</a></li>
                            <li class="nav-item"><router-link class="nav-link" to="/contact">Contact</router-link></li>
                        </ul>
                        <!-- End Mainmenu Nav -->
                    </nav>

                    <!-- Start Header Right -->
                    <div class="header-right">
                        <a class="rn-btn" href="https://github.com/tselven" target="_blank"><i data-feather="github" class="mx-2"></i><span>FOLLOW</span></a>
                        <div class="hamberger-menu d-block d-xl-none">
                            <i id="menuBtn" class="feather-menu humberger-menu"></i>
                        </div>
                        <div class="close-menu d-block">
                            <span class="closeTrigger">
                                <i data-feather="x"></i>
                            </span>
                        </div>
                    </div>
                    <!-- End Header Right -->
                </div>
            </div>
            <!-- End Header Center -->
        </div>
    </header>

    <!-- Inside Header.vue, under the header element -->

    <div class="popup-mobile-menu">
        <div class="inner">
            <div class="menu-top">
                <div class="menu-header">
                    <router-link class="logo" to="/">
                        <img src="/images/logo/logo.png" alt="Personal Portfolio" />
                    </router-link>
                    <div class="close-button">
                        <button class="close-menu-activation close">
                            <i data-feather="x"></i>
                        </button>
                    </div>
                </div>
                <p class="description">I'm a Full Stack Developer who can develop, deploy and manage a full web
                    application.</p>
            </div>
            <div class="content">
                <ul class="primary-menu nav nav-pills onepagenav">
                    <li class="nav-item current"><router-link class="nav-link smoth-animation active"
                            to="/">Home</router-link></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#features">Features</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#portfolio">Portfolio</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#resume">Resume</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#clients">Clients</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#pricing">Pricing</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#blog">Blog</a></li>
                    <li class="nav-item"><a class="nav-link smoth-animation" href="#contacts">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Header',
    mounted() {
        $(document).ready(function () {
            $('.your-slider-class').slick();
        });
    }
};
</script>

<style scoped>
/* Add your CSS styles here for the header and mobile menu */
</style>