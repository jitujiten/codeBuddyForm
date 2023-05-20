import React from "react";
import classes from "../style/Form.module.css"

const FormTwo = ({ formData, errors, handleChange, goToPreviousStep, goToNextStep }) => (
  <form className={classes.formContainer}>
    <label className={classes.formLabel}>
      First Name:
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className={classes.formInput}
      />
      {errors.firstName && <span className={classes.formError}>{errors.firstName}</span>}
    </label>
    <label className={classes.formLabel}>
      Last Name:
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className={classes.formInput}
      />
      {errors.lastName && <span className={classes.formError}>{errors.lastName}</span>}
    </label>
    <label className={classes.formLabel}>
      Address:
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleChange}
        className={classes.formInput}
      />
      {errors.address && <span className={classes.formError}>{errors.address}</span>}
    </label>
    <button type="button" onClick={goToPreviousStep} className={classes.formButton}>
      Back
    </button>
    <button type="button" onClick={goToNextStep} className={classes.formButton}>
      Save and Next
    </button>
  </form>
);

export default FormTwo;
