import React, { useState } from "react";
import "./App2.css";
import { motion } from "framer-motion";



export const Input = (props) => {
    return (
      <label>
        <code>{props.children}</code>
        <input
          value={props.value}
          type="range"
          min={props.min}
          max={props.max}
          onChange={(e) => props.set(parseFloat(e.target.value))}
        />
        <input
          type="number"
          value={props.value}
          min={props.min}
          max={props.max}
          onChange={(e) =>  props.set(parseFloat(e.target.value) || 0)}
        />
      </label>
    );
  }

const App2 = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);
  
    return (
      <div className="example">
        <div>
          <motion.div
            className="box"
            animate={{ x, y, rotate }}
            transition={{ type: "spring" }}
          />
        </div>
        <div className="inputs">
          <Input value={x} set={setX}  min={-200} max={200}>
            x
          </Input>
          <Input value={y} set={setY} min={-200} max={200}>
            y
          </Input>
          <Input value={rotate} set={setRotate} min={-180} max={180}>
            rotate
          </Input>
        </div>
      </div>
    );
};

export default App2;
