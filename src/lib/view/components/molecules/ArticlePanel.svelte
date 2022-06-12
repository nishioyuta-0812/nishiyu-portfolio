<script lang="ts">
import type { Article } from "../../state/articleState";
import { base } from '$app/paths';


  export let article: Article;
</script>


<a href={`${base}/articles/${article.id}`} class="panel">
  
  <div class="thumbnail" style="background-image: url({article.thumbnail});">

  </div>
  <div class="article-meta">
    <p class="title">{article.title}</p>
    <p class="update-date">{article.updateDate}</p>
  </div>
</a>

<style lang="scss">
  .panel {
    display: block;
    margin-bottom:16px;
    border: 1px solid #a5a4a4;
    box-sizing: border-box;
    position: relative;
    transition: box-shadow 0.3s;

    .thumbnail {
      width: 100%;
      height: 152px;
      display: block;
      background-size: cover;
      background-position: center;
    }

    .article-meta {
      display: block;
      padding: 16px;
      background-color: #fff;
      border-top: 1px solid #a5a4a4;
      box-sizing: border-box;
      .title {
        font-weight: bold;
        line-height: 140%;
        font-size: 16px;
      }

      .update-date {
        font-size: 14px;
        color: #a5a4a4;
      }
    }

    
  }

  .panel:nth-of-type(4n) {
    margin-right: 0px;
  }

  .panel:hover {
      box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px -6px 15px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 480px) {
    .panel {
      width: 80%;
      margin: 20px auto;

      .thumbnail {
        height: 150px;
      }

      .article-meta {
        height: 75px;

        .title {
          font-size: 15px;
        }

        .update-date {
          font-size: 10px;
        }
      }
    }

    .panel:nth-of-type(4n) {
      margin-right: auto;
    }
  }
</style>