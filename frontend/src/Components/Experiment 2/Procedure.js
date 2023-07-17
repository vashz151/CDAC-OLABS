import React from "react";

const Procedure = () => {
  return (
    <div style={{fontSize:20}}>
      <p>
        For proving this theorem, we have to construct either an equilateral or
        isosceles triangle.
      </p>
      <figure>
        <img src="https://qph.cf2.quoracdn.net/main-qimg-b72bd5b5dc7e8bd59823a984b1bfae6a-lq" />
      </figure>
      <p>
        Triangle ABC is a triangle and its two sides are of equal length. Hence,
        the triangle ABC is called an isosceles triangle. In this isosceles
        triangle, the lengths of the sides AC bar and BC bar are equal. AC=BC
      </p>
      <p>
        Draw a perpendicular line to the side AB bar from point C. It divides
        the side AB bar at its middle point exactly and the point of
        intersection is D. Therefore, AD=BD.
      </p>
      <p>
        Similarly, the line DC bar divides the triangle ABC as two right angled
        triangles DAC and DBC. Now, the perpendicular line DC bar is a common
        side to both right angled triangles.
      </p>
      <p>
        <figure>
          <img src="https://www.mathdoubts.com/cimgs/triangle/isosceles/rhs-criterion-isosceles-triangle.png" />
        </figure>
      </p>
      <p>Now,compare the lengths of three sides of both triangles.</p>
      <p>1.AC=BC 2.AD=BD 3.DC=DC</p>
      <p>
        The comparison of lengths of sides of the both triangles revealed that
        the two triangles are same but represented differently.
      </p>
      <p>
        Therefore, the traingle DAC and triangle DBC are known as congruent
        triangles and they also represent Right angle Hypotenuse side (RHS)
        criterion. Triangle DAC is congruent to Triangle DBC
      </p>
      <p>
        In this case, angle DAC is the opposite angle to the side BC bar and
        angle DBC is also opposite angle to the side AC bar. The two angles are
        equals due to the congruency. Angle(DAC)=Angle(DBC)
      </p>
      <p>
        Therefore, if two sides of a triangle are equal, then the angles
        opposite to them are also equal.
      </p>
    </div>
  );
};

export default Procedure;
