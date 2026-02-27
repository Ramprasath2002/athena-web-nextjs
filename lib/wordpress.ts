const API_URL = "https://www.athenatec.com/wp-json/wp/v2";

export type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content?: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url?: string;
      media_details?: {
        sizes?: {
          medium_large?: {
            source_url: string;
          };
        };
      };
    }[];
  };
};

export async function getPosts(): Promise<WPPost[]> {
  const res = await fetch(
    "https://www.athenatec.com/wp-json/wp/v2/posts?_embed",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPost(slug: any) {
  const res = await fetch(
    `${API_URL}/posts?slug=${slug}&_embed`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) throw new Error("Failed to fetch post");

  const data = await res.json();
  return data.length ? data[0] : null;
}

export async function getAllPosts() {
  const res = await fetch(
    `${API_URL}/posts?_embed&per_page=100`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) throw new Error("Failed to fetch all posts");

  return res.json();
}