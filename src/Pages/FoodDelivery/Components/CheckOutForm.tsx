import Select from "../../../controls/Select";
import type { CheckoutFormType, SelectOptionType } from "../../../types";
import { useFormContext } from "react-hook-form";

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

const CheckOutForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<CheckoutFormType>();
  return (
    <>
      <div className="text-start fw-bold mt-4 mb-2">Checkout Details</div>
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
    </>
  );
};

export default CheckOutForm;
