<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ params, fetch }) => {

    const url = `/api/articles/${params.slug}.json`;
    let res = await fetch(url);
    console.log( await res.json);
    return {
        props: {
          article: await res.json()
        }
    };
  }

</script>

<script lang="ts">
  import type { Article } from '$lib/view/state/articleState';
  import SvelteMarkdown from "svelte-markdown";
  import { MetaTags } from 'svelte-meta-tags';

  export let article: Article;

</script>


<MetaTags
  title={article.title}
  openGraph={{
    url: `https://nishiyu.net/articles/${article.id}`,
    title: article.title,
    description: article.contents,
    images: [
      {
        url: `https:${article.thumbnail}`,
        width: 800,
        height: 600,
        alt: 'Og Image Alt'
      }
    ],
    site_name: 'NishiyuPortfolio'
  }}
  twitter={{
    handle: '@yutakun_27',
    site: '@yutakun_27',
    cardType: 'summary_large_image',
    title: article.title,
    description: article.contents,
    image: `https:${article.thumbnail}`,
    imageAlt: 'Twitter image alt yutakun blog'
  }}
>

</MetaTags>
<section>
  <div class="article-container">
    <div class="article-title">
      <h1>{article.title}</h1>
    </div>
    <div class="update-date">
      <p>更新日: {article.updateDate}</p>
    </div>
    <div class="article-body markdown-body">
      <SvelteMarkdown source={article.contents} ></SvelteMarkdown>
    </div>
  </div>
</section>

<style lang="scss">
  section {
        height: 70%;
        margin: 0 auto;
        width: 1100px;
      }

  .article-container {
    background-color: #fff;
    max-width: 1000px;
    margin: 0 auto;
    padding: 50px;
    border: 1px solid #a5a4a4;
    min-height: 500px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px -6px 15px rgba(0, 0, 0, 0.1);

    .article-title {
      border-bottom: 3px solid #2c2c2c;
      margin-bottom: 10px;
      padding-bottom: 10px;
      font-weight: bold;
      font-size: 25px;
    }

    .update-date{
      color: #a5a4a4;
      font-size: 14px;
      margin-bottom: 20px;
    }

    .markdown-body  {
      background-color: #fff;
      color: black;

      :global(code) {
        color: #c9d1d9 ;
      }
      :global(ul) {
        list-style: disc;
      }
    }
    
  }

</style>