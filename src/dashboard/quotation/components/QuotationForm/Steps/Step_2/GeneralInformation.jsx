import { Col, Divider, Row } from 'antd'
import { CustomDatePickerField, CustomFastField } from '../../../CustomInputs'

export const GeneralInformation = () => {
    return (
        <Row style={{ marginTop: '60px' }} gutter={[16, 0]}>
            <Divider orientation="left">Información general de la cotización</Divider>
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
        </Row>
    )
}
