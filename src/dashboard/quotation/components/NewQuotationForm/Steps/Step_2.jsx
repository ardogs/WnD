import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAutomaticCalculation } from "../../../../../store/quotation";
import { FieldArray, useFormikContext } from "formik";
import { Col, Row, Form, Divider, Button, Flex, Checkbox, Typography } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { CustomDatePickerField, CustomFastField, CustomInputNumberField } from "../../CustomInputs";
import { useTheme } from "../../../../../hooks";
import { debounce } from "lodash";


// eslint-disable-next-line react/display-name
const InputRow = React.memo(({ index, remove, arrayName }) => {

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
});

const AutoCalculateSupplyPrice = ({ index }) => {
  const { values, setFieldValue } = useFormikContext();
  const { amount, unit_price } = values.quotation_item?.[index] || {};

  const calculate = useCallback(
    debounce((amount, unit_price) => {
      if (!isNaN(amount) && !isNaN(unit_price)) {
        const subtotal = (parseFloat(amount) * parseFloat(unit_price)) || 0;
        setFieldValue(`quotation_item[${index}].supply_price`, subtotal);
      }
    }, 300),
    [index, setFieldValue]
  );

  useEffect(() => {
    calculate(amount, unit_price);
  }, [amount, unit_price, calculate]);

  return null;
};

const AutoCalculateVatPerItem = ({ index, calculateVatperItem }) => {
  const { values, setFieldValue } = useFormikContext();
  const { supply_price } = values.quotation_item?.[index] || {};

  const calculate = useCallback(
    debounce((price) => {
      if (!isNaN(price) && calculateVatperItem) {
        const vat = ((10 / 100) * parseFloat(price)) + parseFloat(price) || 0;
        setFieldValue(`quotation_item[${index}].vat`, Math.floor(vat));
      }
    }, 300),
    [index, setFieldValue, calculateVatperItem]
  );

  useEffect(() => {
    calculate(supply_price);
  }, [supply_price, calculate]);

  return null;
};

const AutoCalculateTotalSummary = () => {
  const { values, setFieldValue } = useFormikContext();
  const items = values.quotation_item || [];

  useEffect(() => {
    // Cálculos base
    const priceBeforeTaxes = items.reduce((acc, item) => acc + (parseFloat(item.supply_price) || 0), 0);
    const vatTotal = items.reduce((acc, item) => acc + (parseFloat(item.vat) || 0), 0);
    const totalPrice = priceBeforeTaxes + vatTotal;

    // Setear valores
    setFieldValue('price_before_taxes', priceBeforeTaxes);
    setFieldValue('vat_total', vatTotal);
    setFieldValue('total_price_number', totalPrice);
  }, [items, setFieldValue]);

  return null; // Es solo lógica
};

const { Text } = Typography;

export const Step_2 = ({ values }) => {

  const { fontSize, colors: { red } } = useTheme();
  const dispatch = useDispatch();
  const { newQuotation } = useSelector(state => state.quotation);
  const { calculateVatperItem, calculateTotalVat, calculateSupplyPrice, calculatePriceBeforeTaxes, calculateTotalPrice } = newQuotation.step2

  return (
    <Row style={{ marginTop: '25px' }} gutter={[16, 0]}>
      <Col xs={24} xxl={6}>
        <CustomDatePickerField label="Fecha" name="date" />
      </Col>

      <Col xs={24} xxl={6}>
        <CustomFastField label="Cliente" name="customer" />
      </Col>

      <Col xs={24} xxl={6}>
        <CustomFastField label="Concepto del trabajo" name="work_concept" />
      </Col>

      <Col xs={24} xxl={6}>
        <CustomFastField label="Duración del trabajo" name="duration_of_work" />
      </Col>

      <Divider orientation="left">Información detallada por item </Divider>

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
                <Button type="dashed" icon={<PlusOutlined />} onClick={() => push({ description: '', product_especification: '', unit: '', amount: 1, unit_price: 1, supply_price: 1, vat: 1, observations: '' })} block >
                  Agregar ítem
                </Button>
              </Form.Item>
            </>
          )}
        </FieldArray>
      </Col>

      <Divider orientation="left">Costos totales de la cotización </Divider>

      <AutoCalculateTotalSummary />

      <Col xs={24} xxl={24}>
        <Flex justify="flex-end" align="center" style={{ marginBottom: '10px', gap: 20 }}>
          <Text >Calcular automaticamente: </Text>
          <Checkbox checked={calculatePriceBeforeTaxes} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculatePriceBeforeTaxes", value: e.target.checked }))}>Precio antes de impuestos</Checkbox>
          <Checkbox checked={calculateTotalVat} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateTotalVat", value: e.target.checked }))}> VAT total</Checkbox>
          <Checkbox checked={calculateTotalPrice} onChange={(e) => dispatch(setAutomaticCalculation({ key: "calculateTotalPrice", value: e.target.checked }))}> Precio total</Checkbox>
        </Flex>
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
  );
}
