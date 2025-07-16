import { useSelector } from 'react-redux';
import { Col, Flex, Row } from 'antd'
import { CustomField } from '../../../CustomInputs';

export const SupplierFormFields = () => {

    const { isEditable } = useSelector(state => state.quotation.newQuotation.step1);

    return (
        <Flex justify="center" align="center" style={{ height: '100%', width: '100%' }}>
            <Row gutter={[16, 0]}>
                <Col xs={24} xxl={24}>
                    <CustomField name="registration_number" label="Número de registro" disabled={!isEditable} />
                </Col>

                <Col xs={24} xxl={12}>
                    <CustomField name="comercial_name" label="Nombre comercial" disabled={!isEditable} />
                </Col>

                <Col xs={24} xxl={12}>
                    <CustomField name="legal_representative" label="Representante legal" disabled={!isEditable} />
                </Col>

                <Col xs={24} xxl={24}>
                    <CustomField name="address" label="Dirección" disabled={!isEditable} />
                </Col>

                <Col xs={24} xxl={12}>
                    <CustomField name="type_of_business" label="Rubro" disabled={!isEditable} />
                </Col>

                <Col xs={24} xxl={12}>
                    <CustomField name="category" label="Categoria" disabled={!isEditable} />
                </Col>

                <Col xs={24} xxl={24}>
                    <CustomField name="tel_fax" label="Telefono/fax " disabled={!isEditable} />
                </Col>

                <Col xs={24} xxl={24}>
                    <CustomField name="website" label="Sitio Web " disabled={!isEditable} />
                </Col>
            </Row>
        </Flex>
    )
}
