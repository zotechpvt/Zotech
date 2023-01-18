import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { bgcolor, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Storage } from "../firebase/Firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const EmpForm = (props) => {
  const [fileUpload, setFileUpload] = useState(null);
  const [UserData, SetUserData] = useState({
    Name: "",
    Number: "",
    Email: "",
    Message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //validaton
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]=\.[^\s@]{2,}$/i;
    const regexNumber = /\b([0-9]|10)\b /;
    if (!values.Name) {
      errors.Name = "*Name is required";
    }
    if (!values.Email) {
      errors.Email = "*email is required";
    } else if (!regex.test(values.email)) {
      errors.Email = "This is not the valid email format";
    }
    if (!values.Number) {
      errors.Number = "*Number is required";
    } else if (!regexNumber.test(values.Number)) {
      errors.Number = "This is not the valid Number format";
    }
    if (!values.Message) {
      errors.Message = "*Introduction is required";
    }
    return errors;
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(UserData);
    }
  }, [formErrors]);

  //onchange
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    SetUserData({ ...UserData, [name]: value });
  };

  //onsubmit
  const postdata = async (event) => {
    event.preventDefault();
    setFormErrors(validate(UserData));
    setIsSubmit(true);
    const { Name, Number, Email, Message } = UserData;
    if (Name && Number && Email && Message && fileUpload !== null) {
      const res = await fetch(
        "https://zotech-c2a39-default-rtdb.firebaseio.com//userDataRecords.json",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            Number,
            Email,
            Message,
          }),
        }
      );
      if (res) {
        SetUserData({
          Name: "",
          Number: "",
          Email: "",
          Message: "",
        });
        toast.success("Data stored successfully");
      } else {
        toast.warn("Please Fill the data");
      }
    } else {
      toast.warn("Please Fill the data");
    }

    if (fileUpload == null) return;
    const fileRef = ref(Storage, `files/${fileUpload.name + v4()}`); //file uploading function
    uploadBytes(fileRef, fileUpload).then(() => {
      //  event.target.reset();
      setFileUpload("");
    });
  };

  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    setFileUpload(event.target.files[0]);
  };
  console.log(fileUpload);

  return (
    <div>
      <Container sx={{ marginTop: "100px" }} id="form">
        <Typography
          variant="h3"
          color="black"
          align="center"
          sx={{ paddingTop: "100px" }}
          data-aos="zoom-out"
        >
          Apply Now
        </Typography>
      </Container>
      <Card
        sx={{
          margin: "auto",
          marginTop: "50px",
          width: "70%",
          padding: "10px",
          border: "3px solid #1c1c1c",
        }}
      >
        <CardContent>
          <form>
            <Grid container>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Name"
                  placeholder="Enter Your  Name"
                  variant="outlined"
                  name="Name"
                  value={UserData.Name}
                  onChange={postUserData}
                  required
                  fullWidth
                />
              </Grid>
              <Typography style={{ color: "red", fontWeight: "bold" }}>
                {formErrors.Name}
              </Typography>

              <Grid item xs={12} sm={12} mt={2}>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter Your Email"
                  variant="outlined"
                  name="Email"
                  value={UserData.Email}
                  onChange={postUserData}
                  required
                  fullWidth
                />
              </Grid>
              <Typography style={{ color: "red", fontWeight: "bold" }}>
                {formErrors.Email}
              </Typography>

              <Grid item xs={12} sm={12} mt={2}>
                <TextField
                  type="number"
                  label="Contact Number"
                  placeholder="Enter Your Number"
                  variant="outlined"
                  name="Number"
                  value={UserData.Number}
                  onChange={postUserData}
                  required
                  fullWidth
                />
              </Grid>
              <Typography style={{ color: "red", fontWeight: "bold" }}>
                {formErrors.Number}
              </Typography>

              <Grid item xs={12} sm={12} mt={2}>
                <TextField
                  type="text"
                  label="Introduction"
                  placeholder="Brief About Yourself"
                  variant="outlined"
                  name="Message"
                  value={UserData.Message}
                  onChange={postUserData}
                  multiline
                  rows={4}
                  required
                  fullWidth
                />
              </Grid>
              <Typography style={{ color: "red", fontWeight: "bold" }}>
                {formErrors.Message}
              </Typography>

              <Button
                onClick={handleClick}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  cursor: "pointer",
                  marginTop: "10px",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "#fff",
                  },
                }}
              >
                Upload a file
              </Button>

              <Grid item xs={12} md={4} sm={6} mt={2}>
                <Container>
                  <Typography>{fileUpload?.name}</Typography>
                </Container>
              </Grid>

              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                accept=".pdf,.doc,.docx,.xml,"
                style={{ display: "none" }}
              />
              <Grid item xs={12} sm={12} mt={2}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  fullWidth
                  onClick={postdata}
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    cursor: "pointer",
                    marginTop: "10px",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "#fff",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmpForm;
