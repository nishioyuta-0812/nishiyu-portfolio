<script lang="ts">
import type { Article } from "../../state/articleState";
import ArticlePanel from "./ArticlePanel.svelte";
  export let articles: Article[];
</script>

<div class="article-list">
  {#each articles as article }
    <ArticlePanel article={article}></ArticlePanel>
  {/each}
  
</div>

<style lang="scss">
  .article-list {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    max-width: 1100px;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    .article-list {
      width: 100%;
      display: block;
      align-items: center;
    }
  }
</style>