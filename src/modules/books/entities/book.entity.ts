export interface Book {
  id: string;
  title: string;
  isbn: string;
  publishedYear: number;
  available: boolean;

  authorId: number;
  categoryId: string;

  createdAt: Date;
  updatedAt: Date;
}
