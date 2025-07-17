import { useFormikContext } from 'formik';
import { debounce } from 'lodash';
import { useEffect } from 'react';


export const AutoCalculateSupplyPrice = ({ index }) => {
    const { values, setFieldValue } = useFormikContext();
    const { amount, unit_price } = values.quotation_item?.[index] || {};


    useEffect(() => {
        const handler = debounce((amount, unit_price) => {
            if (!isNaN(amount) && !isNaN(unit_price)) {
                const subtotal = (parseFloat(amount) * parseFloat(unit_price)) || 0;
                setFieldValue(`quotation_item[${index}].supply_price`, subtotal);
            }
        }, 300);
        handler(amount, unit_price);
        return () => handler.cancel();
    }, [amount, unit_price, index, setFieldValue]);

    return null;
}


