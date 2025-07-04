import { useForm, type FieldErrors } from "react-hook-form";
import TextField from "./controls/TextField";
import Select from "./controls/Select";
import type { SelectOptionType } from "./types";

type FoodDeliveryFormType = {
  orderNo: number;
  email: string;
  customerName: string;
  Mobile: string;
  paymentMethod: string;
  deliveryIn: number;
};

const paymentOptions: SelectOptionType[] = [
  { value: "", text: "Select" },
  { value: "online", text: "Paid Online" },
  { value: "COD", text: "Cash on Delivery" },
];

const deliveryInOptions: SelectOptionType[] = [
  { value: 0, text: "Select" },
  { value: 30, text: "half an hour" },
  { value: 60, text: "an hour" },
  { value: 90, text: "one and half hour" },
  { value: 120, text: "Two hours" },
];

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
      paymentMethod: "",
      deliveryIn: 0,
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
          <TextField
            label="#Order No"
            disabled
            {...register("orderNo")}
            error={errors.orderNo}
          />
        </div>
        <div className="col">
          <TextField
            label="Mobile Number"
            {...register("Mobile", {
              required: "Mobile Number is required",
            })}
            error={errors.Mobile}
          />
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <TextField
            type="text"
            label="Customer Name"
            {...register("customerName", {
              required: { value: true, message: "Customer Name is required" },
            })}
            error={errors.customerName}
          />
        </div>
        <div className="col">
          <TextField
            type="email"
            label="name@gmail.com"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Incorrect email-id",
              },
            })}
            error={errors.email}
          />
        </div>
        <div>List of ordered Items</div>
        <div className="row mb-2">
          <div className="col">
            <Select
              label="Payment Method"
              options={paymentOptions}
              {...register("paymentMethod", {
                required: {
                  value: true,
                  message: "Payment Method is required",
                },
              })}
              error={errors.paymentMethod}
            />
          </div>
          <div className="col">
            <Select
              label="Delivery In"
              options={deliveryInOptions}
              {...register("deliveryIn")}
              error={errors.deliveryIn}
            />
          </div>
        </div>
        <div>Delivery Items</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
