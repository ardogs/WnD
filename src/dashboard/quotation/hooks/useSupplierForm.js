import { useCallback, useEffect, useMemo, useState } from "react";
import { fetchAllSuppliers, setDocumentType } from "../../../store/quotation";
import { useDispatch, useSelector } from "react-redux";
import { useFormikContext } from "formik";


export const useSupplierForm = ( ) => {

    const dispatch = useDispatch();
    const { suppliers, isLoading, newQuotation } = useSelector(state => state.quotation);
    const { documentType } = newQuotation;
    const { setFieldValue } = useFormikContext();

    useEffect(() => {
        if (!suppliers || suppliers.length === 0)
            dispatch(fetchAllSuppliers());
    }, [dispatch]);

    useEffect(() => {
        if (suppliers.length > 0) 
            handleSupplierChange(documentType ?? 0);
        
    }, [suppliers, documentType]);

    const [currentSupplier, setCurrentSupplier] = useState(null)

    const handleSupplierChange = useCallback((index = 0) => {
        dispatch(setDocumentType(index));
        const selected = suppliers[index];
        if (!selected) return;
        setCurrentSupplier( selected );

        setFieldValue("registration_number", selected.registration_number);
        setFieldValue("comercial_name", selected.comercial_name);


    }, [suppliers, dispatch]);


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
        currentSupplier
    };
}
