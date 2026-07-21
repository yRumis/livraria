export interface Book {
  id: string;
  title: string;
  isbn: string;
  publishedYear: number;
  available: boolean;

  authorId: string;
  categoryId: string;

  createdAt: Date;
  updatedAt: Date;
}
