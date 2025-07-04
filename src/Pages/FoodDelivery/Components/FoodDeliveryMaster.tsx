import TextField from "../../../controls/TextField";
import type { FoodDeliveryMasterType } from "../../../types";
import { useFormContext } from "react-hook-form";

const FoodDeliveryMaster = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FoodDeliveryMasterType>();

  return (
    <>
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
      </div>
    </>
  );
};

export default FoodDeliveryMaster;
