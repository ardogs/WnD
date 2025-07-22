import { Col, Row } from 'antd';
import { CustomFastField, CustomInputNumberField } from '../../../CustomInputs';
import { AutoCalculateSupplyPrice } from './AutoCalculateSupplyPrice';
import { AutoCalculateVatPerItem } from './AutoCalculateVatPerItem';
import { MinusCircleOutlined } from '@ant-design/icons';
import { useTheme } from '../../../../../../hooks';
import { useSelector } from 'react-redux';
import React, { useCallback } from 'react';

// eslint-disable-next-line react/display-name
export const InputRow = React.memo(({ index, remove, arrayName }) => {

    const handleRemove = useCallback(() => remove(index), [remove, index]);
    const { fontSize, colors: { red } } = useTheme();
    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateVatperItem, calculateSupplyPrice } = newQuotation.step2;
    const showLabel = (index < 1);


    return (
        <Row key={index} gutter={[8, 16]}>
            <Col xs={24} xxl={3}>
                <CustomFastField label={(showLabel) ? "Descripción" : ""} name={`${arrayName}[${index}].description`} />
            </Col>

            <Col xs={24} xxl={4}>
                <CustomFastField label={(showLabel) ? "Especificación del producto" : ""} name={`${arrayName}[${index}].product_especification`} />
            </Col>

            <Col xs={24} xxl={2}>
                <CustomFastField label={(showLabel) ? "Unit" : ""} name={`${arrayName}[${index}].unit`} />
            </Col>

            <Col xs={24} xxl={2}>
                <CustomInputNumberField label={(showLabel) ? "Cantidad" : ""} name={`${arrayName}[${index}].amount`} />
            </Col>

            <Col xs={24} xxl={3}>
                <CustomInputNumberField label={(showLabel) ? "Precio unitario" : ""} name={`${arrayName}[${index}].unit_price`} />
            </Col>

            <Col xs={24} xxl={3}>
                <CustomInputNumberField label={(showLabel) ? "Valor del suministro" : ""} name={`${arrayName}[${index}].supply_price`} disabled={calculateSupplyPrice} />
            </Col>

            <Col xs={24} xxl={2}>
                <CustomInputNumberField label={(showLabel) ? "IVA" : ""} name={`${arrayName}[${index}].vat`} disabled={calculateVatperItem} />
            </Col>

            {calculateSupplyPrice && <AutoCalculateSupplyPrice index={index} />}
            {calculateVatperItem && <AutoCalculateVatPerItem index={index} calculateVatperItem={calculateVatperItem} />}

            <Col xs={24} xxl={4}>
                <CustomFastField label={(showLabel) ? "Observaciones" : ""} name={`${arrayName}[${index}].observations`} />
            </Col>

            <Col xs={24} xxl={1} style={{ display: "flex", alignItems: (showLabel) ? "center" : "flex-start", justifyContent: "center" }}>
                <MinusCircleOutlined onClick={handleRemove} style={{ fontSize: fontSize, color: red, cursor: "pointer" }} />
            </Col>
        </Row>
    )
});

