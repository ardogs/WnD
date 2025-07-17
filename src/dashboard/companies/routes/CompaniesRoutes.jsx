
import { Route, Routes } from 'react-router'
import { CompaniesLayout } from '../layout/CompaniesLayout'
import { EditCompaniesPages } from '../pages/EditCompaniesPages'
import { Error404Page } from '../../../error/Error404Page'
import { MainPageCompanies } from '../pages/MainPageCompanies'

export const CompaniesRoutes = () => {
    return (
        <CompaniesLayout>
            <Routes>
                <Route path='/' element={<MainPageCompanies/>} />
                <Route path='edit' element={<EditCompaniesPages />} />
                <Route path='/*' element={<Error404Page />} />
            </Routes>
        </CompaniesLayout>
    )
}
