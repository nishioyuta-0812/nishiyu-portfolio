<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ params, fetch }) => {
    console.log(params);
    console.log(fetch);

    const url = `/api/articles/${params.slug}.json`;
    let res = await fetch(url);
    console.log( await res.json);
    return {
        props: {
          id: await res.json()
        }
    };
  }

</script>

<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";
  import { MetaTags } from 'svelte-meta-tags';

  export let id: string;
  export let source: string;
  export let title: string;
  export let updateDate: string;
  export let image: string;

</script>


<MetaTags
  title={title}
  openGraph={{
    url: `https://nishiyu.net/articles/${id}`,
    title: title,
    description: source,
    images: [
      {
        url: `https:${image}`,
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
    title: title,
    description: source,
    image: `https:${image}`,
    imageAlt: 'Twitter image alt yutakun blog'
  }}
>

</MetaTags>
<section>
  <div class="article-container">
    <div class="article-title">
      <h1>{title}</h1>
    </div>
    <div class="update-date">
      <p>更新日: {updateDate}</p>
    </div>
    <div class="article-body markdown-body">
      <SvelteMarkdown {source} ></SvelteMarkdown>
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