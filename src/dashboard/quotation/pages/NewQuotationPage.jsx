import { Button } from "antd"
import { useDispatch } from "react-redux"
import { fetchAllSuppliers } from "../../../store/quotation";
import { QuotationLayout } from "../layout/QuotationLayout";
import Formulario from "../components/Formulario";
import { NewQuotationForm } from "../components/NewQuotationForm/NewQuotationForm";

export const NewQuotationPage = () => {
  return (
    <QuotationLayout>
      <div style={{ marginTop: '15px' }}>
        <NewQuotationForm />
      </div>
    </QuotationLayout>
  )
}
