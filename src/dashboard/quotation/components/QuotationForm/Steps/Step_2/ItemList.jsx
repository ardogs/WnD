import { Button, Checkbox, Col, Divider, Flex, Row, Typography, Form } from 'antd'
import { InputRow } from './InputRow'
import { FieldArray, useFormikContext } from 'formik'
import { PlusOutlined } from '@ant-design/icons'
import { AutoCalculateTotalSummary } from './AutoCalculateTotalSummary'
import { useDispatch, useSelector } from 'react-redux'
import { setAutomaticCalculation } from '../../../../../../store/quotation'
import { useTheme } from '../../../../../../hooks'


const { Text } = Typography;
const initialItem = { description: '', product_especification: '', unit: '', amount: 1, unit_price: 1, supply_price: 1, vat: 1, observations: '' }
export const ItemList = () => {
    const { fontSize, colors: { red } } = useTheme();
    const { values } = useFormikContext();
    const dispatch = useDispatch();
    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateVatperItem, calculateTotalVat, calculateSupplyPrice, calculatePriceBeforeTaxes, calculateTotalPrice } = newQuotation.step2

    return (

        <Row>
            <Divider orientation="left" style={{ marginTop: "50px" }}>Información detallada por item </Divider>

            <Col xs={24} xxl={24}>
                <Flex justify="flex-end" align="center" style={{ marginBottom: '10px', gap: 20 }}>
                    <Text >Calcular automaticamente: </Text>
                    <Checkbox checked={calculateSupplyPrice} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateSupplyPrice", value: e.target.checked }))}>valor del suministro</Checkbox>
                    <Checkbox checked={calculateVatperItem} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateVatperItem", value: e.target.checked }))}> VAT</Checkbox>
                </Flex>
                <FieldArray name="quotation_item">
                    {({ push, remove }) => (
                        <>
                            {values.quotation_item.map((_, index) => (
                                <InputRow key={index} index={index} remove={remove} arrayName="quotation_item" fontSize={fontSize} color={red} />
                            ))}

                            <Form.Item>
                                <Button type="dashed" icon={<PlusOutlined />} onClick={() => push(initialItem)} block >
                                    Agregar ítem
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </FieldArray>
            </Col>

            <Divider orientation="left" style={{ marginTop: "50px" }}>Costos totales de la cotización </Divider>

            <AutoCalculateTotalSummary />

            <Col xs={24} xxl={24}>
                <Flex justify="flex-end" align="center" style={{ marginBottom: '10px', gap: 20 }}>
                    <Text >Calcular automaticamente: </Text>
                    <Checkbox checked={calculatePriceBeforeTaxes} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculatePriceBeforeTaxes", value: e.target.checked }))}>Precio antes de impuestos</Checkbox>
                    <Checkbox checked={calculateTotalVat} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateTotalVat", value: e.target.checked }))}> VAT total</Checkbox>
                    <Checkbox checked={calculateTotalPrice} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateTotalPrice", value: e.target.checked }))}> Precio total</Checkbox>
                </Flex>
            </Col>
        </Row>
    )
}
