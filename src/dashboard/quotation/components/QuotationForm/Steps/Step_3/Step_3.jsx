import { Divider, Flex, Row, Table, Typography, Col } from "antd";
import { useFormikContext } from "formik";
import { useMemo } from "react";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const numberFormat = value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const Step_3 = () => {

  const { values } = useFormikContext();

  const columns_table1 = useMemo(() => ([
    { title: 'Descripción', dataIndex: 'description', key: 'description', align: 'right' },
    { title: 'Especificación del producto', dataIndex: 'product_especification', key: 'product_especification', align: 'right' },
    { title: 'Unit', dataIndex: 'unit', key: 'unit', align: 'right' },
    { title: 'Cantidad', dataIndex: 'amount', key: 'amount', align: 'right', render: numberFormat },
    { title: 'Precio unitario', dataIndex: 'unit_price', key: 'unit_price', align: 'right', render: numberFormat },
    { title: 'Valor del suministro', dataIndex: 'supply_price', key: 'supply_price', align: 'right', render: numberFormat },
    { title: 'IVA', dataIndex: 'vat', key: 'vat', align: 'right', render: numberFormat },
    { title: 'Observaciones', dataIndex: 'observations', key: 'observations', align: 'right' },
  ]), []);

  const columns_table2 = useMemo(() => ([
    { title: 'Precio antes de impuestos', dataIndex: 'price_before_taxes', key: 'price_before_taxes', align: 'right', render: numberFormat },
    { title: 'Iva total', dataIndex: 'vat_total', key: 'vat_total', align: 'right', render: numberFormat },
    { title: 'Precio total', dataIndex: 'total_price_number', key: 'total_price_number', align: 'right', render: numberFormat },
    { title: 'Precio en letras', dataIndex: 'total_price_letter', key: 'total_price_letter', align: 'right' },
  ]), []);

  const dataSource = useMemo(() =>
    (values.quotation_item || []).map((item, index) => ({ key: index, ...item })),
    [values.quotation_item]
  );

  const dataSource_table2 = useMemo(() => ([{
    key: '1',
    price_before_taxes: values.price_before_taxes,
    vat_total: values.vat_total,
    total_price_number: values.total_price_number,
    total_price_letter: values.total_price_letter
  }]), [values.price_before_taxes, values.vat_total, values.total_price_number, values.total_price_letter]);

  const { suppliers } = useSelector(state => state.quotation);
  const supplierInfo = suppliers.find(obj => obj.registration_number === values.registration_number)

  return (
    <div style={{ marginTop: '60px', }}>
      <Row style={{ maxWidth: '85%', border: '1px solid #bfbfbf', margin: '0 auto', borderRadius: "10px" }} gutter={[16, 0]}>
        <Flex justify="center" align="center" style={{ width: '100%', padding: '20px', borderBottom: '1px solid #bfbfbf' }}>
          <Title level={2} style={{ display: "flex", alignContent: "center" }}>Resumen de la cotización</Title>
        </Flex>

        <Col lg={24} xxl={10} >
          <Divider orientation="left" size="small" style={{ marginTop: "40px", marginBottom: "20px" }}>Información general </Divider>
          <Title level={5}>Fecha: <Text type="secondary">{values.date}</Text></Title>
          <Title level={5}>Cliente: <Text type="secondary">{values.customer}</Text></Title>
          <Title level={5}>Concepto del trabajo: <Text type="secondary">{values.work_concept}</Text></Title>
          <Title level={5}>Duración del trabajo: <Text type="secondary">{values.duration_of_work}</Text></Title>
        </Col>

        <Col lg={24} xxl={14}>
          <Divider orientation="left" size="small" style={{ marginTop: "40px", marginBottom: "20px" }}>Información del proveedor </Divider>
          <Title level={5}>Número de registro: <Text type="secondary">{supplierInfo.registration_number}</Text></Title>
          <Title level={5}>Nombre comercial: <Text type="secondary">{supplierInfo.comercial_name}</Text></Title>
          <Title level={5}>Representante legal: <Text type="secondary">{supplierInfo.legal_representative}</Text></Title>
          <Title level={5}>Dirección: <Text type="secondary">{supplierInfo.address}</Text></Title>
          <Title level={5}>Rubro: <Text type="secondary">{supplierInfo.type_of_business}</Text></Title>
          <Title level={5}>Categoria: <Text type="secondary">{supplierInfo.category}</Text></Title>
          <Title level={5}>Telefono/fax: <Text type="secondary">{supplierInfo.tel_fax}</Text></Title>
          <Title level={5}>Sitio Web: <Text type="secondary">{supplierInfo.website}</Text></Title>
        </Col>

        <Col span={24}>
          <Divider orientation="left" size="small" style={{ marginTop: "60px", marginBottom: "20px" }}>Información detallada de los suministros utilizados </Divider>
          <Table columns={columns_table1} dataSource={dataSource} pagination={false} />
        </Col>

        <Col span={24} style={{ marginBottom: "50px" }}>
          <Divider orientation="left" size="small" style={{ marginTop: "60px", marginBottom: "20px" }}>Precios finales de la cotización</Divider>
          <Table columns={columns_table2} dataSource={dataSource_table2} pagination={false} />
        </Col>
      </Row>
    </div >
  )
}
