export interface IProduct {
  id: string;
  images: string[];
  stock: number;
  price: number;
  title: string;
  slug: string;
  description: string;

  // TODO: agregar createdAt y updatedAt
}
