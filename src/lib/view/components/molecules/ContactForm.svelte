<script lang="ts">
  import * as contentful from "contentful-management";
  import { onMount } from "svelte";
  import SubmitButton from "../atoms/SubmitButton.svelte";
  import { toast } from "@zerodevx/svelte-toast"
  import { form, field } from 'svelte-forms';
  import { email, required} from 'svelte-forms/validators';

  let isInactive: boolean;
  let environment: contentful.Environment;
  let name = field("name", "", [required()]);
  let emailAddress = field("emailAddress", "", [email(), required()]);
  let message = field("message", "", [required()]);
  const contactForm = form(name, emailAddress, message);

  onMount(async () => {
    const client = contentful.createClient({
    accessToken: import.meta.env.VITE_CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN as string
    });
    const space = await client.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID as string);

    environment = await space.getEnvironment(import.meta.env.VITE_CONTENTFUL_ENVIRONMENT as string);
  });

  async function handleSubmit() {
    await contactForm.validate();
    if($contactForm.valid) {
      submitContentful()
    }
  }

  async function submitContentful() {
    isInactive = true;
    const draftEntry = await environment.createEntry(import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE_CONTACT as string, {
      fields: {
          name: {
            "en-US": $name.value
          },
          email: {
            "en-US": $emailAddress.value
          },
          message: {
            "en-US": $message.value
          }
      }
    });

    try {
      await draftEntry.publish();
      toast.push("送信が成功しました！", {
        theme: {
          '--toastBackground': '#48BB78',
          '--toastBarBackground': '#2F855A'
        }
      });
      isInactive = false;
      name.clear();
      emailAddress.clear();
      message.clear();
    } catch (err) {
      console.error(err);
      toast.push("送信に失敗しました！", {
        theme: {
          '--toastBackground': '#F56565',
          '--toastBarBackground': '#C53030'
        }
      });
    }
  } 

</script>

<!-- svelte-ignore component-name-lowercase -->
<form class="form" on:submit|preventDefault={handleSubmit}>
  <div class="flex-box">
    <div class="left-item">
      <label for="name">
        Name
        {#if $contactForm.hasError('name.required')}
          <span class="error">名前を入力してください</span>
        {/if}
      </label>
      <span>
        <input type="text" bind:value={$name.value}>
      </span>
      <label for="email">
        Email
        {#if $contactForm.hasError('emailAddress.required') || $contactForm.hasError('emailAddress.email')}
          <span class="error">メールアドレスを入力してください</span>
        {/if}
      </label>
      <span>
        <input type="text" bind:value={$emailAddress.value}>
      </span>
    </div>
    <div class="right-item">
      <label for="message">
        Message
        {#if $contactForm.hasError('message.required') || $contactForm.hasError('name.email')}
          <span class="error">メッセージを入力してください</span>
        {/if}
      </label>
      <textarea name="" id="" cols="41" rows="11" bind:value={$message.value}></textarea>
    </div>
  </div>

  <SubmitButton {isInactive}></SubmitButton>
</form>

<style lang="scss">
  .form {
    width: 100%;
    
    .flex-box {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 60%;
      
      label {
        display: block;
        margin-bottom: 5px;
        text-align: left;
        font-size: 15px;
      }
  
      input {
        background: #fff;
        margin-bottom: 10px;
        width: 100%;
        line-height: normal;
        padding: 10px;
        border-radius: 5px;
        border-width: 1px;
      }
  
      textarea {
        background: #fff;
        width: 100%;
        height: 125px;
        line-height: normal;
        border-radius: 5px;
        border-width: 1px;
        padding: 10px;
      }

      .error {
        font-size: 10px;
        color: red;
      }
    }

    

    .left-item {
      width: 100%;
      margin-right: 25px;
    }

    .right-item {
      width: 100%;
    }
  }
</style>