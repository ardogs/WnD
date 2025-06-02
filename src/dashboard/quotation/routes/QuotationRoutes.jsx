import { Route, Routes } from 'react-router';
import { NewQuotationPage, EditQuotationPage, DeleteQuotationPage, MainPageQuotations } from '../pages';
import { Error404Page } from '../../../error/Error404Page';
import { QuotationLayout } from '../layout/QuotationLayout';


export const QuotationRoutes = () => {
    return (
        <QuotationLayout>
            <Routes>
                <Route path='/' element={<MainPageQuotations/>} />
                <Route path='new' element={<NewQuotationPage />} />
                <Route path='edit' element={<EditQuotationPage />} />
                <Route path='delete' element={<DeleteQuotationPage />} />
                <Route path='/*' element={<Error404Page />} />
            </Routes>
        </QuotationLayout>

    )
}