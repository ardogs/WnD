import { Button, Checkbox, Col, Divider, Flex, Row, Typography, Form } from 'antd'
import { InputRow } from './InputRow'
import { FieldArray, useFormikContext } from 'formik'
import { PlusOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { setAutomaticCalculation } from '../../../../../../store/quotation'
import React from 'react'
import { useUITranslation } from '../../../../../../hooks'

// eslint-disable-next-line react/display-name
const AutomaticCalculation = React.memo(({ calculateSupplyPrice, calculateVatperItem, dispatch, t }) => {
    return (
        <Flex justify="flex-end" align="flex-end" style={{ marginBottom: '10px', gap: 20 }}>
            <Text >{t("dashboard.quotations.newQuotation.steps.step2.itemDetails.AutomaticCalculation.title")}: </Text>
            <Checkbox checked={calculateSupplyPrice} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateSupplyPrice", value: e.target.checked }))}>{t("dashboard.quotations.newQuotation.steps.step2.itemDetails.AutomaticCalculation.supplyPrice")}</Checkbox>
            <Checkbox checked={calculateVatperItem} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateVatperItem", value: e.target.checked }))}>{t("dashboard.quotations.newQuotation.steps.step2.itemDetails.AutomaticCalculation.vat")}</Checkbox>
        </Flex>
    )
});

const { Text } = Typography;
const initialItem = { description: '', product_especification: '', unit: '', amount: 1, unit_price: 1, supply_price: 1, vat: 1, observations: '' };

export const ItemList = () => {
    const { values } = useFormikContext();
    const dispatch = useDispatch();
    const { newQuotation } = useSelector(state => state.quotation);
    const { calculateVatperItem, calculateSupplyPrice } = newQuotation.step2;
    const { t } = useUITranslation();

    return (
        <Row> 
            <Divider orientation="left" style={{ marginTop: "50px" }}>{t("dashboard.quotations.newQuotation.steps.step2.itemDetails.title")}</Divider>
            <Col xs={24} xxl={24}>
                <AutomaticCalculation calculateSupplyPrice={calculateSupplyPrice} calculateVatperItem={calculateVatperItem} dispatch={dispatch} t={t}/>
            </Col>

            <Col xs={24} xxl={24}>
                <FieldArray name="quotation_item">
                    {({ push, remove }) => (
                        <>
                            {values.quotation_item.map((_, index) => (<InputRow key={index} index={index} remove={remove} arrayName="quotation_item" />))}
                            <Form.Item> <Button type="text" icon={<PlusOutlined />} onClick={() => push(initialItem)} block > {t("dashboard.quotations.newQuotation.steps.step2.itemDetails.addItem")} </Button> </Form.Item>
                        </>
                    )}
                </FieldArray>
            </Col>
        </Row>
    )
}
