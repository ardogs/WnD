import { Col, Flex, Row, Typography } from 'antd'
import { useUITranslation } from '../../../../../../hooks';

const { Title, Text } = Typography
export const SupplierFormFields = ({supplier}) => {
      const { t } = useUITranslation();

    return (
        <Flex justify="center" align="center" style={{ height: '100%', width: '100%' }} className='no-select'>
            <Row >
                <Col xs={24} xxl={24}>
                    <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.registrationNumber")}: <Text type="secondary" name="registration_number">{ supplier?.registration_number || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={24}>
                    <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.comercialName")}: <Text type="secondary" name="comercial_name">{ supplier?.comercial_name || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={12}>
                    <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.legalRepresentative")}: <Text type="secondary">{ supplier?.legal_representative || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={24}>
                    <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.address")}: <Text type="secondary">{ supplier?.address || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={24}>
                    <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.typeOfBusiness")}: <Text type="secondary">{ supplier?.type_of_business || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={24}>
                    <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.category")}: <Text type="secondary">{ supplier?.category || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={24}>
                    <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.telFax")}: <Text type="secondary">{ supplier?.tel_fax || "" }</Text></Title>
                </Col>

                <Col xs={24} xxl={24}>
                    <Title level={5}>{t("dashboard.quotations.newQuotation.steps.step1.website")}: <Text type="secondary">{ supplier?.website || "" }</Text></Title>
                </Col>
            </Row>
        </Flex>
    )
}
