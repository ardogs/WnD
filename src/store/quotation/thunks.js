import { axiosInstance } from '../../services/api/axiosInstance';
import { setSuppliers } from './quotationsSlice';


export const fetchAllSuppliers = () => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.get('/api/Supplier/SupplierList');
            // console.log(response)
            // console.log(typeof response)
            // const { darkMode, language, apiVersion, apiurl } = response.data;
            // const { darkmode, language, version } = { darkmode: true, language: 'ES', version: '1.0.0' };
            dispatch(setSuppliers( response.data ));
            return { ok: true }
        } catch (error) {
            // console.log(error)
            return { ok: false, message: `No se pudieron cargar las configuraciones iniciales. Error reason: ${error}` }
        }
    };
};