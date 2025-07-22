import { Col, Row } from 'antd';
import { CustomFastField, CustomInputNumberField } from '../../../CustomInputs';
import { AutoCalculateSupplyPrice } from './AutoCalculateSupplyPrice';
import { AutoCalculateVatPerItem } from './AutoCalculateVatPerItem';
import { MinusCircleOutlined } from '@ant-design/icons';
import { useTheme, useUITranslation } from '../../../../../../hooks';
import { useSelector } from 'react-redux';
import React, { useCallback } from 'react';

// eslint-disable-next-line react/display-name
export const InputRow = React.memo(({ index, remove, arrayName }) => {

    const handleRemove = useCallback(() => remove(index), [remove, index]);
    const { fontSize, colors: { red } } = useTheme();
    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateVatperItem, calculateSupplyPrice } = newQuotation.step2;
    const showLabel = (index < 1);
    const { t } = useUITranslation();


    return (
        <Row key={index} gutter={[8, 16]}>
            <Col xs={24} xxl={3}>
                <CustomFastField label={(showLabel) ? t("dashboard.quotations.newQuotation.steps.step2.itemDetails.description") : ""} name={`${arrayName}[${index}].description`} />
            </Col>

            <Col xs={24} xxl={4}>
                <CustomFastField label={(showLabel) ? t("dashboard.quotations.newQuotation.steps.step2.itemDetails.productEspecification") : ""} name={`${arrayName}[${index}].product_especification`} />
            </Col>

            <Col xs={24} xxl={2}>
                <CustomFastField label={(showLabel) ? t("dashboard.quotations.newQuotation.steps.step2.itemDetails.unit") : ""} name={`${arrayName}[${index}].unit`} />
            </Col>

            <Col xs={24} xxl={2}>
                <CustomInputNumberField label={(showLabel) ? t("dashboard.quotations.newQuotation.steps.step2.itemDetails.amount") : ""} name={`${arrayName}[${index}].amount`} />
            </Col>

            <Col xs={24} xxl={3}>
                <CustomInputNumberField label={(showLabel) ? t("dashboard.quotations.newQuotation.steps.step2.itemDetails.unitPrice") : ""} name={`${arrayName}[${index}].unit_price`} />
            </Col>

            <Col xs={24} xxl={3}>
                <CustomInputNumberField label={(showLabel) ? t("dashboard.quotations.newQuotation.steps.step2.itemDetails.supplyPrice") : ""} name={`${arrayName}[${index}].supply_price`} disabled={calculateSupplyPrice} />
            </Col>

            <Col xs={24} xxl={2}>
                <CustomInputNumberField label={(showLabel) ? t("dashboard.quotations.newQuotation.steps.step2.itemDetails.vat") : ""} name={`${arrayName}[${index}].vat`} disabled={calculateVatperItem} />
            </Col>

            {calculateSupplyPrice && <AutoCalculateSupplyPrice index={index} />}
            {calculateVatperItem && <AutoCalculateVatPerItem index={index} calculateVatperItem={calculateVatperItem} />}

            <Col xs={24} xxl={4}>
                <CustomFastField label={(showLabel) ? t("dashboard.quotations.newQuotation.steps.step2.itemDetails.observations") : ""} name={`${arrayName}[${index}].observations`} />
            </Col>

            <Col xs={24} xxl={1} style={{ display: "flex", alignItems: (showLabel) ? "center" : "flex-start", justifyContent: "center" }}>
                <MinusCircleOutlined onClick={handleRemove} style={{ fontSize: fontSize, color: red, cursor: "pointer" }} />
            </Col>
        </Row>
    )
});

