import React from "react";
import classes from "../style/Form.module.css"

const FormThree = ({ formData, errors, handleChange, goToPreviousStep, handleSubmit }) => (
  <form className={classes.formContainer}>
    <label className={classes.formLabel}>
      Country Code:
      <select name="countryCode" value={formData.countryCode} onChange={handleChange} className={classes.formInput}>
        <option value="">Select Country Code</option>
        <option value="+91">India (+91)</option>
        <option value="+1">America (+1)</option>
      </select>
      {errors.countryCode && <span className={classes.formError}>{errors.countryCode}</span>}
    </label>
    <label className={classes.formLabel}>
      Phone Number:
      <input
        type="text"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        className={classes.formInput}
      />
      {errors.phoneNumber && <span className={classes.formError}>{errors.phoneNumber}</span>}
    </label>
    <label className={classes.formLabel}>
      <input
        type="checkbox"
        name="acceptTermsAndCondition"
        checked={formData.acceptTermsAndCondition}
        onChange={handleChange}
      />
      I accept the Terms and Conditions
      {errors.acceptTermsAndCondition && <span className={classes.formError}>{errors.acceptTermsAndCondition}</span>}
    </label>
    <button type="button" onClick={goToPreviousStep} className={classes.formButton}>
      Back
    </button>
    <button type="button" disabled className={classes.formButton}>
      Save
    </button>
    <button type="button" onClick={handleSubmit} className={classes.formButton}>
      Save and Submit
    </button>
  </form>
);

export default FormThree;
