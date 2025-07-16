import { QuotationLayout } from "../layout/QuotationLayout";
import { NewQuotationForm } from "../components/QuotationForm/QuotationForm";

export const NewQuotationPage = () => (
  <QuotationLayout>
    <div style={{ marginTop: '15px' }}> <NewQuotationForm /> </div>
  </QuotationLayout>
)

