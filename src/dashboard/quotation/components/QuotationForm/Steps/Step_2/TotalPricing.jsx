import { Checkbox, Col, Divider, Flex, Row, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CustomFastField, CustomInputNumberField } from '../../../CustomInputs';
import { AutoCalculateTotalSummary } from './AutoCalculateTotalSummary';
import { setAutomaticCalculation } from '../../../../../../store/quotation';
import React from 'react';
import { useUITranslation } from '../../../../../../hooks';

const { Text } = Typography;

// eslint-disable-next-line react/display-name
const AutomaticCalculation = React.memo(({ calculatePriceBeforeTaxes, calculateTotalVat, calculateTotalPrice, t }) => {

    const dispatch = useDispatch();

    const handleCheckboxChange = (key) => (e) => {
        dispatch(setAutomaticCalculation({ key, value: e.target.checked }));
    };

    return (
        <Flex justify="flex-end" align="center" style={{ marginBottom: '10px', gap: 20 }}>
            <Text >{t("dashboard.quotations.newQuotation.steps.step2.totalPricing.AutomaticCalculation.title")}: </Text>
            <Checkbox checked={calculatePriceBeforeTaxes} onChange={handleCheckboxChange("calculatePriceBeforeTaxes")}>{t("dashboard.quotations.newQuotation.steps.step2.totalPricing.AutomaticCalculation.priceBeforeTaxes")}</Checkbox>
            <Checkbox checked={calculateTotalVat} onChange={handleCheckboxChange("calculateTotalVat")}>{t("dashboard.quotations.newQuotation.steps.step2.totalPricing.AutomaticCalculation.totalVat")}</Checkbox>
            <Checkbox checked={calculateTotalPrice} onChange={handleCheckboxChange("calculateTotalPrice")}>{t("dashboard.quotations.newQuotation.steps.step2.totalPricing.AutomaticCalculation.totalPrice")}</Checkbox>
        </Flex>
    )
});

export const TotalPricing = () => {

    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateTotalVat, calculatePriceBeforeTaxes, calculateTotalPrice } = newQuotation.step2;
    const dispatch = useDispatch();
    const { t } = useUITranslation();
    return (

        <Row gutter={[16, 0]}>
            <Divider orientation="left" style={{ marginTop: "50px" }}>{t("dashboard.quotations.newQuotation.steps.step2.totalPricing.title")}</Divider>

            <AutoCalculateTotalSummary />

            <Col xs={24} xxl={24}>
                <AutomaticCalculation calculatePriceBeforeTaxes={calculatePriceBeforeTaxes} calculateTotalPrice={calculateTotalPrice} calculateTotalVat={calculateTotalVat} dispatch={dispatch} t={t}/>
            </Col>
            <Col xs={24} xxl={6}>
                <CustomInputNumberField label={t("dashboard.quotations.newQuotation.steps.step2.totalPricing.priceBeforeTaxes")} name="price_before_taxes" disabled={calculatePriceBeforeTaxes} />
            </Col>

            <Col xs={24} xxl={6}>
                <CustomInputNumberField label={t("dashboard.quotations.newQuotation.steps.step2.totalPricing.vatTotal")} name="vat_total" disabled={calculateTotalVat} />
            </Col>

            <Col xs={24} xxl={6}>
                <CustomInputNumberField label={t("dashboard.quotations.newQuotation.steps.step2.totalPricing.totalPriceNumber")} name="total_price_number" disabled={calculateTotalPrice} />
            </Col>

            <Col xs={24} xxl={6}>
                <CustomFastField label={t("dashboard.quotations.newQuotation.steps.step2.totalPricing.totalPriceLetter")} name="total_price_letter" />
            </Col>
        </Row>
    )
}
