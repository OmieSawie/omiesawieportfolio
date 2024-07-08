"use client";
// pages/index.tsx

import Head from "next/head";
import React, { Suspense } from "react";
import GlbViewer from "../../../components/R35_GTR_Model";
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>GLB Viewer</title>
        <meta
          name="description"
          content="View GLB model using Three.js in React"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>GLB Viewer Example</h1>
        <Suspense fallback={null}>
          <GlbViewer glbPath="/r35GTR/source/nissan_skyline_r35_gtr_nismo__free.glb" />{" "}
        </Suspense>
      </main>

      <footer>
        <p>Footer content here</p>
      </footer>
    </div>
  );
};

export default Home;
