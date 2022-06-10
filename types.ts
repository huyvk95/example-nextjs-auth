export type ErrorType = {
  code?: number;
  message?: string;
};

export type Transaction = {
  type: "created" | "pending" | "finish";
  error?: ErrorType;
};

export type User = {
  username: string;
};

export type PageProps = {
  user: User;
};
