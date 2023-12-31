import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
import Otp from "./Components/otp";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  ".net",
  "react.js",
  "angular.js",
  "Mysql",
  "view.js",
  "next.js",
  "javascript",
  "Php",
  "c++",
  "c#",
];

const ITEM_HEIGHTS = 48;
const ITEM_PADDING_TOPS = 8;
const MenuPropss = {
  PaperProps1: {
    style: {
      maxHeight: ITEM_HEIGHTS * 4.5 + ITEM_PADDING_TOPS,
      width: 250,
    },
  },
};

const names1 = ["IT/Computers-Software", "Mechanical"];

const ITEM_HEIGHTSS = 48;
const ITEM_PADDING_TOPSS = 8;
const MenuPropsss = {
  PaperProps2: {
    style: {
      maxHeight: ITEM_HEIGHTSS * 4.5 + ITEM_PADDING_TOPSS,
      width: 250,
    },
  },
};

const ITEM_HEIGHTSSS = 48;
const ITEM_PADDING_TOPSSS = 8;
const MenuPropssss = {
  PaperProps2: {
    style: {
      maxHeight: ITEM_HEIGHTSS * 4.5 + ITEM_PADDING_TOPSS,
      width: 250,
    },
  },
};

const names2 = [
  "IT/Computers-Software Development",
  "Mechanical-Engineer-other",
  "Electrical-Engineer-other",
];

const ITEM_HEIGHTSSSSS = 48;
const ITEM_PADDING_TOPSSSSS = 8;
const MenuPropssssss = {
  PaperProps4: {
    style: {
      maxHeight: ITEM_HEIGHTSSSSS * 4.5 + ITEM_PADDING_TOPSSSSS,
      width: 250,
    },
  },
};

const ITEM_HEIGHTSSSS = 48;
const ITEM_PADDING_TOPSSSS = 8;
const MenuPropsssss = {
  PaperProps3: {
    style: {
      maxHeight: ITEM_HEIGHTSSSS * 4.5 + ITEM_PADDING_TOPSSSS,
      width: 250,
    },
  },
};

const names3 = [
  "Developer",
  "Database-Admistrator",
  "Designer",
  "Hr",
  "Business anaylst",
];

const names4 = [
  "kangra-Himachal",
  "Mohali",
  "Chandigarh",
  "Delhi",
  "Mumbai",
  "Hydrabaad",
  "banglore",
  "Chennai",
  "UP",
  "Pathankot",
  "J&K",
];

