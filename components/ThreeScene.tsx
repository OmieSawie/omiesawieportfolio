import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { OrbitControls } from "three/examples/jsm/Addons.js";

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
    const textureLoader = new THREE.TextureLoader();

    loader.load(
      glbPath,
      (gltf) => {
        scene.add(gltf.scene);
        // Optionally, traverse through the scene to handle textures
        gltf.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            // Handle materials with textures
            if (child.material instanceof THREE.MeshStandardMaterial) {
              const originalMaterial =
                child.material as THREE.MeshStandardMaterial;
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
