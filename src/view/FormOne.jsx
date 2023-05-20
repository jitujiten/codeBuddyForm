import React from "react";
import  classes from "../style/Form.module.css";

const FormOne = ({ formData, errors, handleChange, goToNextStep }) => (
  <form className={classes.formContainer}>
    <label className={classes.formLabel}>
      Email ID:
      <input
        type="text"
        name="emailId"
        value={formData.emailId}
        onChange={handleChange}
        className={classes.formInput}
      />
      {errors.emailId && <span className={classes.formError}>{errors.emailId}</span>}
    </label>
    <label className={classes.formLabel}>
      Password:
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className={classes.formInput}
      />
      {errors.password && <span className={classes.formError}>{errors.password}</span>}
    </label>
    <button type="button" disabled className={classes.formButton}>
      Back
    </button>
    <button type="button" onClick={goToNextStep} className={classes.formButton}>
      Save and Next
    </button>
  </form>
);

export default FormOne;
