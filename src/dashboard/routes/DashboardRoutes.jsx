import { Route, Routes, useLocation } from "react-router"
import { DashboardLayout } from "../layout/DashboardLayout"
import { AnimatePresence} from "framer-motion";
import { PageFadeLayout } from "../layout/PageFadeLayout"
import { HomePage } from "../home/pages"
import { QuotationRoutes } from "../quotation/routes/QuotationRoutes"
import { InvoicesRoutes } from "../invoices/routes/InvoicesRoutes"
import { CompaniesRoutes } from "../companies/routes/CompaniesRoutes"
import { SettingsRoutes } from "../settings/routes/SettingsRoutes"

export const DashboardRoutes = () => {
  const location = useLocation();
  return (
    <DashboardLayout>
      <AnimatePresence  mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<PageFadeLayout><HomePage /></PageFadeLayout>} />
          <Route path="/quotation/*" element={<PageFadeLayout><QuotationRoutes /></PageFadeLayout>} />
          <Route path="/invoices/*" element={<PageFadeLayout><InvoicesRoutes /></PageFadeLayout>} />
          <Route path="/companies/*" element={<PageFadeLayout><CompaniesRoutes /></PageFadeLayout>} />
          <Route path="/settings/*" element={<PageFadeLayout><SettingsRoutes /></PageFadeLayout>} />
          <Route path="/*" element={<h1> 404</h1>} />
        </Routes>
      </AnimatePresence>
    </DashboardLayout>

  )
}
