<script lang="ts">
  import SectionTitle from "$lib/view/components/atoms/SectionTitle.svelte";
  import AboutMyself from "$lib/view/components/molecules/AboutMyself.svelte";
  import SectionExplanation from "$lib/view/components/atoms/SectionExplanation.svelte";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title={"Profile"}>
</MetaTags>

<section class="container">
  <SectionTitle text="Profile"></SectionTitle>
  <SectionExplanation text="簡単な自己紹介です、良かったら見ていってください！"></SectionExplanation>
  <div class="profile block sm:flex justify-center">
    <div class="image w-full sm:w-[40%]">
      <img src="yutaicon.jpg" alt="aaa">
    </div>
    <AboutMyself></AboutMyself>
  </div>
</section>

<style lang="scss">
  section {
    padding-top: 50px;
    height: 70%;
    margin: 0 auto;
  }

  .profile {
    .image {
      img {
        display: block;
        margin: 0 auto;
        margin-right: 100px;
        width: 400px;
        height: 400px;
        border-radius: 50%;
      }

    }

  }
</style>