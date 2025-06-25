import React, { useState, type ChangeEvent, type SyntheticEvent } from "react";

type FoodDeliveryFormType = {
  customerName: string;
  Mobile: string;
};

type FoodDeliveryFormErrorType = {
  customerName: string;
  Mobile: string;
};

const FoodDeliveryForm = () => {
  const [values, setValues] = useState<FoodDeliveryFormType>({
    customerName: "Mary",
    Mobile: "",
  });
  const [errors, setErrors] = useState<FoodDeliveryFormErrorType>({
    customerName: "Mary",
    Mobile: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateFormData = () => {
    const tempErrors: FoodDeliveryFormErrorType = {
      customerName: "",
      Mobile: "",
    };
    if (values.customerName == "")
      tempErrors.customerName = "Customer name is required.";
    if (values.Mobile == "") tempErrors.Mobile = "Mobile Number is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x == "");
  };

  const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateFormData()) {
      console.log(values);
    } else {
      console.log("Form is invalid");
    }
  };
  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="customerName"
          className="form-control"
          placeholder="Customer Name"
          value={values.customerName}
          onChange={handleInputChange}
        />
        <label> Customer Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="Mobile"
          className="form-control"
          placeholder="Mobile Number"
          value={values.Mobile}
          onChange={handleInputChange}
        />
        <label>Mobile</label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
