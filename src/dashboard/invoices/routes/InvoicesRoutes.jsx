import { Route, Routes } from "react-router"
import { CreateInvoicePage, EditInvoicePage, MainPageInvoices, DeleteInvoicePage } from "../pages"
import { Error404Page } from "../../../error/Error404Page"
import { InvoicesLayout } from "../layout/InvoicesLayout"


export const InvoicesRoutes = () => {
  return (
    <InvoicesLayout>
      <Routes>
        <Route path="/" element={<MainPageInvoices/>} />
        <Route path="new" element={<CreateInvoicePage />} />
        <Route path="edit" element={<EditInvoicePage />} />
        <Route path="delete" element={<DeleteInvoicePage />} />
        <Route path="/*" element={<Error404Page />} />
      </Routes>
    </InvoicesLayout>

  )
}
