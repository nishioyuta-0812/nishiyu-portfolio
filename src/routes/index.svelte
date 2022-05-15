<script context="module" lang="ts">
  export const prerender = true;
</script>

<script lang="ts">
  import SelfIntroduction from "$lib/view/components/molecules/SelfIntroduction.svelte";
  import SectionTitle from "$lib/view/components/atoms/SectionTitle.svelte";
  import InstagramPanel from "$lib/view/components/molecules/InstagramPanel.svelte";
  import TwitterPanel from "$lib/view/components/molecules/TwitterPanel.svelte";
  import { MetaTags } from "svelte-meta-tags";
</script>

<svelte:head>
  <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<MetaTags
  title={"Nishiyu Portfolio"}>
</MetaTags>


<section>
  <div class="top">
    <SelfIntroduction></SelfIntroduction>
  </div>
</section>
<section class="sns">
  <SectionTitle text={"SNS"}></SectionTitle>
  <div class="items">
    <InstagramPanel></InstagramPanel>
    <TwitterPanel></TwitterPanel>
  </div>
</section>

<style lang="scss">
  section {
    height: 60%;
    margin: 0 auto;
    width: 1100px;
    margin-bottom: 150px;

    .items {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      gap: 50px;
    }

  }

  .top {
    display: flex;
    height: 100%;
  }

  .sns {
    height: 100%;
  }
</style>