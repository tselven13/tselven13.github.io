<template>
     <!-- Start Footer Area -->
     <div class="rn-footer-area rn-section-gap section-separator">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer-area text-center">
                        <div class="logo">
                            <a href="index.html">
                                <img src="/images/logo/logo.png" alt="logo">
                            </a>
                        </div>
                        <p class="description mt--30">© 
                        {{ year }}. All rights reserved by <b>Poologarasa Thamilselven</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Footer Area -->
</template>

<script>
export default {
    data(){
        return {
        year : new Date().getFullYear()
    }
                        
    }
}
</script>