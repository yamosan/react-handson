export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  profileImage: string;
};

export async function getUser(): Promise<User> {
  const user = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return user.json();
}
