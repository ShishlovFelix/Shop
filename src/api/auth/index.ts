import { api } from "../index";
import { IRegistration, IToken, IAuthorization } from "./types";

const registration = (params: IRegistration) =>
  api.post<IToken>("auth/registration", params);
const authorization = (params: IAuthorization) =>
  api.post<IToken>("auth/login", params);
const outAuthorization = () => api.post<IToken>("auth/logout");

export default {
  outAuthorization,
  registration,
  authorization,
};
