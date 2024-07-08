import React from "react";
import Link from "next/link";

import "./globals.css";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className=" text-lg font-medium"> Hello, Omkar Sawant here</h1>
        <p className="text-sm"> ... I prefer OmieSawie</p>
      </div>
      <div className="text-center">
        <p>But wait, theres more to expore ...</p>
        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm mt-10 px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          <Link href="/explore"> Explore more ! </Link>
        </button>
      </div>
      <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      >
        <Link href="/me"> View a R35 GTR </Link>
      </button>
    </main>
  );
};

export default Home;
