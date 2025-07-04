import TextField from "../../../controls/TextField";
import { useFormContext } from "react-hook-form";
import type { DeliveryAddressFormType } from "../../../types";

const DeliveryAddressForm = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<{ address: DeliveryAddressFormType }>();

  return (
    <>
      <div className="text-start fw-bold mt-4 mb-2">Delivery Address</div>
      <div className="row mb-3">
        <div className="col">
          <TextField
            label="Street Addres"
            error={errors.address?.streetAddress}
            {...register("address.streetAddress", {
              required: "Street Address is required",
            })}
          />
        </div>
        <div className="col">
          <TextField
            label="LandMark"
            error={errors.address?.landmark}
            {...register("address.landmark", {
              required: "LandMark is required",
            })}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TextField
            label="City"
            error={errors.address?.city}
            {...register("address.city", {
              required: "City is required",
            })}
          />
        </div>
        <div className="col">
          <TextField
            label="State"
            error={errors.address?.state}
            {...register("address.state", {
              required: "State is required",
            })}
          />
        </div>
      </div>
      <div>Delivery Items</div>
    </>
  );
};

export default DeliveryAddressForm;
