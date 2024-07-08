import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const GlbViewer: React.FC<{ glbPath: string }> = ({ glbPath }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xaaaaaa); // Light gray background color

    const loader = new GLTFLoader();
    // const textureLoader = new THREE.TextureLoader();

    // Load cube texture for panoramic background
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const cubeMapTexture = cubeTextureLoader.load([
      "/skybox/right.jpg", // +x (right)
      "/skybox/left.jpg", // -x (left)
      "/skybox/top.jpg", // +y (top)
      "/skybox/bottom.jpg", // -y (bottom)
      "/skybox/front.jpg", // +z (front)
      "/skybox/back.jpg", // -z (back)
    ]);

    scene.background = cubeMapTexture;

    loader.load(
      glbPath,
      (gltf) => {
        scene.add(gltf.scene);

        // const textureFiles = {
        //   diffuse: "/r35GTR/textures/gltf_embedded_0.png",
        //   roughness: "/r35GTR/textures/gltf_embedded_2.png",
        //   metalness: "/r35GTR/textures/gltf_embedded_4.png",
        //   occlusion: "/r35GTR/textures/gltf_embedded_7.png",
        //   emissive: "/r35GTR/textures/gltf_embedded_8.png",
        // };

        // const textures = {};
        // for (const [key, value] of Object.entries(textureFiles)) {
        //   textures[key] = textureLoader.load(`${value}`);
        // }

        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (child.material instanceof THREE.MeshStandardMaterial) {
              // const material = child.material as THREE.MeshStandardMaterial;
              // Optionally handle textures for the glTF model's materials
              // material.map = textures.diffuse;
              // material.roughnessMap = textures.roughness;
              // material.metalnessMap = textures.metalness;
              // material.aoMap = textures.occlusion;
              // material.emissiveMap = textures.emissive;
              // material.needsUpdate = true;
            }
          }
        });
      },
      undefined,
      (error) => {
        console.error("Error loading GLB model:", error);
      },
    );

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    camera.position.set(0, 0, 5); // Adjust the camera position to view the model better

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Optional: smooth mouse movements
    controls.dampingFactor = 0.25;
    controls.rotateSpeed = 0.35;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update controls in every frame
      renderer.render(scene, camera);
    };

    animate();

    // Clean up Three.js resources on component unmount
    return () => {
      renderer.dispose();
      controls.dispose(); // Dispose of controls to avoid memory leaks
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default GlbViewer;

// import React, { useRef, useEffect } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
//
// import { OrbitControls } from "three/examples/jsm/Addons.js";
//
// const GlbViewer: React.FC<{ glbPath: string }> = ({ glbPath }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//
//   useEffect(() => {
//     if (!canvasRef.current) return;
//
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000,
//     );
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0xaaaaaa); // Light gray background color
//
//     const loader = new GLTFLoader();
//     const textureLoader = new THREE.TextureLoader();
//
//     loader.load(
//       glbPath,
//       (gltf) => {
//         scene.add(gltf.scene);
//         // Optionally, traverse through the scene to handle textures
//         gltf.scene.traverse((child) => {
//           if (child instanceof THREE.Mesh) {
//             // Handle materials with textures
//             if (child.material instanceof THREE.MeshStandardMaterial) {
//               const originalMaterial =
//                 child.material as THREE.MeshStandardMaterial;
//             }
//           }
//         });
//       },
//       undefined,
//       (error) => {
//         console.error("Error loading GLB model:", error);
//       },
//     );
//
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
//     scene.add(ambientLight);
//
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     directionalLight.position.set(1, 1, 1).normalize();
//     scene.add(directionalLight);
//
//     camera.position.set(0, 0, 5); // Adjust the camera position to view the model better
//
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true; // Optional: smooth mouse movements
//     controls.dampingFactor = 0.25;
//     controls.rotateSpeed = 0.35;
//
//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update(); // Update controls in every frame
//       renderer.render(scene, camera);
//     };
//
//     animate();
//
//     // Clean up Three.js resources on component unmount
//     return () => {
//       renderer.dispose();
//       controls.dispose(); // Dispose of controls to avoid memory leaks
//     };
//   }, []);
//
//   return <canvas ref={canvasRef} />;
// };
//
// export default GlbViewer;
