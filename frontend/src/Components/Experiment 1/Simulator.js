import React, { useState } from "react";

function Simulator() {
  const [side, setSide] = useState({ side1: "", side2: "", side3: "" });
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
    sides.sort(function (a, b) {
      return a - b;
    });
    var halfPerimeter = (_side_1 + _side_2 + _side_3) / 2;
    var area = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - _side_1) *
        (halfPerimeter - _side_2) *
        (halfPerimeter - _side_3)
    );
    var height = ((2 * area) / sides[2]).toPrecision(5);
    var slopeOfBase = Math.sqrt(Math.pow(sides[0], 2) - Math.pow(height, 2));

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
      "b = " + sides[0] + " cm",
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
    </div>
  );
}
export default Simulator;
