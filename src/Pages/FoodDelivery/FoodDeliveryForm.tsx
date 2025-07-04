import {
  FormProvider,
  useForm,
  type FieldErrors,
  type UseFormReturn,
} from "react-hook-form";
import CheckOutForm from "./Components/CheckOutForm";
import type { FoodDeliveryFormType } from "../../types";
import DeliveryAddressForm from "./Components/DeliveryAddressForm";
import FoodDeliveryMaster from "./Components/FoodDeliveryMaster";

const FoodDeliveryForm = () => {
  //console.log(useForm());

  const methods: UseFormReturn<FoodDeliveryFormType> =
    useForm<FoodDeliveryFormType>({
      mode: "onChange",
      criteriaMode: "all",
      defaultValues: {
        orderNo: new Date().valueOf(),
        customerName: "",
        Mobile: "",
        email: "",
        paymentMethod: "",
        deliveryIn: 0,
        address: {
          streetAddress: "",
          landmark: "",
          city: "",
          state: "",
        },
      },
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const onSubmit = (formData: FoodDeliveryFormType) => {
    console.log("Form Data : ", formData);
  };
  const onError = (err: FieldErrors) => {
    console.log("Validating Error", err);
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)}>
      <FormProvider {...methods}>
        <FoodDeliveryMaster />
        <div>List of ordered Items</div>
        <CheckOutForm />
        <DeliveryAddressForm />
      </FormProvider>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FoodDeliveryForm;
