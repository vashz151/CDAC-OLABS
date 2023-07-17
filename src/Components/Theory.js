import React from "react";
import fig1 from "../Images/Picture1.png";
import fig2 from "../Images/Picture2.png";
import fig3 from "../Images/Picture3.png";
import "../CSS/theory.css";

function Theory() {
  return (
    <div className="container">
      <div
        style={{
          width: "100%",
          boxShadow: "0 2px 4px rgba(255, 255, 255, 0.568)",
        }}
      >
        <div className="obj">
          <h2 className="highlight">Objective:</h2>
          <p>
            To prove that sum of two sides of triangle is always greater than
            third side and if two sides are equal than two opposite angles are
            equal.
          </p>
          <h2 className="highlight">Introduction:</h2>
          <p>
            According to triangle inequality theorem, for any given triangle,
            the sum of two sides of a triangle is always greater than the third
            side. A polygon bounded by three line-segments is known as the
            Triangle. It is the smallest possible polygon. A triangle has three
            sides, three vertices, and three interior angles. The types of
            triangles are based on its angle measure and length of the sides.
            The inequality theorem is applicable for all types triangles such as
            equilateral, isosceles and scalene.
            <br />
          </p>
        </div>
        <figure className="figure1">
          <img src={fig1} alt="Types of Triangles" />
          <figcaption>Fig.1: Triangles</figcaption>
        </figure>
      </div>
      <div className="type">
        <h3 className="highlight">Types of Triangles: </h3>
        <ol type="a">
          <div className="side">
            <li> Classification according to Side Lengths</li>
            <ol style={{ display: "inlineBlock", clear: "both" }}>
              <li>Equilateral Triangle</li>
              <li>Isosceles Triangle</li>
              <li>Scalene Triangle</li>
            </ol>
          </div>
          <figure className="figure2">
            <img src={fig2} alt="Based on Side Lengths" />
            <figcaption>Fig.2: Based on Side Lengths</figcaption>
          </figure>
          <div className="angle">
            <li>Classification according to Angles</li>
            <ol>
              <li>Right Angled Triangle Triangle</li>
              <li>Accute Angled Triangle</li>
              <li>Obtuse Angled Triangle</li>
            </ol>
          </div>
          <figure className="figure3">
            <img src={fig3} alt="Based on Angles" />
            <figcaption>Fig.3: Based on Angles</figcaption>
          </figure>
        </ol>
      </div>
      <div className="example">
        <div className="example1">
          <h2 className="highlight1">
            <strong>Example 1:</strong>
          </h2>
          <p>
            Check whether it is possible to have a triangle with the given side
            lengths. 7,9,13
          </p>

          <h3 className="highlight">Solution</h3>
          <p>Add any two sides and see if it is greater than the other side.</p>
          <p>The sum of 7 and 9 is 16 and 16 is greater than 13 .</p>
          <p>The sum of 9 and 13 is 21 and 21 is greater than 7. </p>
          <p>The sum of 7 and 13 is 20 and 20 is greater than 9.</p>
          <p>
            This set of side lengths satisfies the Triangle Inequality Theorem.
          </p>
          <p style={{ color: "green", fontSize: "20px" }}>
            So, it is possible to have a triangle with the given side lengths.
          </p>
        </div>
        <div className="example2">
          <h2 className="highlight1">
            <strong>Example 2:</strong>
          </h2>
          <p>
            Check whether it is possible to have a triangle with the given side
            lengths. 4,8,15
          </p>
          <h3 className="highlight">Solution</h3>
          <p>Add any two sides and see if it is greater than the other side.</p>
          <p>The sum of 4 and 8 is 12 and 12 is less than 15 .</p>
          <p>The sum of 8 and 15 is 23 and 23 is greater than 4. </p>
          <p>The sum of 4 and 15 is 19 and 19 is less than 8.</p>
          <p>
            This set of side lengths doesn't satisfy the Triangle Inequality
            Theorem.
          </p>
          <p style={{ color: "red", fontSize: "20px" }}>
            So, it is not possible to have a triangle with the given side
            lengths.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Theory;
