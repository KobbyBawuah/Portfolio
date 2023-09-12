'use client';

import React, { Fragment, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const gltf = useLoader(GLTFLoader, "/retro/scene.gltf");
  // const gltf = useLoader(GLTFLoader, "/sci-fi_computer/scene.gltf");
  // const gltf = useLoader(GLTFLoader, "/desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={8} groundColor='black' />
      <spotLight
        position={[, 0,]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={gltf.scene}
        scale={11}
        position={[0, -3.0, 0]}
        rotation={[0.35, 1.2, -0.33]}
      // object={gltf.scene}
      // scale={isMobile ? 0.7 : 0.75}
      // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
}

const ComputersCanvas = () => {

  return (
    // <Fragment>
    // {/* could implement model for small screen users that they do not get the full experience low p0*/ }
    //   {/* <Modal isVisible={isMobile} onClose={() => { setShowModal(false) }} /> */ }
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }
      }
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* {isMobile && <Modal/>} */}
        <Computers />
        {/* <Computers isMobile={isMobile} /> */}
      </Suspense>

      <Preload all />
    </Canvas>
    // </Fragment>
  );
};

export default ComputersCanvas