import { Checkbox, Col, Divider, Flex, Row, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CustomFastField, CustomInputNumberField } from '../../../CustomInputs';
import { AutoCalculateTotalSummary } from './AutoCalculateTotalSummary';
import { setAutomaticCalculation } from '../../../../../../store/quotation';
import React from 'react';

const { Text } = Typography;

// eslint-disable-next-line react/display-name
const AutomaticCalculation = React.memo(({ calculatePriceBeforeTaxes, calculateTotalVat, calculateTotalPrice }) => {

    const dispatch = useDispatch();

    const handleCheckboxChange = (key) => (e) => {
        dispatch(setAutomaticCalculation({ key, value: e.target.checked }));
    };

    return (
        <Flex justify="flex-end" align="center" style={{ marginBottom: '10px', gap: 20 }}>
            <Text >Calcular automaticamente: </Text>
            <Checkbox checked={calculatePriceBeforeTaxes} onChange={handleCheckboxChange("calculatePriceBeforeTaxes")}>Precio antes de impuestos</Checkbox>
            <Checkbox checked={calculateTotalVat} onChange={handleCheckboxChange("calculateTotalVat")}> VAT total</Checkbox>
            <Checkbox checked={calculateTotalPrice} onChange={handleCheckboxChange("calculateTotalPrice")}> Precio total</Checkbox>
        </Flex>
    )
});

export const TotalPricing = () => {

    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateTotalVat, calculatePriceBeforeTaxes, calculateTotalPrice } = newQuotation.step2;
    const dispatch = useDispatch();
    return (

        <Row gutter={[16, 0]}>
            <Divider orientation="left" style={{ marginTop: "50px" }}>Costos totales de la cotización </Divider>

            <AutoCalculateTotalSummary />

            <Col xs={24} xxl={24}>
                <AutomaticCalculation calculatePriceBeforeTaxes={calculatePriceBeforeTaxes} calculateTotalPrice={calculateTotalPrice} calculateTotalVat={calculateTotalVat} dispatch={dispatch} />
            </Col>
            <Col xs={24} xxl={6}>
                <CustomInputNumberField label="Precio antes de impuestos" name="price_before_taxes" disabled={calculatePriceBeforeTaxes} />
            </Col>

            <Col xs={24} xxl={6}>
                <CustomInputNumberField label="Iva total" name="vat_total" disabled={calculateTotalVat} />
            </Col>

            <Col xs={24} xxl={6}>
                <CustomInputNumberField label="Precio total" name="total_price_number" disabled={calculateTotalPrice} />
            </Col>

            <Col xs={24} xxl={6}>
                <CustomFastField label="Precio en letras" name="total_price_letter" />
            </Col>
        </Row>
    )
}
