export type Post = {
  id: number;
  documentId: string;
  title: string;
  content: ContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
};

export type ContentBlock = {
  type: string;
  children: ContentChild[];
};

export type ContentChild = {
  text: string;
  type: string;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type PostData = {
  data: Post[];
  meta: {
    pagination: Pagination;
  };
}
