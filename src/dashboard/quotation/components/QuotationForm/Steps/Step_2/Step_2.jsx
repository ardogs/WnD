import { GeneralInformation } from "./GeneralInformation";
import { ItemList } from "./ItemList";
import { TotalPricing } from "./TotalPricing";

export const Step_2 = () => {
  return (
    <>
      <GeneralInformation />
      <ItemList />
      <TotalPricing />
    </>
  );
}