export default function Register() {

const navigate =useNavigate();

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const [personName, setPersonName] = React.useState([]);
  const [personName1, setPersonName1] = React.useState([]);
  const [personName2, setPersonName2] = React.useState([]);
  const [personName3, setPersonName3] = React.useState([]);
  const [personName4, setPersonName4] = React.useState([]);

  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const handleChangePhoneNumber = (event) => {
    const {
      target: { value },
    } = event;

    // Remove any non-digit characters from the input
    const cleanedPhoneNumber = value.replace(/\D/g, "");

    // Check if the cleaned number starts with +91, if not, add it
    if (cleanedPhoneNumber.startsWith("91")) {
      setPhoneNumber("+91" + cleanedPhoneNumber.slice(2)); // Add +91 and slice the first 2 characters (91)
    } else if (!cleanedPhoneNumber.startsWith("+")) {
      setPhoneNumber("+91" + cleanedPhoneNumber); // Add +91 if the number doesn't start with +
    } else {
      setPhoneNumber(cleanedPhoneNumber); // Otherwise, set the cleaned number as it is
    }
  };

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName1(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName2(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange33 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName3(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange333 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName4(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;

    setExperience(
      // On autofill we get a stringified value.
      typeof value === "string" ? [value] : value // Wrap value in an array if it's not already an array
    );
  };

  const handleChange5 = (event) => {
    const {
      target: { value },
    } = event;
    setEducationtype(
      // On autofill we get a stringified value.
      typeof value === "string" ? [value] : value // Wrap value in an array if it's not already an array
    );
  };

  const [otp, setOtp] = useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(
      // On autofill we get a stringified value.
      typeof value === "string" ? [value] : value // Wrap value in an array if it's not already an array
    );
  };

  const [location, setLocation] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [activeStep, setActiveStep] = React.useState(0);
  const [showPreviousFields, setShowPreviousFields] = React.useState(true);

  const [imageFile, setimageFile] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [gender, setGender] = React.useState("female");

  const [highestQualification, setHighestQualification] = React.useState("");
  const [fieldOfStudy, setFieldOfStudy] = React.useState("");
  const [university, setUniversity] = React.useState("");
  const [graduationYear, setGraduationYear] = React.useState("");

  const [experience, setExperience] = React.useState([]);
  const [educationtype, setEducationtype] = React.useState([]);

  const handleChangeFile = (event) => {
    const file = event.target.files[0]; // Get the selected file from the event
    setimageFile(file); // Set the selected file in the state
  };

  const [formErrors, setFormErrors] = React.useState({
    resumeError: false,
    fullNameError: false,
    emailError: false,
    passwordError: false,
    mobileError: false,
    genderError: false,
    experienceError: false,
  });

  const [jobPreference, setJobPreference] = React.useState({
    keySkills: [],
    industry: [],
    department: [],
    preferredRole: [],
  });

  const steps = [
    "Basic Information",
    "Professional Details",
    "Education Details",
    "Job Preference",
   
  ];

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    const errors = {};
    let isValid = true;

    if (activeStep === 0) {
      // Check required fields for Personal Information step
      // if (!imageFile) {
      //   errors.resumeError = true;
      //   isValid = false;
      // }
      if (!name) {
        errors.fullNameError = true;
        isValid = false;
      }
      if (!email) {
        errors.emailError = true;
        isValid = false;
      }
      if (!password) {
        errors.passwordError = true;
        isValid = false;
      }
      if (!phoneNumber) {
        errors.mobileError = true;
        isValid = false;
      }
    } else if (activeStep === 1) {
      // Check required fields for Professional Details step
      if (!experience) {
        errors.experienceError = true;
        isValid = false;
      }
    } else if (activeStep === 2) {
      // Check required fields for Education Details step
    } else if (activeStep === 3) {
      // Check required fields for Job Preference step
    } else if (activeStep === 4) {
      // Check required fields for Verification Center step
    
    }

    if (isValid) {
      if (activeStep === steps.length - 1) {
        // Last step, submit the form
        // Add your form submission logic here
        handleClose();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setShowPreviousFields(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const handleSubmit = async () => {
    try {
      debugger;
      const formData = new FormData();
      formData.append("ImageFile", imageFile);
      formData.append("Name", name);
      formData.append("Email", email);
      formData.append("Password", password);
      formData.append("PhoneNumber", phoneNumber);
      localStorage.setItem("PhoneNumber", phoneNumber)
      formData.append("Gender", gender);
      //Experince Fields
      formData.append("Experience", experience);
      formData.append("CurrentLocation", location);

      //Education Details

      formData.append("HighestQualification", highestQualification);
      formData.append("SelectYourField", fieldOfStudy);
      formData.append("University_Insitute", university);
      formData.append("YearOfGraduation", graduationYear);
      formData.append("EducationType", educationtype);

      // Job preference
      formData.append("KeySkills", personName.join(","));
      formData.append("Industry", personName1.join(","));
      formData.append("Department", personName2.join(","));
      formData.append("PrefrredRole", personName3.join(","));
      formData.append("PrefrredLocation", personName4.join(","));

      // Append other relevant fields from the form

      const response = await axios.post(
        "https://localhost:7177/api/Regsiter/api/RegisterUser",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          
        }
        
      );

      console.log(response.data);
      if(response.status===200){
        debugger;
          handleClose();
          
          Swal.fire({
            title: "Registration Completed Successfully",
            icon: "success",
       
          });
          navigate('/Otp')
    
      }
  
    
    } catch (error) {
     
      handleClose();
      navigate('/Otp')
      if (error.response) {
        handleClose();
        console.error("Response Error:", error.response.data);
        // Handle validation errors
        if (error.response.status === 400 && error.response.data.errors) {
          const validationErrors = error.response.data.errors;
          console.log(validationErrors);
          // Display the validation errors to the user or handle them appropriately
        }
      } else if (error.request) {
        console.error("Request Error:", error.request);
        // Handle request error
      } else {
        console.error("Error:", error.message);
        // Handle other errors
      }
    }
  };
  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <li onClick={handleClickOpen("paper")}>Register</li>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <span style={{ marginRight: "340px" }}>Sign Up</span>
          <a
            className="btn btn-primary"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google" />
          </a>
          <a
            className="btn btn-primary"
            style={{ backgroundColor: "#55acee", marginLeft: "10px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-primary"
            style={{ backgroundColor: "#3b5998", marginLeft: "10px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f" />
          </a>
        </DialogTitle>

        <DialogContent dividers={scroll === "paper"}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <br />

          {showPreviousFields ? (
            <>
              <br></br>
              <h4 className="text-primary ">Basic Information</h4>
              <p></p>
              <br></br>
              <TextField
                autoFocus
                margin="dense"
                id="Upload Resume"
                label="ImageFile"
                type="file"
                fullWidth
                variant="standard"
                // Update the value prop and add onChange event to handle file selection
                // The value prop should be an empty string or null; you can't set the value of a file input
                value={null}
                error={formErrors.resumeError}
                helperText={
                  formErrors.resumeError ? "Please upload a resume" : ""
                }
                onChange={handleChangeFile} // Call the new handleChangeFile function for file selection
              />
              <TextField
                autoFocus
                margin="dense"
                id="FullName"
                label="Full Name"
                type="text"
                fullWidth
                variant="standard"
                value={name}
                error={formErrors.fullNameError}
                helperText={
                  formErrors.fullNameError ? "Please enter your full name" : ""
                }
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="EmailId"
                label="Email ID"
                type="Email"
                fullWidth
                variant="standard"
                value={email}
                error={formErrors.emailError}
                helperText={
                  formErrors.emailError
                    ? "Please enter a valid email address"
                    : ""
                }
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="Password"
                label="Password"
                type="Password"
                fullWidth
                variant="standard"
                value={password}
                error={formErrors.passwordError}
                helperText={
                  formErrors.passwordError ? "Please enter a password" : ""
                }
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="Mobile Number"
                label="Mobile Number"
                type="tel" // Use type "tel" to indicate it's a telephone number
                fullWidth
                variant="standard"
                value={phoneNumber}
                error={formErrors.mobileError}
                helperText={
                  formErrors.mobileError
                    ? "Please enter a valid mobile number"
                    : ""
                }
                onChange={handleChangePhoneNumber} // Use the updated handleChangePhoneNumber function
              />
              <br></br> <br></br>
              <FormControl error={formErrors.genderError} component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-label="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
                {formErrors.genderError && (
                  <p style={{ color: "red", margin: "0" }}>
                    Please select your gender
                  </p>
                )}
              </FormControl>
            </>
          ) : (
            <>
              {activeStep === 1 && (
                <>
                  <br></br>
                  <h4 className="text-primary">Professional Details</h4>
                  <p>Help us understand you better</p>
                  <br></br>
                  <FormControl
                    error={formErrors.experienceError}
                    component="fieldset"
                  >
                    <FormLabel component="legend">Experience</FormLabel>
                    <RadioGroup
                      row
                      aria-label="experience"
                      name="Experience"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    >
                      <FormControlLabel
                        value="Fresher"
                        control={<Radio />}
                        label="I am Fresher"
                      />
                      <FormControlLabel
                        value="Experienced"
                        control={<Radio />}
                        label="I am Experienced"
                      />
                    </RadioGroup>
                    {formErrors.experienceError && (
                      <p style={{ color: "red", margin: "0" }}>
                        Please select your experience
                      </p>
                    )}
                  </FormControl>
                  <br></br>
                  <br></br>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Current location
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={location}
                        label="Current location"
                        onChange={handleChange}
                      >
                        <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                        <MenuItem value="Delhi">Delhi</MenuItem>
                        <MenuItem value="Himachal">Himachal</MenuItem>
                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                        <MenuItem value="Chennai">Chennai</MenuItem>
                        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </>
              )}

              {activeStep === 2 && (
                <>
                  <br></br>
                  <h4 className="text-primary">Education Details</h4>
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Highest Qualification
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={highestQualification}
                        label="Highest Qualification"
                        onChange={(e) =>
                          setHighestQualification(e.target.value)
                        }
                      >
                        <MenuItem value="10th">10th</MenuItem>
                        <MenuItem value="12th">12th</MenuItem>
                        <MenuItem value="Bca">Bca</MenuItem>
                        <MenuItem value="Btech">Btech</MenuItem>
                        <MenuItem value="llb">llb</MenuItem>
                        <MenuItem value="Phd">Phd</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select your field
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={fieldOfStudy}
                        label="Select your field"
                        onChange={(e) => setFieldOfStudy(e.target.value)}
                      >
                        <MenuItem value="Web Developer">Web Developer</MenuItem>
                        <MenuItem value="Web Designer">Web Designer</MenuItem>
                        <MenuItem value="Business Analyst">
                          Business Analyst
                        </MenuItem>
                        <MenuItem value="Teacher">Teacher</MenuItem>
                        <MenuItem value="Doctor">Doctor</MenuItem>
                        <MenuItem value="Doctor">Doctor</MenuItem>
                        <MenuItem value="Human Resurces">
                          Human Resurces
                        </MenuItem>
                        <MenuItem value="Data Operator">Data Operator</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        University/Institute
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={university}
                        label="University/Institute"
                        onChange={(e) => setUniversity(e.target.value)}
                      >
                        <MenuItem value="PTU">
                          Punjab Technical University
                        </MenuItem>
                        <MenuItem value="Web Designer">
                          Chandigarh University
                        </MenuItem>
                        <MenuItem value="CenterUniverity">
                          Center University
                        </MenuItem>
                        <MenuItem value="Hptu">Hptu</MenuItem>
                        <MenuItem value="J&K">J&K University</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <br />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="Year of Graduation"
                    label="Year of Graduation"
                    type="date"
                    fullWidth
                    variant="standard"
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                  />
                  <br></br> <br></br>
                  <FormControl
                    error={formErrors.educationTypeError} // Change genderError to educationTypeError
                    component="fieldset"
                  >
                    <FormLabel component="legend">Education Type</FormLabel>
                    <RadioGroup
                      row
                      aria-label="Education Type"
                      name="EducationType"
                      value={educationtype}
                      onChange={(e) => setEducationtype(e.target.value)}
                    >
                      <FormControlLabel
                        value="FullTime"
                        control={<Radio />}
                        label="Full time"
                      />
                      <FormControlLabel
                        value="PartTime"
                        control={<Radio />}
                        label="Part time"
                      />

                      <FormControlLabel
                        value="Other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                    {formErrors.educationTypeError && ( // Change genderError to educationTypeError
                      <p style={{ color: "red", margin: "0" }}>
                        Please select Education Type
                      </p>
                    )}
                  </FormControl>
                </>
              )}

              {activeStep === 3 && (
                <>
                  <h4 className="text-primary">Job Preference</h4>
                  <p>Hepls to find better matching jobs</p>
                  <br></br>
                  <div>
                    <FormControl sx={{ m: 1, width: 500 }}>
                      <InputLabel id="demo-multiple-checkbox-label">
                        Key Skills
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange1}
                        input={<OutlinedInput label="Key Skills" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <br></br> <br></br>
                    <FormControl sx={{ m: 1, width: 500 }}>
                      <InputLabel id="demo-multiple-checkbox-labels">
                        Industry
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-labels"
                        id="demo-multiple-checkboxs"
                        multiple
                        value={personName1}
                        onChange={handleChange2}
                        input={<OutlinedInput label="Key Skills" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuPropss={MenuPropss}
                      >
                        {names1.map((name1) => (
                          <MenuItem key={name1} value={name1}>
                            <Checkbox
                              checked={personName1.indexOf(name1) > -1}
                            />
                            <ListItemText primary={name1} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <br></br> <br></br>
                    <FormControl sx={{ m: 1, width: 500 }}>
                      <InputLabel id="demo-multiple-checkbox-labelss">
                        Department/Function
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-labelss"
                        id="demo-multiple-checkboxss"
                        multiple
                        value={personName2}
                        onChange={handleChange3}
                        input={<OutlinedInput label="Department/Function" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuPropsss={MenuPropsss}
                      >
                        {names2.map((name2) => (
                          <MenuItem key={name2} value={name2}>
                            <Checkbox
                              checked={personName2.indexOf(name2) > -1}
                            />
                            <ListItemText primary={name2} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <br></br> <br></br>
                    <FormControl sx={{ m: 1, width: 500 }}>
                      <InputLabel id="demo-multiple-checkbox-labelsss">
                        Preferred Role
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-labelsss"
                        id="demo-multiple-checkboxsss"
                        multiple
                        value={personName3}
                        onChange={handleChange33}
                        input={<OutlinedInput label="Preferred Role" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuPropsssss={MenuPropsssss}
                      >
                        {names3.map((name3) => (
                          <MenuItem key={name3} value={name3}>
                            <Checkbox
                              checked={personName3.indexOf(name3) > -1}
                            />
                            <ListItemText primary={name3} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <br></br>
                    <br></br>
                    <FormControl sx={{ m: 1, width: 500 }}>
                      <InputLabel id="demo-multiple-checkbox-labelsss">
                        Preferred Location
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-labelssss"
                        id="demo-multiple-checkboxssss"
                        multiple
                        value={personName4}
                        onChange={handleChange333}
                        input={<OutlinedInput label="Preferred Location" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuPropssssss={MenuPropssssss}
                      >
                        {names4.map((name4) => (
                          <MenuItem key={name4} value={name4}>
                            <Checkbox
                              checked={personName4.indexOf(name4) > -1}
                            />
                            <ListItemText primary={name4} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </>
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          {showPreviousFields ? (
            <>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleContinue}>Continue</Button>
              {/* <Button onClick={handleSubmit}>Submit</Button> */}
            </>
          ) : (
            <>
              <Button onClick={handleClose}>Cancel</Button>
              {activeStep <= 2 ? (
                <Button onClick={handleContinue}>Continue</Button>
              ) : (
                <Button onClick={handleSubmit}>Register
                
                </Button>
               
              )}
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
