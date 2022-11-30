import React from "react";

const Procedure = () => {
  return (
    <div>
      <p>
        For proving this theorem, we have to construct either an equilateral or
        isosceles triangle.
      </p>
      <figure>
        <img src="https://www.mathdoubts.com/cimgs/triangle/isosceles/forming-isosceles-triangle.gif" />
      </figure>
      <p>
        is a triangle and its two sides are of equal length. Hence, the triangle
        is called an isosceles triangle. In this isosceles triangle, the lengths
        of the sides and are equal. Draw a perpendicular line to the side from
        point . It divides the side at its middle point exactly and the point of
        intersection is . Therefore, . Similarly, the line divides the as two
        right angled triangles and . Now, the perpendicular line is a common
        side to both right angled triangles.
      </p>
    </div>
  );
};

export default Procedure;
