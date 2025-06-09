import { Card, Col, Row, Typography } from "antd";
import { LanguageSelect } from "../";
import { useTheme, useUITranslation } from "../../../../hooks";



export const LanguageCard = () => {
  const { Text } = Typography
  const { t } = useUITranslation();
  const { shadows: { boxShadow } } = useTheme();
  return (
    <Card title={t("dashboard.settings.system.language.title")} variant="outlined" style={{ boxShadow: boxShadow, height: '100%' }}>
      <Row>
        <Col span={14}><Text >{t("dashboard.settings.system.language.description")}</Text></Col>
        <Col span={10}> <LanguageSelect /></Col>
      </Row>
    </Card>
  )
}

