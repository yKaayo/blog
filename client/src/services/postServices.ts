// Lib
import { api } from "@/lib/axios";

// Type
import type { PostData } from "@/types/post";

export const getPosts = async () => {
  try {
    const { data } = await api.get<PostData>("/api/posts");

    if (!data) return [];

    return data.data;
  } catch (error) {
    console.error("Erro ao carregar os posts:", error);

    throw new Error(
      "Não foi possível carregar os posts. Tente novamente mais tarde."
    );
  }
};
