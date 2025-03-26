"use client";
import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Environment, Html, useProgress } from "@react-three/drei";
import MovingStars from "./Stars";
import { Suspense, useState, useEffect } from "react";
import PageLoader from "./PageLoader";
import { AnimatePresence, motion } from "framer-motion";

export default function Scene() {
  const { progress, loaded } = useProgress();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Only hide loader when everything is fully loaded
    if (loaded && progress >= 100) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => setShowLoader(false), 300);
      return () => clearTimeout(timer);
    }
  }, [loaded, progress]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showLoader && (
          <motion.div
            key="loader"
            initial={{ opacity: 1, y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1, ease: "linear" }}
            className="w-full border-t-[1px] border-[#b8b8b8] h-screen absolute bg-black flex justify-center items-center z-50"
          >
            <p className="font-artifika text-md">Welcome</p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full h-screen absolute inset-0 -z-2">
        <Canvas>
          <directionalLight position={[0, 3, 2]} intensity={3} />
          <Environment preset="city" />
          <Suspense fallback={null}>
            <Model />
            <MovingStars />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
