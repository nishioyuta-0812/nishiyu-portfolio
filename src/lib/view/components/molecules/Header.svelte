<script lang="ts">
  let isOpen: boolean = false;

  function clickMenu() {
    isOpen = !isOpen;
  }

</script>

<header class="header sm:p-8 p-4">
  <nav class="flex justify-between mx-auto container items-center">
    <div class="text-2xl sm:text-4xl font-bold ">
      <a href="/">Nishiyu Portfolio</a>
    </div>
    <div class="hidden md:block space-x-10 font-bold sm:text-2xl">
      <a href="/" class="hover:underline">Home</a>
      <a href="/profile" class="hover:underline">Profile</a>
      <a href="/blog" class="hover:underline">Blog</a>
      <a href="/contact" class="hover:underline">Contact</a>
    </div>
    <button class="md:hidden" on:click={clickMenu}>
      <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
        {#if isOpen}
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/>
        {:else}
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
        {/if}
      </svg>                       
    </button>
  </nav>
  {#if isOpen}
  <div class="mt-4">
    <ul>
      <li class="border-b"><a href="/" class="hover:bg-gray-200 rounded block px-8 py-2">Home</a></li>
      <li class="border-b"><a href="/profile" class="hover:bg-gray-200 rounded block px-8 py-2">Profile</a></li>
      <li class="border-b"><a href="/blog" class="hover:bg-gray-200 block rounded px-8 py-2">Blog</a></li>
      <li class="border-b"><a href="/contact" class="hover:bg-gray-200 rounded block px-8 py-2">Contact</a></li>
    </ul>
  </div>
  {/if}
</header>

<style lang="scss">

  .header {
    z-index: 9999;
    width: 100%;
    background-color: white;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.107);
    position: fixed;
    top: 0;
    left: 0;
    font-family: cursive;
  }

</style>