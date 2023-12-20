import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <h1>Welcome to DevFlow!</h1>
    </div>
  );
}
