import { Col, Flex, Row, Typography } from 'antd'

const { Title, Text } = Typography
export const SupplierFormFields = ({supplier}) => {

    return (
        <Flex justify="center" align="center" style={{ height: '100%', width: '100%' }} className='no-select'>
            <Row gutter={[16, 0]}>
                <Col xs={24} xxl={24}>
                    <Title level={5}>Número de registro: <Text type="secondary" name="registration_number">{ supplier?.registration_number || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={12}>
                    <Title level={5}>Nombre comercial: <Text type="secondary" name="comercial_name">{ supplier?.comercial_name || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={12}>
                    <Title level={5}>Representante legal: <Text type="secondary">{ supplier?.legal_representative || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={24}>
                    <Title level={5}>Dirección: <Text type="secondary">{ supplier?.address || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={12}>
                    <Title level={5}>Rubro: <Text type="secondary">{ supplier?.type_of_business || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={12}>
                    <Title level={5}>Categoria: <Text type="secondary">{ supplier?.category || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={24}>
                    <Title level={5}>Telefono/fax: <Text type="secondary">{ supplier?.tel_fax || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={24}>
                    <Title level={5}>Sitio Web: <Text type="secondary">{ supplier?.website || "" }</Text></Title>
                </Col>
            </Row>
        </Flex>
    )
}
