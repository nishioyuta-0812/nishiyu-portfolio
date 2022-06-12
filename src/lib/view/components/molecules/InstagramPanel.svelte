<script lang="ts">
  import IWidget from "../atoms/InstagramWidget.svelte";
  import PanelTitle from "../atoms/PanelTitle.svelte";
</script>

<div class="instagram-panel w-full sm:w-[45%]">
  <PanelTitle title={"Instagram"}></PanelTitle>
  <IWidget></IWidget>
</div>

<style lang="scss">
  .instagram-panel {
    background-color: #fff;
    height: 500px;
    border: 1px solid #a5a4a4;
    padding: 20px;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1), 0px -6px 15px rgba(0, 0, 0, 0.1);
  }

</style>