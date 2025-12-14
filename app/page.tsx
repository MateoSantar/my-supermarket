'use client';
import Dashboard from "./dashboard/page";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(
    ()=>{
      router.push("/dashboard");
    }
  );
  return (
    <div>
      <Dashboard/>
    </div>
  );
}
