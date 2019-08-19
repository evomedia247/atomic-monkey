<template>  
<nav class="navbar navbar-expand-lg navbar-dark fixed-top">
  <div class="container-fluid">
  <nuxt-link to="/" exact class="navbar-brand ml-0"><span style="color: #f6f8f7">atomic</span>monkey </nuxt-link><lottie class="ml-1" :options="logoAnimation" :height="60" :width="60" v-on:animCreated="handleAnimation"/>
  <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
  <b-collapse id="nav-collapse" is-nav>
  <nuxt-link to="/" exact class="navbar-link ml-auto text-white links">Home</nuxt-link>
  <nuxt-link to="/services" exact class="navbar-link ml-3 text-white links">Services</nuxt-link>
  <nuxt-link to="/work" exact class="navbar-link ml-3 text-white links">Work</nuxt-link>
  <nuxt-link to="/contact" exact class="navbar-link ml-3 text-white links">Contact</nuxt-link>
  </b-collapse>
</div>

    </nav>

</template>
<script>
import Lottie from 'vue-lottie/src/lottie.vue'
import animationData from  '../assets/7301-loader-animation.json'
import logoAnimation from  '../assets/6213-infinity-loop.json'
export default {
  data() {
      return {
        defaultOptions: {animationData: animationData},
        logoAnimation: {animationData: logoAnimation},
        animationSpeed: 1
      }
    },
    components: {
      lottie: Lottie
    },
    methods: {
      handleAnimation: function (anim) {
        this.anim = anim;
      },
 
      stop: function () {
        this.anim.stop();
      },
 
      play: function () {
        this.anim.play();
      },
 
      pause: function () {
        this.anim.pause();
      },
 
      onSpeedChange: function () {
        this.anim.setSpeed(this.animationSpeed);
      }
    }
}
</script>
<style lang="scss">
    .navbar {
        @include navbar();
        .navbar-brand {
            @include logo();
            width: auto;
            margin-right: 0px
        }
        .navbar-link {
            color: $logoColor;
            .links {
              background-colour: none;
            }
        }
        .nav-link {
          color: white;
        }
    };
    .navbar-light .navbar-nav .nav-link {
    color: white;
    };
    div#nav-collapse {
    margin-top: 24px;
}
</style>
