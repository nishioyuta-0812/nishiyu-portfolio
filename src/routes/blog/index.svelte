<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  export const load: Load = async ({ fetch }) => {

    let res = await fetch('/api/posts.json');

    if (res.ok) {
      return {
        props: {
          articles: await res.json()
        }
      }
    };

    return {
      status: res.status,
      error: new Error('Failed to fetch posts')
    }; 
  };
</script>

<script lang="ts">
  import SectionTitle from "$lib/view/components/atoms/SectionTitle.svelte";
  import ArticleList from "$lib/view/components/molecules/ArticleList.svelte";
  import type { Article } from "$lib/view/state/articleState";
  import SectionExplanation from "$lib/view/components/atoms/SectionExplanation.svelte";

  export let articles: Article[] = [];

  
</script>

<section class="container sm:px-[100px]">
  <SectionTitle text="Blog"></SectionTitle>
  <SectionExplanation text="普段ふと思った時に書いてます良かったら見ていってください"></SectionExplanation>
  <ArticleList articles={articles}></ArticleList>
</section>

<style lang="scss">
  section {
    padding-top: 50px;
    height: 70%;
    margin: 0 auto;
    // width: 1100px;
  }

  // @media screen and (max-width: 480px) {
  //   section {
  //     padding-top: 0px;
  //     width: 100%;
  //   }

  // }
</style>