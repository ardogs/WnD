// import { axiosInstance } from '../../services/api/axiosInstance';
import { setSuppliers, setLoading } from './quotationsSlice';

//Data de ejemplo -> simula el retorno de información de proveedores desde el API
const suppliersData = [
    {
        registration_number: '503-18-35279',
        comercial_name: 'Proveedor 1',
        legal_representative: 'Representante 1',
        address: 'Calle Falsa 123',
        type_of_business: 'Construcción',
        category: 'Categoria A',
        tel_fax: '123456789',
        website: 'https://www.proveedor1.com'
    },
    {
        registration_number: '514-20-20987',
        comercial_name: 'Proveedor 2',
        legal_representative: 'Representante 2',
        address: 'Calle Verdadera 456',
        type_of_business: 'Servicios',
        category: 'Categoria B',
        tel_fax: '987654321',
        website: 'https://www.proveedor2.com'
    },
    {
        registration_number: '798-68-00335',
        comercial_name: 'Proveedor 3',
        legal_representative: 'Representante 3',
        address: 'Avenida Siempre Viva 789',
        type_of_business: 'Tecnología',
        category: 'Categoria C',
        tel_fax: '456123789',
        website: 'https://www.proveedor3.com'
    }
];


export const fetchAllSuppliers = () => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        try {
            // console.log('Llamando a la API para obtener proveedores...');
            // const response = await axiosInstance.get('/api/Supplier/SupplierList');
            const response = suppliersData; // Simulando la respuesta del API con datos de ejemplo;
            dispatch(setSuppliers(response));
            return { ok: true }
        } catch (error) {
            // console.log(error)
            return { ok: false, message: `No se pudieron cargar las configuraciones iniciales. Error reason: ${error}` }
        } finally {
            dispatch(setLoading(false));
        }
    };
};