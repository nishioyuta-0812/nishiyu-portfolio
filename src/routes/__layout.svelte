<script lang="ts">
  import Footer from "$lib/view/components/molecules/Footer.svelte";
  import Header from "$lib/view/components/molecules/Header.svelte";
  import "../app.scss";
  import "github-markdown-css";
</script>

<main>
  <Header></Header>
  <div class="content">
    <slot></slot>
  </div>
  <Footer></Footer>
</main>

<style lang="scss">
  main {
    height: 100%;
    .content {
      padding-top: 10%;
      margin-bottom: 10%;
    }
  }
</style>
