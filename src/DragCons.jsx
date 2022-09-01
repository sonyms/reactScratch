import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./dragCons.css";

const DragCons = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <div className="example-container">
        <motion.div className="drag-area" ref={constraintsRef} />
        <motion.div drag dragConstraints={constraintsRef} />
      </div>
    </>
  );
};

export default DragCons;
