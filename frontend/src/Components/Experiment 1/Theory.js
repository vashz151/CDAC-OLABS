import React from "react";
import fig1 from "../../Images/Picture1.png";
import fig2 from "../../Images/Picture2.png";
import fig3 from "../../Images/Picture3.png";
import "../../CSS/fig.css";

function Theory() {
  return (
    <div>
      <h2>Objective:</h2>
      <p>
        To prove that sum of two sides of triangle is always greater than third
        side and if two sides are equal than two opposite angles are equal.
      </p>
      <h2>Introduction:</h2>
      <p>
        According to triangle inequality theorem, for any given triangle, the
        sum of two sides of a triangle is always greater than the third side. A
        polygon bounded by three line-segments is known as the Triangle. It is
        the smallest possible polygon. A triangle has three sides, three
        vertices, and three interior angles. The types of triangles are based on
        its angle measure and length of the sides. The inequality theorem is
        applicable for all types triangles such as equilateral, isosceles and
        scalene.
        <br />
      </p>
      <figure>
        <img src={fig1} alt="Types of Triangles" />
        <figcaption>Fig.1: Triangles</figcaption>
      </figure>
      <h3>Types of Triangles: </h3>
      <ol type="a">
        <li> Classification according to Side Lengths</li>
        <ol style={{ display: "inlineBlock", clear: "both" }}>
          <li>Equilateral Triangle</li>
          <li>Isosceles Triangle</li>
          <li>Scalene Triangle</li>
        </ol>
        <figure>
          <img src={fig2} alt="Based on Side Lengths" />
          <figcaption>Fig.2: Based on Side Lengths</figcaption>
        </figure>
        <li>Classification according to Angles</li>
        <ol>
          <li>Right Angled Triangle Triangle</li>
          <li>Accute Angled Triangle</li>
          <li>Obtuse Angled Triangle</li>
        </ol>
        <figure>
          <img src={fig3} alt="Based on Angles" />
          <figcaption>Fig.3: Based on Angles</figcaption>
        </figure>
      </ol>
      <div>
        <h2 className="example">
          <strong>Example 1:</strong>
        </h2>
        <p>
          Check whether it is possible to have a triangle with the given side
          lengths.
        </p>
        <p>7,9,13</p>
        <h3>Solution</h3>
        <p>Add any two sides and see if it is greater than the other side.</p>
        <p>The sum of 7 and 9 is 16 and 16 is greater than 13 .</p>
        <p>The sum of 9 and 13 is 21 and 21 is greater than 7. </p>
        <p>The sum of 7 and 13 is 20 and 20 is greater than 9.</p>
        <p>
          This set of side lengths satisfies the Triangle Inequality Theorem.
        </p>
        <p>
          So, it is possible to have a triangle with the given side lengths.
        </p>
      </div>
      <div>
        <h2 className="example">
          <strong>Example 2:</strong>
        </h2>
        <p>
          Check whether it is possible to have a triangle with the given side
          lengths.
        </p>
        <p>4,8,15</p>
        <h3>Solution</h3>
        <p>Add any two sides and see if it is greater than the other side.</p>
        <p>The sum of 4 and 8 is 12 and 12 is less than 15 .</p>
        <p>The sum of 8 and 15 is 23 and 23 is greater than 4. </p>
        <p>The sum of 4 and 15 is 19 and 19 is less than 8.</p>
        <p>
          This set of side lengths does not satisfy the Triangle Inequality
          Theorem.
        </p>
        <p>
          So, it is not possible to have a triangle with the given side lengths.
        </p>
      </div>
    </div>
  );
}

export default Theory;
