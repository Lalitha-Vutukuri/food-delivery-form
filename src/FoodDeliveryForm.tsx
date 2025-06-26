import { useForm, type FieldErrors } from "react-hook-form";

type FoodDeliveryFormType = {
  orderNo: number;
  email: string;
  customerName: string;
  Mobile: string;
};

const FoodDeliveryForm = () => {
  //console.log(useForm());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FoodDeliveryFormType>({
    mode: "onChange",
    criteriaMode: "all",
    defaultValues: {
      orderNo: new Date().valueOf(),
      customerName: "",
      Mobile: "",
      email: "",
    },
  });
  const onSubmit = (formData: FoodDeliveryFormType) => {
    console.log("Form Data : ", formData);
  };
  const onError = (err: FieldErrors) => {
    console.log("Validating Error", err);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              disabled
              className="form-control"
              placeholder="#Order No"
              {...register("orderNo")}
            />
            <label>#Order No</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number"
              {...register("Mobile", {
                required: "Mobile Number is required",
                minLength: { value: 10, message: "MinLength is 10 digits" },
                maxLength: { value: 10, message: "MinLength is 10 digits" },
              })}
            />
            <label>Mobile</label>
            {errors.Mobile && (
              <div className="error-feedback">{errors.Mobile?.message}</div>
            )}
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Customer Name"
              {...register("customerName", {
                required: { value: true, message: "Customer Name is required" },
                minLength: 3,
                maxLength: 15,
              })}
            />
            <label> Customer Name</label>
            {errors.customerName && (
              <div className="error-feedback">
                {errors.customerName?.message}
              </div>
            )}
          </div>
        </div>
        <div className="col">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="name@gmail.com"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Incorrect email-id",
                },
                validate: {
                  notFake: (value) => {
                    return (
                      value != "email@gmail.com" ||
                      "Particular email is blocked"
                    );
                  },
                  notFromThatDomain: (value) => {
                    return (
                      (!value.endsWith("xyz.com") &&
                        !value.endsWith("example.com")) ||
                      "This Domain is not supported"
                    );
                  },
                },
              })}
            />
            <label> Email </label>
            {errors.email && (
              <div className="error-feedback">{errors.email?.message}</div>
            )}
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
