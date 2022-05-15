<script lang="ts">
  import SectionTitle from "$lib/view/components/atoms/SectionTitle.svelte";
  import AboutMyself from "$lib/view/components/molecules/AboutMyself.svelte";
  import SectionExplanation from "$lib/view/components/atoms/SectionExplanation.svelte";
  import { MetaTags } from "svelte-meta-tags";
</script>

<MetaTags
  title={"Profile"}>
</MetaTags>

<section>
  <SectionTitle text="Profile"></SectionTitle>
  <SectionExplanation text="簡単な自己紹介です、良かったら見ていってください！"></SectionExplanation>
  <div class="profile">
    <div class="image">
      <img src="yutaicon.jpg" alt="aaa">
    </div>
    <AboutMyself></AboutMyself>
  </div>
</section>

<style lang="scss">
  section {
    height: 70%;
    margin: 0 auto;
    width: 1100px;
  }

  .profile {
    display: flex;
    justify-content: center;

    .image {

      width: 40%;
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