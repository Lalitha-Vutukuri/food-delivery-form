import { useForm } from "react-hook-form";

type FoodDeliveryFormType = {
  customerName: string;
  Mobile: string;
};

const FoodDeliveryForm = () => {
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>();

  const onSubmit = (FormData: FoodDeliveryFormType) => {
    console.log("Form Data : ", FormData);
  };

  const onError = (errors) => {
    console.log("Validation errors : ", errors);
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Customer Name"
          {...register("customerName", {
            required: " Customer Name is required",
          })}
        />
        <label> Customer Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Mobile Number"
          {...register("Mobile", { required: "Mobile Number is required" })}
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
