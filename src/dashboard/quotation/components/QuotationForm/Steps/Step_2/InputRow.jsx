import { Col, Row } from 'antd';
import { CustomFastField, CustomInputNumberField } from '../../../CustomInputs';
import { AutoCalculateSupplyPrice } from './AutoCalculateSupplyPrice';
import { AutoCalculateVatPerItem } from './AutoCalculateVatPerItem';
import { MinusCircleOutlined } from '@ant-design/icons';
import { useTheme } from '../../../../../../hooks';
import { useSelector } from 'react-redux';

export const InputRow = ({ index, remove, arrayName }) => {


    const { fontSize, colors: { red } } = useTheme();
    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateVatperItem, calculateSupplyPrice } = newQuotation.step2

    return (
        <Row key={index} gutter={[8, 16]}>
            <Col xs={24} xxl={3}>
                <CustomFastField label={(index < 1) ? "Descripción" : ""} name={`${arrayName}[${index}].description`} />
            </Col>

            <Col xs={24} xxl={4}>
                <CustomFastField label={(index < 1) ? "Especificación del producto" : ""} name={`${arrayName}[${index}].product_especification`} />
            </Col>

            <Col xs={24} xxl={2}>
                <CustomFastField label={(index < 1) ? "Unit" : ""} name={`${arrayName}[${index}].unit`} />
            </Col>

            <Col xs={24} xxl={2}>
                <CustomInputNumberField label={(index < 1) ? "Cantidad" : ""} name={`${arrayName}[${index}].amount`} />
            </Col>

            <Col xs={24} xxl={3}>
                <CustomInputNumberField label={(index < 1) ? "Precio unitario" : ""} name={`${arrayName}[${index}].unit_price`} />
            </Col>

            <Col xs={24} xxl={3}>
                <CustomInputNumberField label={(index < 1) ? "Valor del suministro" : ""} name={`${arrayName}[${index}].supply_price`} disabled={calculateSupplyPrice} />
            </Col>

            <Col xs={24} xxl={2}>
                <CustomInputNumberField label={(index < 1) ? "IVA" : ""} name={`${arrayName}[${index}].vat`} disabled={calculateVatperItem} />
            </Col>

            <AutoCalculateSupplyPrice index={index} />
            <AutoCalculateVatPerItem index={index} calculateVatperItem={calculateVatperItem} />

            <Col xs={24} xxl={4}>
                <CustomFastField label={(index < 1) ? "Observaciones" : ""} name={`${arrayName}[${index}].observations`} />
            </Col>

            <Col xs={24} xxl={1} style={{ display: "flex", alignItems: (index < 1) ? "center" : "flex-start", justifyContent: "center" }}>
                <MinusCircleOutlined onClick={() => remove(index)} style={{ fontSize: fontSize, color: red, cursor: "pointer" }} />
            </Col>
        </Row>
    )
};

