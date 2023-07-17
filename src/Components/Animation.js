import React from "react";
import "../CSS/anim.css";

const IframeComponent = () => {
  return (
    <div className="iframe-container">
      <div className="content">
        <h2>Triangle Inequality Theorem</h2>
        <p>
          A polygon bounded by three line-segments is known as the Triangle. It
          is the smallest possible polygon. A triangle has three sides, three
          vertices, and three interior angles.The Triangle Inequality Theorem
          states that the sum of the lengths of any two sides of a triangle must
          be greater than the length of the third side. This theorem is a
          fundamental property of triangles and is used to determine if a given
          set of side lengths can form a valid triangle. The types of triangles
          are based on its angle measure and length of the sides. The inequality
          theorem is applicable for all types triangles such as equilateral,
          isosceles and scalene.
        </p>

        <p>Please watch the video to understand the concept better.</p>
      </div>
      <iframe
        width="600"
        height="500"
        src="https://www.youtube.com/embed/Fy3OkZHX7LE"
        title="Triangle Inequality Theorem"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="iframe"
      ></iframe>
    </div>
  );
};

export default IframeComponent;
