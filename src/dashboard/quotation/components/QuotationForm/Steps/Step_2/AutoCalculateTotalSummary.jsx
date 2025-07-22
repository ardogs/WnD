import { useFormikContext } from 'formik';
import { useEffect } from 'react'
import { useSelector } from 'react-redux';


// export const AutoCalculateSupplyPrice = ({ index }) => {
//     const { values, setFieldValue } = useFormikContext();
//     const { amount, unit_price } = values.quotation_item?.[index] || {};


//     useEffect(() => {
//         const handler = debounce((amount, unit_price) => {
//             if (!isNaN(amount) && !isNaN(unit_price)) {
//                 const subtotal = (parseFloat(amount) * parseFloat(unit_price)) || 0;
//                 setFieldValue(`quotation_item[${index}].supply_price`, subtotal);
//             }
//         }, 300);
//         handler(amount, unit_price);
//         return () => handler.cancel();
//     }, [amount, unit_price, index, setFieldValue]);

//     return null;
// }

export const AutoCalculateTotalSummary = () => {
    const { values, setFieldValue } = useFormikContext();
    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateTotalVat, calculatePriceBeforeTaxes, calculateTotalPrice } = newQuotation.step2;

    useEffect(() => {
        const items = values.quotation_item || [];
        const priceBeforeTaxes = items.reduce((acc, item) => acc + (parseFloat(item.supply_price) || 0), 0);
        const vatTotal = items.reduce((acc, item) => acc + (parseFloat(item.vat) || 0), 0);
        const totalPrice = priceBeforeTaxes + vatTotal;

        calculatePriceBeforeTaxes && setFieldValue('price_before_taxes', priceBeforeTaxes);
        calculateTotalVat && setFieldValue('vat_total', vatTotal);
        calculateTotalPrice && setFieldValue('total_price_number', totalPrice);
    }, [setFieldValue, values.quotation_item, calculateTotalVat, calculatePriceBeforeTaxes, calculateTotalPrice]);

    return null;
}
