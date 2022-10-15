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
      padding-top: 100px;
      margin-bottom: 10%;
    }
  }

  @media screen and (max-width: 640px) {
    main {
      .content {
        padding-top: 64px;
      }
    }
  }
</style>
