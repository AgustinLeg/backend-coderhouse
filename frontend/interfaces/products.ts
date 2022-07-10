export interface IProduct {
  id: string;
  images: string;
  inStock: number;
  price: number;
  title: string;
  slug: string;
  description: string;

  // TODO: agregar createdAt y updatedAt
}
