import * as Yup from 'yup';

export const initialValues = {
    registration_number: "RN_1",
    comercial_name: "CN_1",
    legal_representative: "LR_1",
    address: "Address 1",
    type_of_business: "Type of Business 1",
    category: "Category 1",
    tel_fax: "TF_1",
    website: "https://google.com.mx",

    date: "2025-06-04",
    customer: "customer_1",
    work_concept: "work_concept_1",
    duration_of_work: "duration_of_work_1",

    quotation_item: [
        {
            description: "",
            product_especification: "",
            unit: "",
            amount: 1,
            unit_price:     1,
            supply_price: 1,
            vat: 1,
            observations: "",
        }
    ],

    price_before_taxes: "",
    vat_total: "",
    total_price_letter: "",
    total_price_number: ""
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
    }),

    Yup.object().shape({
        date: Yup.date().required('Campo requerido'),
        customer: Yup.string().required('Campo requerido'),
        work_concept: Yup.string().required('Campo requerido'),
        duration_of_work: Yup.string().required('Campo requerido'),
        price_before_taxes: Yup.number().required('Campo requerido').positive('Debe ser un número positivo').integer('Debe ser un número entero'),
        vat_total: Yup.number().required('Campo requerido').positive('Debe ser un número positivo').integer('Debe ser un número entero'),
        total_price_letter: Yup.string().required('Campo requerido'),
        total_price_number: Yup.number().required('Campo requerido').positive('Debe ser un número positivo').integer('Debe ser un número entero'),
        quotation_item: Yup.array().of(
            Yup.object().shape({
                description: Yup.string().required('Campo requerido'),
                product_especification: Yup.string().required('Campo requerido'),
                unit: Yup.string().required('Campo requerido'),
                amount: Yup.number().required('Campo requerido').positive('Debe ser un número positivo').integer('Debe ser un número entero'),
                unit_price: Yup.number().required('Campo requerido').positive('Debe ser un número positivo').integer('Debe ser un número entero'),
                supply_price: Yup.number().required('Campo requerido').positive('Debe ser un número positivo').integer('Debe ser un número entero'),
                vat: Yup.number().required('Campo requerido').positive('Debe ser un número positivo').integer('Debe ser un número entero'),
                observations: Yup.string(),
            })
        ),
    })
];