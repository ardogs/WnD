import * as Yup from 'yup';

export const initialValues = {

    registration_number: "",
    comercial_name: "",

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

export const validationSchema =  (t) => ( [

    Yup.object({
        registration_number: Yup.string().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
        comercial_name: Yup.string().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
    }),

    Yup.object().shape({
        date: Yup.date().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
        customer: Yup.string().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
        work_concept: Yup.string().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
        duration_of_work: Yup.string().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
        price_before_taxes: Yup.number().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBePositive")).integer(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBeaNumber")),
        vat_total: Yup.number().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBePositive")).integer(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBeaNumber")),
        total_price_letter: Yup.string().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
        total_price_number: Yup.number().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBePositive")).integer(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBeaNumber")),
        quotation_item: Yup.array().of(
            Yup.object().shape({
                description: Yup.string().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
                product_especification: Yup.string().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
                unit: Yup.string().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")),
                amount: Yup.number().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBePositive")).integer(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBeaNumber")),
                unit_price: Yup.number().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBePositive")).integer(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBeaNumber")),
                supply_price: Yup.number().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBePositive")).integer(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBeaNumber")),
                vat: Yup.number().required(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBePositive")).integer(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.requierdField")).positive(t("dashboard.quotations.newQuotation.steps.step2.errorMessage.mustBeaNumber")),
                observations: Yup.string(),
            })
        ),
    })
]);