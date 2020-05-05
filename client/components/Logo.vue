<template>
  <img src="../assets/logo.png" class="logo">
</template>

<script lang="ts">
  import { Vue } from 'nuxt-property-decorator';

  export default class Logo extends Vue {

  }
</script>

<style>
  .logo:hover {
    opacity: .8;
  }
</style>
