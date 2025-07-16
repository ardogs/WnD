import { useCallback, useEffect, useMemo } from "react";
import { fetchAllSuppliers, setDocumentType } from "../../../store/quotation";
import { useDispatch, useSelector } from "react-redux";


export const useSupplierForm = (setFieldValue ) => {

    const dispatch = useDispatch();
    const { suppliers, isLoading, newQuotation } = useSelector(state => state.quotation);
    const { documentType } = newQuotation;

    useEffect(() => {
        if (!suppliers || suppliers.length === 0)
            dispatch(fetchAllSuppliers());
    }, [dispatch]);

    useEffect(() => {
        if (suppliers.length > 0) {
            handleSupplierChange(documentType ?? 0);
        }
    }, [suppliers, documentType]);

    const handleSupplierChange = useCallback((index = 0) => {

        dispatch(setDocumentType(index));

        const selected = suppliers[index];
        if (!selected) return;
        const fields = [
            "registration_number",
            "comercial_name",
            "legal_representative",
            "address",
            "type_of_business",
            "category",
            "tel_fax",
            "website",
        ];

        fields.forEach((field) => {
            setFieldValue(field, selected[field]);
        });
    }, [suppliers, dispatch, setFieldValue]);


    const options = useMemo(() => (
        suppliers.map((item, index) => ({
            value: index,
            label: item.registration_number
        }))
    ), [suppliers]);

    return {
        options,
        isLoading,
        documentType,
        handleSupplierChange,
    };
}
