<script lang="ts">
import type { Article } from "../../state/articleState";
import ArticlePanel from "./ArticlePanel.svelte";
  export let articles: Article[];
</script>

<div class="article-list block sm:grid sm:grid-cols-2 gap-4 lg:grid-cols-4">
  {#each articles as article }
    <ArticlePanel article={article}></ArticlePanel>
  {/each}
  
</div>

<style lang="scss">
  .article-list {
    margin: 0 auto;
  }

</style>