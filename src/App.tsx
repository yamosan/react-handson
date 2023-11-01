import { FC } from "react";
import { User } from "./service";
import { useLoaderData } from "./LoaderDataProvider";

export const App: FC = () => {
  const { data: user } = useLoaderData<User>();

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
