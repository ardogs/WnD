import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';
import { CustomFastField, CustomInputNumberField } from '../../../CustomInputs';

export const TotalPricing = () => {

    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateTotalVat, calculatePriceBeforeTaxes, calculateTotalPrice } = newQuotation.step2;

    return (
        <Row style={{ marginTop: '60px' }} gutter={[16, 0]}>
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
