import * as Yup from 'yup';

export const initialValues = {
    registration_number: "",
    comercial_name: "",
    legal_representative: "",
    address: "",
    type_of_business: "",
    category: "",
    tel_fax: "",
    website: ""
}


export const validationSchema = [
    Yup.object({
        registration_number: Yup.string().required('Campo requerido'),
        comercial_name: Yup.string().required('Campo requerido'),
        legal_representative: Yup.string().required('Campo requerido'),
        address: Yup.string().required('Campo requerido'),
        type_of_business: Yup.string().required('Campo requerido'),
        category: Yup.string().required('Campo requerido'),
        tel_fax: Yup.string().required('Campo requerido'),
        website: Yup.string().url('Debe ser una URL válida').required('Campo requerido')
    })
];