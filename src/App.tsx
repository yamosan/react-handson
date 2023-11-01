import { FC } from "react";
import { User } from "./service";

type Props = {
  hydrationData?: User;
};

function isBrowser() {
  return typeof window !== "undefined";
}

export const App: FC<Props> = ({ hydrationData }) => {
  // @ts-ignore
  const user: User = isBrowser() ? window.____hydrationData : hydrationData;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
