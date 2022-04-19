export interface IProduct<T = number> {
  id: number | T;
  title: string;
  price: number | T;
  description: string;
  category: string;
  image: string;
  ratingRate: number | T;
  ratingCount: number | T;
}

export type TCreateProduct = Omit<IProduct<string>, "id">;
