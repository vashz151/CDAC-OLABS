import React, { useState } from "react";
import { Button } from "@mui/material";
import "../CSS/prod.css";
function Simulator() {
  const [side, setSide] = useState({
    side1: "",
    side2: "",
    side3: "",
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
    var slopeOfBase = Math.sqrt(Math.pow(sides[0], 2) - Math.pow(height, 2));
    //arc cos function
    var angle1 = Math.acos(
      (Math.pow(side.side2, 2) +
        Math.pow(side.side3, 2) -
        Math.pow(side.side1, 2)) /
        (2 * side.side2 * side.side3)
    );
    var angle2 = Math.acos(
      (Math.pow(side.side1, 2) +
        Math.pow(side.side3, 2) -
        Math.pow(side.side2, 2)) /
        (2 * side.side1 * side.side3)
    );
    var angle3 = Math.PI - angle1 - angle2;
    //convert to degrees
    angle1 = (angle1 * 180) / Math.PI;
    angle2 = (angle2 * 180) / Math.PI;
    angle3 = (angle3 * 180) / Math.PI;
    //write angles in id angle1,angle2,angle3
    document.getElementById("angle1").innerHTML = angle1.toPrecision(5);
    document.getElementById("angle2").innerHTML = angle2.toPrecision(5);
    document.getElementById("angle3").innerHTML = angle3.toPrecision(5);
    //write sides
    document.getElementById("side1").innerHTML = side.side1;
    document.getElementById("side2").innerHTML = side.side2;
    document.getElementById("side3").innerHTML = side.side3;
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
    //write name of vertices at each vertex
    ctx.fillText(
      "A",
      canvasSize[0] / 2 - 0.5 * sides[2] * factor - 15,
      canvasSize[1] / 2 + 0.5 * height * factor
    );
    ctx.fillText(
      "B",
      canvasSize[0] / 2 + 0.5 * sides[2] * factor + 15,
      canvasSize[1] / 2 + 0.5 * height * factor
    );
    ctx.fillText(
      "C",
      canvasSize[0] / 2 + 30,
      canvasSize[1] / 2 - 0.5 * height * factor - 15
    );
    ctx.stroke();
    ctx.fillText(
      "c = " + sides[2] + " cm",
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
      "a = " + sides[0] + " cm",
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
      "b = " + sides[1] + " cm",
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
      <label className="highlight1" htmlFor="side1">
        Side1:{" "}
      </label>
      <input
        type="number"
        placeholder="Enter side 1"
        style={{
          padding: "5px",
          borderRadius: "5px",
        }}
        value={side.side1}
        name="side1"
        onChange={handleChange}
      />
      <br />
      <br />
      <label className="highlight1" htmlFor="side2">
        Side2:{" "}
      </label>
      <input
        type="number"
        placeholder="Enter side 2"
        value={side.side2}
        name="side2"
        onChange={handleChange}
        style={{
          padding: "5px",
          borderRadius: "5px",
        }}
      />
      <br />
      <br />
      <label className="highlight1" htmlFor="side3">
        Side3:{" "}
      </label>
      <input
        type="number"
        placeholder="Enter side 3"
        value={side.side3}
        name="side3"
        onChange={handleChange}
        style={{
          padding: "5px",
          borderRadius: "5px",
        }}
      />
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={drawTriangle}
        style={{ textAlign: "center", margin: "20px" }}
      >
        Draw
      </Button>
      <div style={{ paddingTop: "20px" }}>
        <canvas
          id="myCanvas"
          width="500"
          height="500"
          style={{ border: "2px solid white" }}
          className="can"
        />
        <table>
          <tbody>
            <tr>
              <th>Side A</th>
              <td id="side1"></td>
            </tr>
            <tr>
              <th>Side B</th>
              <td id="side2"></td>
            </tr>
            <tr>
              <th>Side C</th>
              <td id="side3"></td>
            </tr>
            <tr>
              <th>Angle A</th>
              <td id="angle1"></td>
            </tr>
            <tr>
              <th>Angle B</th>
              <td id="angle2"></td>
            </tr>
            <tr>
              <th>Angle C</th>
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
          </tbody>
        </table>
      </div>

      <p style={{ clear: "both", fontSize: "20px" }}>
        A triangle is a geometric shape that has three sides and three angles.
        When constructing a triangle the length of the sides can be chosen
        freely as long as none of the sides are longer than the sum of the other
        two. The sum of all angles in a triangle is always 180°.
      </p>
      <p>
        The base is one of the triangle's three sides. The height is the line
        that you get if you draw a perpendicular line from the base to the
        opposite corner. Note that the tool on this page uses b as base.
      </p>
    </div>
  );
}
export default Simulator;
