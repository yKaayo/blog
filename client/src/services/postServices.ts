// Lib
import { api } from "@/lib/axios";

// Type
import type { Post, PostData } from "@/types/post";

export const getPosts = async (query: string = "") => {
  try {
    const { data } = await api.get<PostData>(`/api/posts?populate=*&${query}`);

    if (!data) return [];

    return data.data;
  } catch (error) {
    console.error("Erro ao carregar os posts:", error);

    throw new Error(
      "Não foi possível carregar os posts. Tente novamente mais tarde."
    );
  }
};

export const getPost = async (slug: string): Promise<Post | null> => {
  try {
    const { data } = await api.get<PostData>(
      `/api/posts?populate=*&filters[slug][$eq]=${slug}`
    );

    if (!data) return null;

    return data.data[0];
  } catch (error) {
    console.error("Erro ao carregar os posts:", error);

    throw new Error(
      "Não foi possível carregar os posts. Tente novamente mais tarde."
    );
  }
};
