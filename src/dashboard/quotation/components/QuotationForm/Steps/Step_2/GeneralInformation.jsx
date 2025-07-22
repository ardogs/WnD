import { Col, Divider, Row } from 'antd'
import { CustomDatePickerField, CustomFastField } from '../../../CustomInputs'
import { useUITranslation } from '../../../../../../hooks';

export const GeneralInformation = () => {
    const { t } = useUITranslation();
    return (
        <Row style={{ marginTop: '60px' }} gutter={[16, 0]}>
            <Divider orientation="left">{t("dashboard.quotations.newQuotation.steps.step2.generalInformation.title")}</Divider>
            <Col xs={24} xxl={6}>
                <CustomDatePickerField label={t("dashboard.quotations.newQuotation.steps.step2.generalInformation.date")} name="date" />
            </Col>

            <Col xs={24} xxl={6}>
                <CustomFastField label={t("dashboard.quotations.newQuotation.steps.step2.generalInformation.customer")} name="customer" />
            </Col>

            <Col xs={24} xxl={6}>
                <CustomFastField label={t("dashboard.quotations.newQuotation.steps.step2.generalInformation.workConcept")} name="work_concept" />
            </Col>

            <Col xs={24} xxl={6}>
                <CustomFastField label={t("dashboard.quotations.newQuotation.steps.step2.generalInformation.durationOfWork")} name="duration_of_work" />
            </Col>
        </Row>
    )
}
