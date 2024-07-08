import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Sphere: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Sphere geometry
    const geometry = new THREE.SphereGeometry(1, 32, 32);

    // Texture loader
    const textureLoader = new THREE.TextureLoader();
    const diffuseTexture = textureLoader.load(
      "/textures/stone_wall_04_diff_4k.jpg",
      onLoad,
      onProgress,
      // onError,
    );
    // const roughnessTexture = textureLoader.load(
    //   "../public/textures/stone_wall_04_rough_4k.exr",
    //   onLoad,
    //   onProgress,
    //   onError,
    // );

    // Material setup
    const material = new THREE.MeshStandardMaterial({
      map: diffuseTexture,
      // roughnessMap: roughnessTexture,
      roughness: 1,
      metalness: 0.5,
    });

    // Sphere mesh
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Camera setup
    camera.position.z = 5;

    // OrbitControls setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.rotateSpeed = 0.35;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      controls.dispose();
    };

    // Texture loading handlers
    function onLoad(texture: THREE.Texture) {
      console.log(`Texture loaded successfully: ${texture.image.src}`);
    }

    function onProgress(xhr: ProgressEvent<EventTarget>) {
      console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
    }

    // function onError(err: Error) {
    //   console.error("Error loading texture:", err);
    // }
  }, []);

  return <div ref={mountRef} />;
};

export default Sphere;
