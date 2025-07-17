import { useFormikContext } from "formik";
import { debounce } from "lodash";
import { useEffect } from "react";

export const AutoCalculateVatPerItem = ({ index, calculateVatperItem }) => {
    const { values, setFieldValue } = useFormikContext();
    const { supply_price } = values.quotation_item?.[index] || {};

    useEffect(() => {
        const debouncedCalculate = debounce((price) => {
            if (!isNaN(price) && calculateVatperItem) {
                const vat = ((10 / 100) * parseFloat(price)) + parseFloat(price) || 0;
                setFieldValue(`quotation_item[${index}].vat`, Math.floor(vat));
            }
        }, 300);

        debouncedCalculate(supply_price);

        // Cleanup to cancel any pending debounced calls
        return () => debouncedCalculate.cancel();
    }, [supply_price, index, setFieldValue, calculateVatperItem]);

    return null;
}
