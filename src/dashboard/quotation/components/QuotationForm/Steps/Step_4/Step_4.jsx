import { Button, Flex, Typography } from 'antd'
import { useUITranslation } from '../../../../../../hooks';


const { Title } = Typography

export const Step_4 = () => {

      const { t } = useUITranslation();
    return (
        <Flex vertical style={{ flex: 1, width: '100%' }}>
            <div style={{ textAlign: 'center', marginTop: 40 }} className="no-select">
                <Title level={1} style={{ fontSize: 60 }}><b>{t("dashboard.quotations.newQuotation.steps.step4.banner")}</b></Title>
                <Title level={5} style={{ marginBottom: '20px', marginTop: '20px' }}>{t("dashboard.quotations.newQuotation.steps.step4.label")}</Title>
                <Button type="primary" loading  size='large' style={{marginBottom: "200px"}}>{t("dashboard.quotations.newQuotation.steps.step4.button")}</Button>
            </div> 
        </Flex>
    )
}
