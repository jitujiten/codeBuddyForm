import React, { useState } from "react";
import {useHistory } from "react-router-dom";
import FormOne from "./FormOne";
import FormThree from "./FormThree";
import FormTwo from "./FormTwo";


const defaultData = {
  emailId: "",
  password: "",
  firstName: "",
  lastName: "",
  address: "",
  countryCode: "",
  phoneNumber: "",
  acceptTermsAndCondition: false,
};

const MultiStepForm = () => {
  const history = useHistory();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(defaultData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Form 1 Validation
    if (step === 1) {
      if (!formData.emailId) {
        isValid = false;
        newErrors.emailId = "Email ID is required";
      } else if (!isValidEmail(formData.emailId)) {
        isValid = false;
        newErrors.emailId = "Invalid email ID must contain @";
      }

      if (!formData.password) {
        isValid = false;
        newErrors.password = "Password is required";
      } else if (!isValidPassword(formData.password)) {
        isValid = false;
        newErrors.password =
          "Password is too weak";
      }
    }

    // Form 2 Validation
    if (step === 2) {
      if (!formData.firstName) {
        isValid = false;
        newErrors.firstName = "First Name is required";
      } else if (!isValidName(formData.firstName)) {
        isValid = false;
        newErrors.firstName = "Invalid First Name";
      }

      if (formData.lastName && !isValidName(formData.lastName)) {
        isValid = false;
        newErrors.lastName = "Invalid Last Name";
      }

      if (!formData.address) {
        isValid = false;
        newErrors.address = "Address is required";
      } else if (formData.address.length < 10) {
        isValid = false;
        newErrors.address = "Address must be at least 10 characters long";
      }
    }

    // Form 3 Validation
    if (step === 3) {
      if (!formData.countryCode) {
        isValid = false;
        newErrors.countryCode = "Country Code is required";
      }

      if (!formData.phoneNumber) {
        isValid = false;
        newErrors.phoneNumber = "Phone Number is required";
      } else if (!isValidPhoneNumber(formData.phoneNumber)) {
        isValid = false;
        newErrors.phoneNumber = "Invalid Phone Number";
      }

      if (!formData.acceptTermsAndCondition) {
        isValid = false;
        newErrors.acceptTermsAndCondition =
          "You must accept the Terms and Conditions";
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    const isValid = validateForm();

    if (isValid) {
      const requestBody = {
        emailId: formData.emailId,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        address: formData.address,
        countryCode: formData.countryCode,
        phoneNumber: formData.phoneNumber,
      };

      try {
        await fetch(
          "https://push-notification-f56f0-default-rtdb.firebaseio.com/datas.json",
          {
            method: "POST",
            body: JSON.stringify(requestBody),
            headers: { "content-Type": "aplication/json" },
          }
        );
        setFormData(defaultData);
        history.push("./posts");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const goToPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const goToNextStep = () => {
    const isValid = validateForm();
    if (isValid) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <FormOne
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            goToNextStep={goToNextStep}
          />
        );
      case 2:
        return (
          <FormTwo
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            goToPreviousStep={goToPreviousStep}
            goToNextStep={goToNextStep}
          />
        );
      case 3:
        return (
          <FormThree
            formData={formData}
            errors={errors}
            handleChange={handleChange}
            goToPreviousStep={goToPreviousStep}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

const isValidEmail = (email) => {
  return email.trim() !== "" && email.includes("@");
};

const isValidPassword = (password) => {
  return password.length >= 8;
};

const isValidName = (name) => {
  return name.trim() !== "";
};

const isValidPhoneNumber = (phoneNumber) => {
  return /^\d{10}$/.test(phoneNumber);
};

export default MultiStepForm;
