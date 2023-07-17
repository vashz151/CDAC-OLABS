import React from "react";
import fig5 from "../../Images/Picture5.png";
import "../../CSS/prod.css";
function Procedure() {
  return (
    <div>
      <div className="proof" style={{ display: "inline-block", float: "left" }}>
        <h1>Proof</h1>
        <h3>Given</h3>
        <p>A triangle ABC</p>
        <h3>To Prove</h3>
        <p>AC+BC &gt;AB</p>
        <h3>Construction</h3>
        <p>Extend AC to a point D such that CD=CB. Join BD.</p>
        <h3>Proof</h3>
        <p>In triangle BCD, we have</p>
        <p> BD=DC.</p>
        <p>
          Hence, &#8736; CDB= &#8736;CBD (because equal sides of a triangle have
          equal opposite angles)
        </p>
        Now since &#8736; ABD &gt; &#8736;CBD, we have
        <p> &#8736; ABD &gt; &#8736; CDB</p>
        <p> Now in ∆ ABD, we have</p>
        <p>
          Hence we have AD&gt;AB (because the side opposite to larger angle is
          longer).
        </p>
        <p>Now in ∆ ACD, we have</p>
        <p>AD=AC+CD</p>
        <p> Since CD=BC, we have</p>
        <p>AD=AC+BC</p>
        <p>Now since AD&gt;AB, we have</p>
        <p>Therefore, AC+BC&gt;AB</p>
        <p>
          <strong>
            Hence the sum of two sides of a triangle is larger than the third
            side.
          </strong>
        </p>
      </div>
      <figure
        className="fig"
        style={{ display: "inline-block", float: "left" }}
      >
        <img src={fig5} alt="Triangle" style={{ width: "100%" }} />
        <figcaption style={{ clear: "both" }}>Figure 5</figcaption>
      </figure>
      <div style={{clear:"both"}}>
        <h3>Note</h3>
        <ul>
          <li>
            The above theorem is necessary for the existence of a triangle and
            is also sufficient for the existence of the triangle, i.e. if the
            sum of any two sides is greater than the third side, then the
            triangle with the given sides exists and if there exists a triangle
            then the sum of its any two sides is always greater than the third
            side. It is also known as the triangle inequality.
          </li>
          <li>
            This proof is based on the fact that the side opposite to the larger
            angle is longer. This is also a very important fact in geometry.
          </li>
          <li>
            The above inequality is strict, i.e. We cannot have a triangle in
            which the sum of sides is even equal to the third side.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Procedure;
