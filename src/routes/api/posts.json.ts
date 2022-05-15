import type { EntryCollection } from "contentful";
import type { IBlogFields } from "../../../@types/generated/contentful";
import contentful from "contentful";
import type { RequestHandler } from '@sveltejs/kit';


export const get: RequestHandler = async () => {
  const client = contentful.createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID as string,
    accessToken: import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN as string
  });

  const items: EntryCollection<IBlogFields> = await client.getEntries<IBlogFields>({
    content_type: "blog",
  });

  const articles =  items.items.map(i => ({
    id: i.sys.id,
    title: i.fields.title,
    contents: i.fields.content,
    thumbnail: i.fields.thumbnail.fields.file.url,
    updateDate: i.sys.updatedAt.substring(0,10)
  })) 

  return { body: JSON.stringify(articles) };
};