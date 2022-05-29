<script context="module" lang="ts">
  export const prerender = true;
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
  import SelfIntroduction from "$lib/view/components/molecules/SelfIntroduction.svelte";
  import SectionTitle from "$lib/view/components/atoms/SectionTitle.svelte";
  import InstagramPanel from "$lib/view/components/molecules/InstagramPanel.svelte";
  import TwitterPanel from "$lib/view/components/molecules/TwitterPanel.svelte";
  import { MetaTags } from "svelte-meta-tags";
  import type { Article } from "$lib/view/state/articleState";
  import ArticleList from "$lib/view/components/molecules/ArticleList.svelte";
  import SectionExplanation from "$lib/view/components/atoms/SectionExplanation.svelte";

  export let articles: Article[] = [];
  let filterArticles = articles.splice(0,8);

</script>

<svelte:head>
  <script src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</svelte:head>

<MetaTags
  title={"Nishiyu Portfolio"}>
</MetaTags>

<div class="top-container">
  <section>
    <div class="top">
      <SelfIntroduction></SelfIntroduction>
    </div>
  </section>
</div>
<section class="blog">
  <SectionTitle text="Blog"></SectionTitle>
  <SectionExplanation text="最近のブログです"></SectionExplanation>
  <ArticleList articles={filterArticles}></ArticleList>
  <a href="/blog" class="btn">一覧を見る</a>
</section>
<section class="sns">
  <SectionTitle text={"SNS"}></SectionTitle>
  <div class="items">
    <InstagramPanel></InstagramPanel>
    <TwitterPanel></TwitterPanel>
  </div>
</section>

<style lang="scss">

  .top-container {
    animation: 2s fadeIn;
    background-image: url("/wallpaperbetter.com.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  section {
    animation: 2s fadeIn;
    margin: 0 auto;
    width: 1100px;
    margin-bottom: 100px;

    .items {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      gap: 50px;
    }

  }

  .top {
    color: #fff;
    display: flex;
    height: 600px;
  }

  .sns {
    height: 100%;
  }

  .btn {
    width: 150px;
    display: block;
    margin: 0 auto;
    background: #fff;
    border-radius: 5px;
    font-size: 20px;
    padding: 5px 20px;
    border-width: 1px;
    margin-top: 15px;
    transition: all .3s;
  }

  .btn:hover {
    color: #fff;
    background: #000;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
</style>