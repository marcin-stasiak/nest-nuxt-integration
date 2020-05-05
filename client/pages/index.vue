<template>
  <div class="container">
    <div>
      <logo/>
      <h1 class="title">
        Nest Nuxt integration
      </h1>
      <h2 class="subtitle">
        {{hello}}
      </h2>
      <div class="links">
        <a href="https://docs.nestjs.com/" target="_blank" class="button--green">
          Nest.js Documentation
        </a>
        <a href="https://nuxtjs.org/guide/" target="_blank" class="button--green">
          Nuxt.js Documentation
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Getter, Vue } from 'nuxt-property-decorator';
  import Logo from '../components/Logo';

  @Component({
    components: {
      Logo
    }
  })
  export default class IndexPage extends Vue {
    @Getter('getHello') hello: string;
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
