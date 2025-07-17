import { useFormikContext } from 'formik';
import { useEffect } from 'react'

export const AutoCalculateTotalSummary = () => {
    const { values, setFieldValue } = useFormikContext();

    useEffect(() => {
        const items = values.quotation_item || [];
        const priceBeforeTaxes = items.reduce((acc, item) => acc + (parseFloat(item.supply_price) || 0), 0);
        const vatTotal = items.reduce((acc, item) => acc + (parseFloat(item.vat) || 0), 0);
        const totalPrice = priceBeforeTaxes + vatTotal;

        setFieldValue('price_before_taxes', priceBeforeTaxes);
        setFieldValue('vat_total', vatTotal);
        setFieldValue('total_price_number', totalPrice);
    }, [values.quotation_item, setFieldValue]);

    return null;
}
