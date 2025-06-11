import { Card, Col, Row, Typography } from "antd";
import { DarkmodeSwitch } from "../DarkmodeSwitch";
import { useSettings, useTheme, useUITranslation } from "../../../../hooks";

export const ThemeCard = () => {
  const { Text } = Typography;

  const { t } = useUITranslation();
  const { shadows: { boxShadow } } = useTheme();
  const { darkmode } = useSettings();

  return (
    <Card title={t("dashboard.settings.system.theme.title")} variant="outlined" style={{ boxShadow: boxShadow, height: '100%' }}>
      <Row>
        <Col span={18}><Text  >{t("dashboard.settings.system.theme.description")} {(darkmode) ? t("dashboard.settings.system.theme.extras.darkmode") : t("dashboard.settings.system.theme.extras.lightmode")} </Text></Col>
        <Col span={6}> <DarkmodeSwitch /></Col>
      </Row>
    </Card>
  )
}
