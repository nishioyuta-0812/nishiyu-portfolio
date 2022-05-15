<script lang="ts">
  export let isInactive: boolean = false;
</script>

{#if isInactive }
  <p class="inactive-btn">Send</p>
{:else}
  <button class="btn" type="submit">Send</button>
{/if}

<style lang="scss">

  .btn {
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

  .inactive-btn {
    display: block;
    width: 92.45px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid rgb(119, 119, 119);
    border-radius: 5px;
    font-size: 20px;
    padding: 5px 20px;
    margin-top: 15px;
    color: rgb(119, 119, 119);
  }
</style>