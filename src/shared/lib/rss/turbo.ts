import { BASE_URL } from "@/shared/config";
import RSS from "turbo-rss";

type TurboItem = {
  title: string,
  content: string,
  author?: string
  url: string,
  date: Date,
  image_url?: string,
  menu: { link: string, text: string }[]
  breadcrumbs?: { link: string, text: string }[]
}

export function getTurboRSSUrlSetResponse(items: TurboItem[]) {
  const feed = new RSS({
    title: "market.investsteel.ru",
    description: "",
    site_url: BASE_URL,
    feed_url: `${BASE_URL}/rss/turbo`,
    link: `${BASE_URL}`,
  });

  items.forEach((item) => {
    feed.item(item)
  })

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
