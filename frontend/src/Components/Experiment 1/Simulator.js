import React, { useState } from "react";
import "../../CSS/prod.css";
function Simulator() {
  const [side, setSide] = useState({
    side1: "",
    side2: "",
    side3: "",
    angle1: "",
    angle2: "",
    angle3: "",
  });
  var area;
  var halfPerimeter;
  var height;
  const handleChange = (e) => {
    const siden = e.target.name;
    const len = e.target.value;
    setSide((prev) => {
      return { ...prev, [siden]: len };
    });
  };
  const drawTriangle = () => {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.font = "20px Times New Roman";
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "gold";
    ctx.textAlign = "center";
    ctx.strokeStyle = "gold";
    var canvasSize = [parseInt(c.width), parseInt(c.height)];
    var _side_1 = parseInt(side.side1);
    var _side_2 = parseInt(side.side2);
    var _side_3 = parseInt(side.side3);
    var factor = 37.7952755906;
    if (_side_3 >= _side_1 + _side_2) {
      console.log("hello");
      ctx.moveTo(50, 100);
      ctx.lineTo(100, 100 + _side_1 * factor);
      ctx.lineTo(100 + _side_2 * factor, 100 + _side_2 * factor);
      ctx.lineTo(50, 50 - _side_3 * factor);
      ctx.stroke();
      ctx.fillText(
        "Triangle not possible",
        canvasSize[0] / 2,
        (3 * canvasSize[1]) / 4
      );
    }
    var sides = [_side_1, _side_2, _side_3];
    //sort
    sides.sort(function (a, b) {
      return a - b;
    });
    console.log(sides);
    halfPerimeter = (_side_1 + _side_2 + _side_3) / 2;
    area = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - _side_1) *
        (halfPerimeter - _side_2) *
        (halfPerimeter - _side_3)
    );
    //write area in id area
    document.getElementById("area").innerHTML = area;
    document.getElementById("perimeter").innerHTML = halfPerimeter * 2;
    height = ((2 * area) / sides[2]).toPrecision(5);
    document.getElementById("height").innerHTML = height;
    var slopeOfBase = Math.sqrt(Math.pow(side.side1, 2) - Math.pow(height, 2));
    //find angles as side.angle in terms of atan side.angle
    var angle1 = Math.atan(height / slopeOfBase);
    var angle2 = Math.atan(slopeOfBase / height);
    var angle3 = Math.PI - angle1 - angle2;
    //convert to degrees
    angle1 = (angle1 * 180) / Math.PI;
    angle2 = (angle2 * 180) / Math.PI;
    angle3 = (angle3 * 180) / Math.PI;
    //write angles in id angle1,angle2,angle3
    document.getElementById("angle1").innerHTML = angle1.toPrecision(5);
    document.getElementById("angle2").innerHTML = angle2.toPrecision(5);
    document.getElementById("angle3").innerHTML = angle3.toPrecision(5);
    ctx.beginPath();
    ctx.setLineDash([]);
    ctx.moveTo(
      canvasSize[0] / 2 - 0.5 * sides[2] * factor,
      canvasSize[1] / 2 + 0.5 * height * factor
    );
    ctx.lineTo(
      canvasSize[0] / 2 + 0.5 * sides[2] * factor,
      canvasSize[1] / 2 + 0.5 * height * factor
    );
    ctx.fillText(
      "b = " + sides[2] + " cm",
      (canvasSize[0] / 2 -
        0.5 * sides[2] * factor +
        canvasSize[0] / 2 +
        0.5 * sides[2] * factor) /
        2,
      (canvasSize[1] / 2 +
        0.5 * height * factor +
        canvasSize[1] / 2 +
        0.5 * height * factor) /
        2 +
        15
    );
    ctx.lineTo(
      canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor,
      canvasSize[1] / 2 - 0.5 * height * factor
    );
    ctx.fillText(
      "c = " + sides[0] + " cm",
      (canvasSize[0] / 2 +
        0.5 * sides[2] * factor +
        canvasSize[0] / 2 +
        0.5 * sides[2] * factor -
        slopeOfBase * factor) /
        2 +
        50,
      (canvasSize[1] / 2 +
        0.5 * height * factor +
        canvasSize[1] / 2 -
        0.5 * height * factor) /
        2
    );
    ctx.lineTo(
      canvasSize[0] / 2 - 0.5 * sides[2] * factor,
      canvasSize[1] / 2 + 0.5 * height * factor
    );
    ctx.fillText(
      "a = " + sides[1] + " cm",
      (canvasSize[0] / 2 +
        0.5 * sides[2] * factor -
        slopeOfBase * factor +
        canvasSize[0] / 2 -
        0.5 * sides[2] * factor) /
        2 -
        50,
      (canvasSize[1] / 2 -
        0.5 * height * factor +
        canvasSize[1] / 2 +
        0.5 * height * factor) /
        2
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.setLineDash([5]);
    ctx.moveTo(
      canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor,
      canvasSize[1] / 2 - 0.5 * height * factor
    );
    ctx.lineTo(
      canvasSize[0] / 2 + 0.5 * sides[2] * factor - slopeOfBase * factor,
      canvasSize[1] / 2 + 0.5 * height * factor
    );
    ctx.fillText(
      "h = " + height + " cm",
      (canvasSize[0] / 2 +
        0.5 * sides[2] * factor -
        slopeOfBase * factor +
        canvasSize[0] / 2 +
        0.5 * sides[2] * factor -
        slopeOfBase * factor) /
        2,
      (canvasSize[1] / 2 -
        0.5 * height * factor +
        canvasSize[1] / 2 +
        0.5 * height * factor) /
        2 +
        20
    );

    ctx.stroke();
  };
  return (
    <div>
      <label htmlFor="side1">Side1: </label>
      <input
        type="number"
        placeholder="Enter side 1"
        value={side.side1}
        name="side1"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="side2">Side2: </label>
      <input
        type="number"
        placeholder="Enter side 2"
        value={side.side2}
        name="side2"
        onChange={handleChange}
      />
      <br />
      <br />
      <label htmlFor="side3">Side3: </label>
      <input
        type="number"
        placeholder="Enter side 3"
        value={side.side3}
        name="side3"
        onChange={handleChange}
      />
      <br />
      <button
        onClick={drawTriangle}
        style={{ textAlign: "center", margin: "20px" }}
      >
        Draw
      </button>
      <div style={{ paddingTop: "20px" }}>
        <canvas
          id="myCanvas"
          width="500"
          height="500"
          style={{ border: "2px solid white" }}
        />
      </div>

      <table
        style={{
          marginTop: "20px",
          textAlign: "left",
        }}
      >
        <tr>
          <th>Side 1</th>
          <td>{side.side1}</td>
        </tr>
        <tr>
          <th>Side 2</th>
          <td>{side.side2}</td>
        </tr>
        <tr>
          <th>Side 3</th>
          <td>{side.side3}</td>
        </tr>
        <tr>
          <th>Angle 1</th>
          <td id="angle1"></td>
        </tr>
        <tr>
          <th>Angle 2</th>
          <td id="angle2"></td>
        </tr>
        <tr>
          <th>Angle 3</th>
          <td id="angle3"></td>
        </tr>
        <tr>
          <th>Height</th>
          <td id="height"></td>
        </tr>
        <tr>
          <th>Perimeter</th>
          <td id="perimeter"></td>
        </tr>
        <tr>
          <th>Area</th>
          <td id="area"></td>
        </tr>
      </table>
      <div class="box">
        <p>
          A triangle is a geometric shape that has three sides and three angles.
          When constructing a triangle the length of the sides can be chosen
          freely as long as none of the sides are longer than the sum of the
          other two. The sum of all angles in a triangle is always 180°.
        </p>
        <p>
          The area of a triangle can most easily be calculated when the{" "}
          <i>base</i> and <i>height</i> is known.
        </p>
        <div class="tab">
          Area ={" "}
          <div class="div">
            base<span class="mul">×</span>height
            <hr />2
          </div>
        </div>
        <p>
          The base is one of the triangle's three sides. The height is the line
          that you get if you draw a perpendicular line from the base to the
          opposite corner. Note that the tool on this page uses b as base.
        </p>
        <p>Triangles are often categorised based on their appearance.</p>
        <table class="table">
          <tr>
            <td>Acute</td>
            <td>All angles are less than 90°.</td>
          </tr>
          <tr>
            <td>Right-angled</td>
            <td>One angle is exactly 90°.</td>
          </tr>
          <tr>
            <td>Obtuse</td>
            <td>One angle is bigger than 90°.</td>
          </tr>
          <tr>
            <td>Isosceles</td>
            <td>Two sides have the same length.</td>
          </tr>
          <tr>
            <td>Equilateral</td>
            <td>All sides have the same length.</td>
          </tr>
        </table>
        <p>
          A triangle is either acute, right-angled, or obtuse. It is impossible
          for a triangle to be more than one of these at the same time. An
          equilateral triangle is always acute.
        </p>
        <p>
          Knowing the type of triangle can sometimes be helpful when trying to
          figure out other information about a triangle. When using this tool it
          is therefore important that you specify if the triangle is isosceles
          (by using the check box) or right-angled (by specifying one of the
          angles as 90°).
        </p>
      </div>
    </div>
  );
}
export default Simulator;
