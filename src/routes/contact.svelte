<script lang="ts">  
  import ContactForm from "$lib/view/components/molecules/ContactForm.svelte";
  import SectionTitle from "$lib/view/components/atoms/SectionTitle.svelte";
import SectionExplanation from "$lib/view/components/atoms/SectionExplanation.svelte";
</script>

<section class="container sm:px-[100px]">
  <SectionTitle text="Contact"></SectionTitle>
  <SectionExplanation text="ポートフォリオWebサイト、楽しんで頂けましたでしょうか？このWebサイトについて、まだまだこれからアップデートしていくつもりです。なにかコメントやアドバイスなどありましたらお気軽に下記のフォームをご利用ください。お待ちしております！！"></SectionExplanation>
  <ContactForm></ContactForm>
</section>

<style lang="scss">
  section {
    padding-top: 50px;
    height: 70%;
    margin: 0 auto;
  }
</style>