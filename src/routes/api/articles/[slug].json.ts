import  contentful from "contentful";
import type { IBlogFields } from "../../../../@types/generated/contentful";
import type { Entry } from "contentful";
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ params }) => {
  const { slug } = params;
  console.log(`id: ${slug}`);
  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
    accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN as string
  });

  const item: Entry<IBlogFields> = await client.getEntry<IBlogFields>(slug);
  const post = {
    id: slug,
	  title: item.fields.title,
    contents: item.fields.content,
    thumbnail: item.fields.thumbnail.fields.file.url,
    updateDate:item.sys.updatedAt.substring(0,10)
  }

  return { body: JSON.stringify(post)};
}
