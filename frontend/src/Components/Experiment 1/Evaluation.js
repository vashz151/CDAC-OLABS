import React from "react";
import "../../CSS/eval.css";
import t1q1o1 from "../../Images/t1q1o1.png";
import t1q1o2 from "../../Images/t1q1o2.png";
import t1q1o3 from "../../Images/t1q1o3.png";
import t1q1o4 from "../../Images/t1q1o4.png";
import t1q2 from "../../Images/t1q2.png";
import t1q3 from "../../Images/t1q3.png";
import t1q4 from "../../Images/t1q4.png";
import t1q5 from "../../Images/t1q5.png";
import t1q6 from "../../Images/t1q6.png";
import t1q7 from "../../Images/t1q7.png";
function Evaluation() {
  //setAnwers
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [viewAnswer, setViewAnswer] = React.useState(false);
  const questions = {
    question1: {
      text: "1. Which of the following figures does not represent a triangle?",
      img: "",
      options: [
        {
          id: 0,
          text: <img className="imgofeval" src={t1q1o1} alt="" />,
          isCorrect: true,
        },
        {
          id: 1,
          text: <img className="imgofeval" src={t1q1o2} alt="" />,
          isCorrect: false,
        },
        {
          id: 2,
          text: <img className="imgofeval" src={t1q1o3} alt="" />,
          isCorrect: false,
        },
        {
          id: 3,
          text: <img className="imgofeval" src={t1q1o4} alt="" />,
          isCorrect: false,
        },
      ],
      explanation: (
        <p>
          Answer: a<br />
          Explanation: Sum of any two sides of a triangle should be greater than
          the third side.
          <br />
          So, triangle with sides 3cm, 5cm, 9cm does not satisfy the condition.
          (3 + 5 = 8 &lt; 9).
          <br />
        </p>
      ),
    },
    question2: {
      text: "2. Which among the following statements are not correct?",
      img: t1q2,
      options: [
        { id: 4, text: "∠P is the largest angle", isCorrect: false },
        { id: 5, text: "∠R is the smallest angle", isCorrect: false },
        { id: 6, text: "∠P is the smallest angle", isCorrect: true },
        { id: 7, text: "∠P > ∠Q", isCorrect: false },
      ],
      explanation: (
        <p>
          Answer: c<br />
          Explanation: In a triangle, angle opposite to the longest side is
          largest and angle opposite to the shortest side is the smallest. So,
          in triangle PQR, QR is the longest side. Hence &ang;P is the largest
          angle. Similarly, QP is the shortest side. Hence &ang;R is the
          smallest angle. Therefore, &ang;P &gt; &ang;Q &gt; &ang;R.
          <br />
        </p>
      ),
    },
    question3: {
      text: "3. Identify the correct relation if x > y.",
      img: t1q3,
      options: [
        { id: 8, text: "AB < AC", isCorrect: false },
        { id: 9, text: "AB > AC", isCorrect: true },
        { id: 10, text: "AB < 2AC", isCorrect: false },
        { id: 11, text: "AB = AC", isCorrect: false },
      ],
      explanation: (
        <p>
          Answer: b<br />
          Explanation: Given that, x &gt; y.
          <br />
          From Figure, &ang;EBC + &ang;CBA = 180&deg;&emsp; (Linear Pair)
          <br />
          And &ang;CAD + &ang;CAB = 180&deg;&emsp; (Linear Pair)
          <br />
          So, &ang;EBC + &ang;CBA = &ang;CAD + &ang;CAB
          <br />
          &rArr; x + &ang;CBA = y + &ang;CAB
          <br />
          The above condition is valid only when &ang;CBA &lt; &ang;CAB as x
          &gt; y.
          <br />
          So, &ang;CBA &lt; &ang;CAB
          <br />
          &rArr; AC &lt; AB&emsp; (side opposite to larger angle is the longer
          side).
          <br />
        </p>
      ),
    },
    question4: {
      text: "4. Identify the correct relation if x : y : z = 1 : 3 : 5.",
      img: t1q4,
      options: [
        { id: 12, text: "BC > AB > AC", isCorrect: false },
        { id: 13, text: "AC < BC < AB", isCorrect: false },
        { id: 14, text: "BC > AC > AB", isCorrect: false },
        { id: 15, text: "BC < AC < AB", isCorrect: true },
      ],
      explanation: (
        <p>
          Answer: d<br />
          Explanation: x : y : z = 1 : 3 : 5<br />
          In &Delta;ABC, &ang;A + &ang;B + &ang;C = 180&deg;&emsp; (Angle sum
          property of triangle)
          <br />
          &rArr; x + y + z = 180&deg;
          <br />
          &rArr; k + 3k + 5k = 180&deg;
          <br />
          &rArr; k = 20&deg;
          <br />
          &ang;A = k = 20&deg;, &ang;B = 3k = 60&deg;, &ang;C = 5k = 100&deg;
          <br />
          Hence, &ang;A &lt; &ang;B &lt; &ang;C
          <br />
          So, BC &lt; AC &lt; AB as the side opposite to the largest angle is
          the longest and side opposite to smallest angle is the shortest.
          <br />
        </p>
      ),
    },
    question5: {
      text: "5. Which among the following relation is correct if AD = AC?",
      img: t1q5,
      options: [
        { id: 16, text: "AB < AD", isCorrect: false },
        { id: 17, text: "AB > AD", isCorrect: true },
        { id: 18, text: "AB = AD", isCorrect: false },
        { id: 19, text: "AB = ½ AD", isCorrect: false },
      ],
      explanation: (
        <p>
          Answer: b<br />
          Explanation: In &Delta;ACD, AD = AC
          <br />
          &rArr; &ang;ADC = &ang;ACD
          &ensp;&#8212;&#8212;&#8212;&#8212;&#8211;(i) (Angles opposite to equal
          sides are equal)
          <br />
          &rArr; &ang;ADC = &ang;ACB
          &ensp;&#8212;&#8212;&#8212;&#8212;&#8211;(ii)
          <br />
          Since, exterior angle of a triangle is greater than each of the
          interior opposite angle,
          <br />
          &ang;ADC &gt; &ang;ABD
          <br />
          &rArr; &ang;ACB &gt; &ang;ABC &emsp;(From equation ii)
          <br />
          &rArr; AB &gt; AC &emsp;(Side opposite to larger angle is the longer
          side in a triangle)
          <br />
          &rArr; AB &gt; AC&emsp; (AD = AC).
          <br />
        </p>
      ),
    },
    question6: {
      text: "6. Which among the following is the shortest?",
      img: t1q6,
      options: [
        {
          id: 20,
          text: (
            <span>
              PQ<sub>3</sub>
            </span>
          ),
          isCorrect: true,
        },
        {
          id: 21,
          text: (
            <span>
              PQ<sub>1</sub>
            </span>
          ),
          isCorrect: false,
        },
        {
          id: 22,
          text: (
            <span>
              PQ<sub>4</sub>
            </span>
          ),
          isCorrect: false,
        },
        {
          id: 23,
          text: (
            <span>
              PQ<sub>2</sub>
            </span>
          ),
          isCorrect: false,
        },
      ],
      explanation: (
        <p>
          Answer: a<br />
          Explanation: Among all the segments that can be drawn to a given line
          from a given point (not on the line), the perpendicular line segment
          is the shortest. Hence, PQ<sub>3</sub> which is perpendicular to line
          l is the shortest line segment.
          <br />
        </p>
      ),
    },
    question7: {
      text: "7. Which among the following relation holds true if AD, BE and DF are the altitudes of the triangle?",
      img: t1q7,
      options: [
        { id: 24, text: "AD + BE + CF > AB + BC + AC", isCorrect: false },
        { id: 25, text: "AD + BE + CF = AB + BC + AC", isCorrect: false },
        { id: 26, text: "AD + BE + CF < AB + BC + AC", isCorrect: true },
        { id: 27, text: "AD + BE + CF > 2(AB + BC + AC)", isCorrect: false },
      ],
      explanation: (
        <p>
          Answer: c<br />
          Explanation: Among all the segments that can be drawn to a given line
          from a given point (not on the line), the perpendicular line segment
          is the shortest.
          <br />
          So, In &Delta;ABC, AD &perp; BC &rArr; AB &gt; AD and AC &gt; AD
          <br />
          &rArr; AB + AC &gt; 2AD &#8212;&#8212;&#8212;&#8211;(i)
          <br />
          BE &perp; AC &rArr; BC &gt; BE and BA &gt; BE
          <br />
          &rArr; BC + BA &gt; 2BE &#8212;&#8212;&#8212;&#8211;(ii)
          <br />
          CF &perp; AB &rArr; CA &gt; CF and CB &gt; CF
          <br />
          &rArr; CA + CB &gt; 2CF &#8212;&#8212;&#8212;&#8211;(iii)
          <br />
          Adding equation i, ii and iii, AB + AC + BC + BA + CA + CB &gt; 2AD +
          2BE + 2CF
          <br />
          &rArr; 2(AB + BC + AC) &gt; 2(AD + BE + CF)
          <br />
          &rArr; (AB + BC + AC) &gt; (AD + BE + CF).
          <br />
        </p>
      ),
    },
  };
  return (
    <div style={{ fontSize: 20 }}>

      {/* for each question in questions do the following */}
      {Object.keys(questions).map((question, y) => (
        <div key={y}>
          <h3>{questions[question].text}</h3>
          {questions[question].img ? (
            <img
              className="imgofeval"
              src={questions[question].img}
              alt="question"
            />
          ) : null}
          {questions[question].options.map((option) => {
            return (
              <div key={option.id}>
                <input
                  type="radio"
                  disabled={showAnswer ? true : false}
                  name={question}
                  id={option.id}
                  value={option.text}
                />
                <label htmlFor={option.id} name={option.id}>
                  {" "}
                  {option.text}
                </label>
                <br />
              </div>
            );
          })}
          <button
            onClick={() => {
              viewAnswer ? setViewAnswer(false) : setViewAnswer(true);
            }}
            style={
              showAnswer ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            View Answer
          </button>
          {viewAnswer ? questions[question].explanation : null}
        </div>
      ))}
      {/* submit button which will tell the correct ans from each question */}
      <button
        onClick={() => {
          setShowAnswer(true);

          //mark all correct options as green
          for (let i = 0; i < Object.keys(questions).length; i++) {
            questions[Object.keys(questions)[i]].options.forEach((option) => {
              if (option.isCorrect) {
                //change color of label with option id to green
                const elements = Array.from(
                  document.getElementsByName(option.id)
                );
                elements.forEach((element) => {
                  element.style.backgroundColor = "green";
                });
              }
              //coloring red the wrong options marked by user
              else {
                if (document.getElementById(option.id).checked) {
                  const elements = Array.from(
                    document.getElementsByName(option.id)
                  );
                  elements.forEach((element) => {
                    element.style.backgroundColor = "red";
                  });
                }
              }
            });
          }
        }}
      >
        Submit
      </button>

    </div>
  );
}

export default Evaluation;
