import { api } from "../index";
import { TCreateProduct, IProduct } from "./types";

const getAllProducts = () => api.get<IProduct[]>("products");
const getProductsInCategory = (category: string) =>
  api.get<IProduct[]>(`products/category/${category}`);
const getProductById = (id: string) => api.get<IProduct>(`products/${id}`);
const searchProducts = (name: string) =>
  api.get<IProduct[]>(`products/search/${name}`);
const getAllCategories = () => api.get<string[]>("products/categories");
const createProduct = (params: TCreateProduct) => {
  return api.post<IProduct>("products/create", params);
};

const allRequests = {
  getAllCategories,
  getAllProducts,
  getProductById,
  getProductsInCategory,
  searchProducts,
  createProduct,
};
export default allRequests;
