import { Button, Checkbox, Col, Divider, Flex, Row, Typography, Form } from 'antd'
import { InputRow } from './InputRow'
import { FieldArray, useFormikContext } from 'formik'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setAutomaticCalculation } from '../../../../../../store/quotation'
import React from 'react'

// eslint-disable-next-line react/display-name
const AutomaticCalculation = React.memo(({ calculateSupplyPrice, calculateVatperItem, dispatch }) => {
    return (
        <Flex justify="flex-end" align="flex-end" style={{ marginBottom: '10px', gap: 20 }}>
            <Text >Calcular automaticamente: </Text>
            <Checkbox checked={calculateSupplyPrice} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateSupplyPrice", value: e.target.checked }))}>valor del suministro</Checkbox>
            <Checkbox checked={calculateVatperItem} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateVatperItem", value: e.target.checked }))}> VAT</Checkbox>
        </Flex>
    )
});

const { Text } = Typography;
const initialItem = { description: '', product_especification: '', unit: '', amount: 1, unit_price: 1, supply_price: 1, vat: 1, observations: '' };

export const ItemList = () => {
    const { values } = useFormikContext();
    const dispatch = useDispatch();
    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateVatperItem, calculateSupplyPrice } = newQuotation.step2

    return (
        <Row>
            <Divider orientation="left" style={{ marginTop: "50px" }}>Información detallada por item </Divider>
            <Col xs={24} xxl={24}>
                <AutomaticCalculation calculateSupplyPrice={calculateSupplyPrice} calculateVatperItem={calculateVatperItem} dispatch={dispatch} />
            </Col>

            <Col xs={24} xxl={24}>
                <FieldArray name="quotation_item">
                    {({ push, remove }) => (
                        <>
                            {values.quotation_item.map((_, index) => (<InputRow key={index} index={index} remove={remove} arrayName="quotation_item" />))}
                            <Form.Item> <Button type="text" icon={<PlusOutlined />} onClick={() => push(initialItem)} block > Agregar ítem </Button> </Form.Item>
                        </>
                    )}
                </FieldArray>
            </Col>
        </Row>
    )
}
