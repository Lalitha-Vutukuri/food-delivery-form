import { useForm } from "react-hook-form";

type FoodDeliveryFormType = {
  orderNo: number;
  email: string;
  customerName: string;
  Mobile: string;
};

const FoodDeliveryForm = () => {
  //console.log(useForm());
  const { register, handleSubmit } = useForm<FoodDeliveryFormType>({
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
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="name@gmail.com"
              {...register("email")}
            />
            <label> Email </label>
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
              {...register("customerName")}
            />
            <label> Customer Name</label>
          </div>
        </div>
        <div className="col">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="Mobile Number"
              {...register("Mobile")}
            />
            <label>Mobile</label>
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
