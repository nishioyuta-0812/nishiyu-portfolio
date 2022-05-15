<script lang="ts">  
  import ContactForm from "$lib/view/components/molecules/ContactForm.svelte";
  import SectionTitle from "$lib/view/components/atoms/SectionTitle.svelte";
import SectionExplanation from "$lib/view/components/atoms/SectionExplanation.svelte";
</script>

<section>
  <SectionTitle text="Contact"></SectionTitle>
  <SectionExplanation text="ポートフォリオWebサイト、楽しんで頂けましたでしょうか？このWebサイトについて、まだまだこれからアップデートしていくつもりです。なにかコメントやアドバイスなどありましたらお気軽に下記のフォームをご利用ください。お待ちしております！！"></SectionExplanation>
  <ContactForm></ContactForm>
</section>

<style lang="scss">
  section {
    height: 70%;
    margin: 0 auto;
    width: 1100px;
  }
</style>