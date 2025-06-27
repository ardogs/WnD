import { Select, Col, Row, Flex, Image, Form, Input, DatePicker, Divider, Space, Button } from "antd";

import Doc_0 from "../../../../../assets/Doc_0.png";
import Doc_1 from "../../../../../assets/Doc_1.png";
import Doc_2 from "../../../../../assets/Doc_2.png";
import { useState } from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export const Step_2 = () => {

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <Row style={{ marginTop: '25px' }} gutter={[16, 0]}>

      {/* <Col span={14} > */}
      {/* <Row gutter={[16, 0]}> */}

      <Col xs={24} xxl={6}>
        <Form.Item label="Fecha" name="date" rules={[{ required: true, message: 'Please input your username!' }]}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
      </Col>

      <Col xs={24} xxl={6}>
        <Form.Item label="Cliente" name="customer" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
      </Col>

      <Col xs={24} xxl={6}>
        <Form.Item label="Concepto del trabajo" name="work_concept" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
      </Col>

      <Col xs={24} xxl={6}>
        <Form.Item label="Duración del trabajo" name="duration_of_work" rules={[{ required: true, message: 'Please input your username!' }]}>
          <Input />
        </Form.Item>
      </Col>

      <Divider orientation="left">Información detallada </Divider>

      <Col xs={24} xxl={24}>

        <Form.List name="quotation_item">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (

                <Row key={key} gutter={[16, 0]}>

                  {/* <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align=""> */}
                  <Col xs={24} xxl={3}>
                    <Form.Item {...restField} name={[name, 'description']} rules={[{ required: true, message: 'Missing first name' }]} label="Descripción" >
                      <Input />
                    </Form.Item>
                  </Col>

                  <Col xs={24} xxl={3}>
                    <Form.Item {...restField} name={[name, 'product_especification']} rules={[{ required: true, message: 'Missing last name' }]} label="Especificación del producto">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col xs={24} xxl={2}>
                    <Form.Item {...restField} name={[name, 'unit']} rules={[{ required: true, message: 'Missing last name' }]} label="Unit">
                      <Input />
                    </Form.Item>

                  </Col>
                  <Col xs={24} xxl={2}>
                    <Form.Item {...restField} name={[name, 'amount']} rules={[{ required: true, message: 'Missing last name' }]} label="Cantidad">
                      <Input />
                    </Form.Item>

                  </Col>
                  <Col xs={24} xxl={2}>
                    <Form.Item {...restField} name={[name, 'unit_price']} rules={[{ required: true, message: 'Missing last name' }]} label="Precio unitario">
                      <Input />
                    </Form.Item>

                  </Col>
                  <Col xs={24} xxl={3}>
                    <Form.Item {...restField} name={[name, 'supply_price']} rules={[{ required: true, message: 'Missing last name' }]} label="Valor del suministro">
                      <Input />
                    </Form.Item>

                  </Col>
                  <Col xs={24} xxl={3}>
                    <Form.Item {...restField} name={[name, 'vat']} rules={[{ required: true, message: 'Missing last name' }]} label="IVA">
                      <Input />
                    </Form.Item>

                  </Col>
                  <Col xs={24} xxl={5}>
                    <Form.Item {...restField} name={[name, 'observations']} label="Observaciones">
                      <Input />
                    </Form.Item>
                    
                  </Col>

                  <MinusCircleOutlined onClick={() => remove(name)} />
                  {/* </Col> */}


                  {/* </Space> */}

                </Row>


              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add item
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Col>

      {/* <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        autoComplete="off"
      > */}


      {/* <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}

      {/* </Form> */}



      {/* </Row> */}
      {/* </Col> */}
    </Row>
  );
}
