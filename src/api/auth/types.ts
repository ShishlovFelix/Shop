export interface IRegistration {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface IAuthorization {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}
