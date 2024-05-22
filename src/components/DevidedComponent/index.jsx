import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const DevidedComponent = ({ initialColor, removePartition }) => {
  const [children, setChildren] = useState([]);
  const [color, setColor] = useState(initialColor || getRandomColor());

  const splitBox = (direction) => {
    const newColor = getRandomColor();
    setChildren([
      { id: 1, color: color, direction: direction },
      { id: 2, color: newColor, direction: direction },
    ]);
  };

  const removeChild = (id) => {
    setChildren(children.filter((child) => child.id !== id));
  };

  return (
    <div className="relative w-full h-full" style={{ backgroundColor: color }}>
      {children.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center space-x-2">
          <button
            onClick={() => splitBox("vertical")}
            className="bg-white px-2 py-1 border"
          >
            V
          </button>
          <button
            onClick={() => splitBox("horizontal")}
            className="bg-white px-2 py-1 border"
          >
            H
          </button>
        </div>
      )}
      {children.length > 0 && (
        <div className="absolute inset-0 flex flex-col">
          <div
            className={`flex ${
              children[0].direction === "vertical" ? "flex-row" : "flex-col"
            } w-full h-full`}
          >
            {children.map((child, index) => (
              <ResizableBox
                key={index}
                width={children[0].direction === "vertical" ? "50%" : "100%"}
                height={children[0].direction === "vertical" ? "100%" : "50%"}
                resizeHandles={
                  children[0].direction === "vertical" ? ["e"] : ["s"]
                }
                className={`relative ${
                  children[0].direction === "vertical" ? "w-1/2" : "h-1/2"
                }`}
              >
                <DevidedComponent
                  initialColor={child.color}
                  removePartition={() => removeChild(child.id)}
                />
                <button
                  onClick={removePartition}
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 m-1"
                >
                  -
                </button>
              </ResizableBox>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DevidedComponent;
