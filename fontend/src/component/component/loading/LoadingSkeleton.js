import React from "react";

const LoadingSkeleton = (props) => {
  return (
    <div
      className="loading-skeleton"
      style={{
        height: props.height,
        wdith: props.width,
        borderRadius: props.radius,
      }}
    ></div>
  );
};

export default LoadingSkeleton;
