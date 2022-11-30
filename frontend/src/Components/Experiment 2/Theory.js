import React from "react";
import fig1 from "../../Images/Picture1.png";
import fig2 from "../../Images/Picture2.png";
import fig3 from "../../Images/Picture3.png";
import "../../CSS/fig.css";

const Theory = () => {
  return (
    <div style={{ fontSize: 20 }}>
      <h2>Objective:</h2>
      <p>
        To prove that if two sides of a triangle are equal, then the angles
        opposite to the same two sides are also equal.
      </p>
      <h2>Introduction:</h2>
      <p>
        The lengths of two sides in a triangle can be equal. It is possible only
        in the case of both equilateral triangle and isosceles triangle.
      </p>
      <p>
        Due to the equality property of two sides in the triangle, the angles
        that are opposite to them are also equal geometrically. This theorem can
        also be proved in geometry on the basis of symmetry property.
      </p>
      <p>
        Therefore, it is cleared that the angles opposite to the two sides of
        equal length are equal in a triangle.
        <br />
      </p>
      <figure>
        <img src="https://www.sarthaks.com/?qa=blob&qa_blobid=7782098993466150360" />
        <figcaption>Fig.1: Triangle</figcaption>
      </figure>
      <h3>Types of Triangles:</h3>
      <ol type="a">
        <li> Classification according to Side Lengths:</li>
        <ol style={{ display: "inlineBlock", clear: "both" }}>
          <li>Equilateral Triangle</li>
          <li>Isosceles Triangle</li>
          <li>Scalene Triangle</li>
        </ol>
        <figure>
          <img src={fig2} alt="Based on Side Lengths" />
          <figcaption>Fig.2: Based on Side Lengths</figcaption>
        </figure>
        <li>Classification according to Angles:</li>
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
          <strong>Example:</strong>
        </h2>
        <p>
          This property of the triangle can be proved geometrically by
          constructing a triangle but the lengths of any two sides of the
          triangle should be equal.
        </p>
        <p>
          <figure>
            <img src="https://www.mathdoubts.com/cimgs/triangle/isosceles/example-equal-opposite-angles-sides.png" />
          </figure>
          <p>
            Take ruler and draw a straight line{" "}
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mover>
                <mrow>
                  <mi>X</mi>
                  <mi>Y</mi>
                </mrow>
                <mo accent="true">&#x2015;</mo>
              </mover>
            </math>{" "}
            of length horizontally.
          </p>
          <p>
            Use compass and set distance between needle point and pencil point
            to 6 cm. Draw an arc from point X and also draw another arc from
            point Y but the arcs should be intersected. The intersecting point
            of both arcs is Z.
          </p>
          <p>
            Join points X and Z and also join points Y and Z by a straight line
            using ruler. Thus, the Triangle XYZ is constructed geometrically.
          </p>
          <p>
            Angle XYZ and Angle YXZ are opposite angles of the equal length
            sides{" "}
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mover>
                <mrow>
                  <mi>X</mi>
                  <mi>Z</mi>
                </mrow>
                <mo accent="true">&#x2015;</mo>
              </mover>
            </math>
            and{" "}
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mover>
                <mrow>
                  <mi>Y</mi>
                  <mi>Z</mi>
                </mrow>
                <mo accent="true">&#x2015;</mo>
              </mover>
            </math>{" "}
            respectively. Now, measure the angles XYZ and YXZ by using
            protractor.
          </p>
          <p>
            You practically observe that the angle XYZ and angle YXZ are equal
            and it is 48 degree geometrically. Therefore, the angles opposite to
            the two equal length sides are equal geometrically.
          </p>
        </p>
      </div>
    </div>
  );
};

export default Theory;
