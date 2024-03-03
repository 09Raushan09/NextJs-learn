"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const navigate= (name)=>{
    router.push(name)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-48">
      <Link href="/login">Go to Login page</Link>
      <Link href="/about">Go to About page</Link>
      <button onClick={()=> navigate("/login")}>Go to Login Page</button>
      <button onClick={()=> navigate("/about")}>Go to About Page</button>
    </main>
  );
}
