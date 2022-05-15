<script lang="ts">
  import PanelTitle from "../atoms/PanelTitle.svelte";
  import TwitterWidget from "../atoms/TwitterWidget.svelte";
</script>
<div class="twitter-panel">
  <PanelTitle title={"Twitter"}></PanelTitle>
  <TwitterWidget></TwitterWidget>
</div>

<style lang="scss">
  .twitter-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    background-color: #fff;
    height: 500px;
    border: 1px solid #a5a4a4;
    padding: 20px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px -6px 15px rgba(0, 0, 0, 0.1);
  }

</style>