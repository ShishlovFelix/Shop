import { api } from "../index";
import { IProduct } from "../products/types";

const getUserWishlist = () => api.get<IProduct[]>(`users/getWishList`);
const addToWishList = (productId: string) =>
  api.post(`users/addToWishList/${productId}`);
const deleteFromWishList = (productId: string) =>
  api.post(`users/deleteFromWishList/${productId}`);

export default {
  getUserWishlist,
  addToWishList,
  deleteFromWishList,
};
