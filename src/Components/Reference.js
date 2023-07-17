import React from "react";
import { styled } from "@mui/material/styles";

const ReferencesContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
});

const LinkList = styled("ul")({
  listStyleType: "none",
  padding: 0,
});

const ReferenceLink = styled("a")({
  display: "block",
  padding: "10px",
  color: "#2196F3",
  textDecoration: "none",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
});

const ReferencesComponent = () => {
  return (
    <ReferencesContainer>
      <h2>References</h2>
      <LinkList>
        <li>
          <ReferenceLink
            href="https://en.wikipedia.org/wiki/Triangle_inequality"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wikipedia - Triangle Inequality Theorem
          </ReferenceLink>
        </li>
        <li>
          <ReferenceLink
            href="https://mathworld.wolfram.com/TriangleInequality.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wolfram MathWorld - Triangle Inequality
          </ReferenceLink>
        </li>
        <li>
          <ReferenceLink
            href="https://byjus.com/maths/triangle-inequality-theorem/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BYJU'S- Triangle Inequality Theorem
          </ReferenceLink>
        </li>
        <li>
          <ReferenceLink
            href="https://www.youtube.com/watch?v=Fy3OkZHX7LE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Triangle Inequality Theorem - BodhaGuru.com
          </ReferenceLink>
        </li>
      </LinkList>
    </ReferencesContainer>
  );
};

export default ReferencesComponent;
