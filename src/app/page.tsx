import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello, Omkar Sawant here</h1>
      <button>
        <Link href="/me"> View Car </Link>
      </button>
    </main>
  );
};

export default Home;
