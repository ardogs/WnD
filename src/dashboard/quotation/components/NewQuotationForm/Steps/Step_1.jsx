import { Select, Col, Row, Flex, Image, Form, Input } from "antd";

import Doc_0 from "../../../../../assets/Doc_0.png";
import Doc_1 from "../../../../../assets/Doc_1.png";
import Doc_2 from "../../../../../assets/Doc_2.png";
import { useState } from "react";


const options = [
  { value: 0, label: '503-18-35279' },
  { value: 1, label: '514-20-20987' },
  { value: 2, label: '798-68-00335' },

];

const defaultOption = 1;

export const Step_1 = () => {

  const handleChange = (value) => {
    switch (value) {
      case 0:
        setImg(Doc_0);
        break;
      case 1:
        setImg(Doc_1);
        break;
      case 2:
        setImg(Doc_2);
        break;
    }
  }

  const [img, setImg] = useState(Doc_1);


  return (
    <Row style={{ marginTop: '25px' }}>
      <Col xs={24} xxl={10} style={{ Height: '100vh' }}>
        <Flex justify="center" align="center" style={{ height: '100%', width: '100%', gap: 25 }} vertical>
          <Select defaultValue={defaultOption} onChange={handleChange} placeholder="Selección de documento" options={options} />
          <Image width={"45%"} src={img} />
        </Flex>
      </Col>

      <Col xs={24} xxl={14} >
        <Row gutter={[16, 0]}>

          <Col xs={24} xxl={24}>
            <Form.Item label="Registration Number" name="registration_number" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} xxl={12}>
            <Form.Item label="Nombre comercial" name="comercial_name" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} xxl={12}>
            <Form.Item label="Representante legal" name="legal_representative" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} xxl={24}>
            <Form.Item label="Dirección" name="address" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} xxl={12}>
            <Form.Item label="Rubro" name="type_of_business" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} xxl={12}>
            <Form.Item label="Categoria" name="category" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} xxl={24}>
            <Form.Item label="Telefono/fax" name="tel_fax" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
          </Col>

          <Col xs={24} xxl={24}>
            <Form.Item label="Sitio Web" name="website" rules={[{ required: true, message: 'Please input your username!' }]}>
              <Input />
            </Form.Item>
          </Col>

        </Row>
      </Col>
    </Row>
  );
}
