import { Col, Divider, Flex, Row, Table, Typography } from "antd";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

const columns_table1 = [
  {
    title: 'Descripción',
    dataIndex: 'description',
    key: 'description',
    align: 'right',
  },
  {
    title: 'Especificación del producto',
    dataIndex: 'product_especification',
    key: 'product_especification',
    align: 'right',
  },
  {
    title: 'Unit',
    dataIndex: 'unit',
    key: 'unit',
    align: 'right',
  },
  {
    title: 'Cantidad',
    dataIndex: 'amount',
    key: 'amount',
    align: 'right',
    render: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
  {
    title: 'Precio unitario',
    dataIndex: 'unit_price',
    key: 'unit_price',
    align: 'right',
    render: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
  {
    title: 'Valor del suministro',
    dataIndex: 'supply_price',
    key: 'supply_price',
    align: 'right',
    render: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
  {
    title: 'IVA',
    dataIndex: 'vat',
    key: 'vat',
    align: 'right',
    render: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
  {
    title: 'Observaciones',
    dataIndex: 'observations',
    key: 'observations',
    align: 'right',
  }

];

const columns_table2 = [
  {
    title: 'Precio antes de impuestos',
    dataIndex: 'price_before_taxes',
    key: 'price_before_taxes',
    align: 'right',
    render: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
  {
    title: 'Iva total',
    dataIndex: 'vat_total',
    key: 'vat_total',
    align: 'right',
    render: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
  {
    title: 'Precio total',
    dataIndex: 'total_price_number',
    key: 'total_price_number',
    align: 'right',
    render: (value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  },
  {
    title: 'Precio en letras',
    dataIndex: 'total_price_letter',
    key: 'total_price_letter',
    align: 'right',
  },
]

const dataSource_table2 = ({price_before_taxes, vat_total, total_price_number, total_price_letter}) => {
  return [

    {
      key: '1',
      price_before_taxes,
      vat_total,
      total_price_number,
      total_price_letter
    },
  ]
}


const getquotation_item = (values = []) => {
  return values.map((item, index) => ({
    key: index,
    ...item
  }));
}

export const Step_3 = ({ values }) => {

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setDataSource(getquotation_item(values.quotation_item));
  }, [values.quotation_item]);

  return (
    // <div style={{ maxWidth: '60%', margin: '0 auto', padding: 24, fontFamily: 'Arial, sans-serif', border: '1px solid black' }}>
    //   {/* Título */}
    //   <h1 style={{ textAlign: 'center', borderBottom: '1px solid black', paddingBottom: 16, marginBottom: 32 }}>견&nbsp;&nbsp;적&nbsp;&nbsp;서</h1>

    //   {/* Encabezado de fecha y destinatario */}
    //   <div style={{ marginBottom: 24 }}>
    //     <p><strong>2025년 03월 18일</strong></p>
    //     <p><strong>화원평광아파트 귀하</strong></p>
    //     <p>아래와 같이 견적합니다.</p>
    //   </div>

    //   {/* Información del proveedor */}
    //   <table
    //     border="1"
    //     cellPadding="6"
    //     style={{
    //       borderCollapse: 'collapse',
    //       float: 'right',
    //       marginBottom: 32,
    //       fontSize: 14,
    //       width: '300px',
    //     }}
    //   >
    //     <tbody>
    //       <tr>
    //         <td>공급자 등록번호</td>
    //         <td>503-18-35279</td>
    //       </tr>
    //       <tr>
    //         <td>상호</td>
    //         <td>장수샷시유리</td>
    //       </tr>
    //       <tr>
    //         <td>성명</td>
    //         <td>장수철</td>
    //       </tr>
    //       <tr>
    //         <td>사업장 소재지</td>
    //         <td>대구광역시 달서구 장기로 180-72</td>
    //       </tr>
    //       <tr>
    //         <td>업태</td>
    //         <td>건설</td>
    //       </tr>
    //       <tr>
    //         <td>종목</td>
    //         <td>창호공사</td>
    //       </tr>
    //       <tr>
    //         <td>전화</td>
    //         <td>010-9214-0349</td>
    //       </tr>
    //     </tbody>
    //   </table>

    //   {/* Limpiar float */}
    //   <div style={{ clear: 'both' }} />

    //   {/* Tabla principal */}
    //   <table
    //     border="1"
    //     cellSpacing="0"
    //     cellPadding="8"
    //     style={{
    //       borderCollapse: 'collapse',
    //       width: '100%',
    //       fontSize: 14,
    //       marginBottom: 24
    //     }}
    //   >
    //     <thead>
    //       <tr>
    //         <th colSpan="7" style={{ textAlign: 'left' }}>
    //           합계 금액 (일천팔십오만칠천원정)<br />
    //           옥상스텐사다리, 등반이제작설치
    //         </th>
    //       </tr>
    //       <tr>
    //         <th>품목</th>
    //         <th>규격</th>
    //         <th>수량</th>
    //         <th>단가</th>
    //         <th>공급가액</th>
    //         <th>세액</th>
    //         <th>비고</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       <tr>
    //         <td>스텐사다리</td>
    //         <td>2m</td>
    //         <td>6ea</td>
    //         <td>450,000</td>
    //         <td>2,700,000</td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td>스텐등받이</td>
    //         <td>1.9m</td>
    //         <td>6ea</td>
    //         <td>550,000</td>
    //         <td>3,300,000</td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td>부자재및경비</td>
    //         <td>1식</td>
    //         <td></td>
    //         <td>370,000</td>
    //         <td>370,000</td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td>장비대</td>
    //         <td>2일</td>
    //         <td></td>
    //         <td>600,000</td>
    //         <td>1,200,000</td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td>설치비용</td>
    //         <td>3명2일</td>
    //         <td></td>
    //         <td>800,000</td>
    //         <td>1,600,000</td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td>보험료</td>
    //         <td>1식</td>
    //         <td></td>
    //         <td>220,000</td>
    //         <td>220,000</td>
    //         <td></td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td>발판</td>
    //         <td>6ea</td>
    //         <td></td>
    //         <td>80,000</td>
    //         <td>480,000</td>
    //         <td></td>
    //         <td></td>
    //       </tr>

    //       {/* Filas vacías */}
    //       {[...Array(4)].map((_, i) => (
    //         <tr key={i}><td colSpan="7" style={{ height: 24 }}></td></tr>
    //       ))}

    //       {/* Totales */}
    //       <tr>
    //         <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold' }}>합계</td>
    //         <td>9,870,000</td>
    //         <td>987,000</td>
    //         <td></td>
    //       </tr>
    //       <tr>
    //         <td colSpan="7"><strong>영업안내</strong> &nbsp;&nbsp;&nbsp;&nbsp; 총금액 : 10,857,000</td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>

    <div style={{ marginTop: '60px', }}>
      <Row style={{ maxWidth: '85%', border: '1px solid #bfbfbf', margin: '0 auto', borderRadius: "10px" }} gutter={[16, 0]}>
        <Flex justify="center" align="center" style={{ width: '100%', padding: '20px', borderBottom: '1px solid #bfbfbf' }}>
          <Title level={2} style={{ display: "flex", alignContent: "center" }}>Resumen de la cotización</Title>
        </Flex>

        <Col span={12}>
          <Divider orientation="left" size="small" style={{ marginTop: "40px", marginBottom: "20px" }}>Información general </Divider>
          <Title style={{ fontSize: "15px" }} level={5}>Fecha: <Text type="secondary">{values.date}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Cliente: <Text type="secondary">{values.customer}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Concepto del trabajo: <Text type="secondary">{values.work_concept}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Duración del trabajo: <Text type="secondary">{values.duration_of_work}</Text></Title>
        </Col>

        <Col span={12}>
          <Divider orientation="left" size="small" style={{ marginTop: "40px", marginBottom: "20px" }}>Información del proveedor </Divider>
          <Title style={{ fontSize: "15px" }} level={5}>Número de registro: <Text type="secondary">{values.registration_number}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Nombre comercial: <Text type="secondary">{values.comercial_name}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Representante legal: <Text type="secondary">{values.legal_representative}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Dirección: <Text type="secondary">{values.address}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Rubro: <Text type="secondary">{values.type_of_business}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Categoria: <Text type="secondary">{values.category}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Telefono/fax: <Text type="secondary">{values.tel_fax}</Text></Title>
          <Title style={{ fontSize: "15px" }} level={5}>Sitio Web: <Text type="secondary">{values.website}</Text></Title>
        </Col>

        <Col span={24}>
          <Divider orientation="left" size="small" style={{ marginTop: "60px", marginBottom: "20px" }}>Información detallada de los suministros utilizados </Divider>
          <Table columns={columns_table1} dataSource={dataSource} pagination={false} />
        </Col>

        <Col span={24} style={{marginBottom: "50px"}}>
          <Divider orientation="left" size="small" style={{ marginTop: "60px", marginBottom: "20px" }}>Precios finales de la cotización</Divider>
          <Table columns={columns_table2}  dataSource={dataSource_table2(values)} pagination={false} />
        </Col>
      </Row>
    </div >
  )
}
