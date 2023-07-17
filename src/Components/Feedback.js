import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const FormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
});

const FormField = styled(TextField)({
  marginBottom: "20px",
  width: "100%",
});

const SubmitButton = styled(Button)({
  marginTop: "10px",
});

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:");
    console.log(formData);
  };

  return (
    <FormContainer>
      <h2 style={{ paddingBottom: "20px" }}>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Name"
          variant="outlined"
          color="secondary"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormField
          label="Email"
          variant="outlined"
          color="secondary"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <SubmitButton
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ display: "block", margin: "0 auto" }}
        >
          Submit
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

export default Feedback;
