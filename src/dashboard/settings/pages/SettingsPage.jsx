import { useSelector } from "react-redux";
import { DarkmodeSwitch, LanguageSelect } from "../../../context/components/settings";
import { SettingsLayout } from "../layout/SettingsLayout"
import { Card, Col, Divider, Row, theme, Typography} from 'antd';
import { useTranslation } from "react-i18next";

const { Title, Text } = Typography

export const SettingsPage = () => {

    const { t } = useTranslation();
    const darkMode = useSelector((state) => state.theme.darkMode);
    const { token } = theme.useToken();

    return (
        <SettingsLayout>
            <Title>{t("dashboard.settings.title")}</Title>
            <Row gutter={16} style={{ marginTop: '48px' }} wrap>
                <Divider orientation="left" size=""> {t("dashboard.settings.system.title")} </Divider>
                <Col xs={24} lg={12} xl={8} className="card-margin-sm">
                    <Card title={t("dashboard.settings.system.theme.title")} variant="outlined" style={{ boxShadow: token.boxShadow, height: '100%' }}>
                        <Row>
                            <Col span={18}><Text strong >{t("dashboard.settings.system.theme.description")} {(darkMode) ? t("dashboard.settings.system.theme.extras.darkmode") : t("dashboard.settings.system.theme.extras.lightmode")} </Text></Col>
                            <Col span={6}> <DarkmodeSwitch /></Col>
                        </Row>

                    </Card>
                </Col>
                <Col xs={24} lg={12} xl={8}>
                    <Card title={t("dashboard.settings.system.language.title")} variant="outlined" style={{ boxShadow: token.boxShadow, height: '100%' }}>
                        <Row>
                            <Col span={14}><Text strong>{t("dashboard.settings.system.language.description")}</Text></Col>
                            <Col span={10}> <LanguageSelect /></Col>
                        </Row>
                    </Card>
                </Col>

            </Row>

            <Row gutter={16} style={{ marginTop: '48px' }} wrap>

                <Divider orientation="left">{t("dashboard.settings.about.title")}</Divider>
                <Col xs={24} lg={12} xl={8} className="card-margin-sm">
                    <Card title={t("dashboard.settings.about.softwareVersion.title")} variant="outlined" style={{ boxShadow: token.boxShadow }}>
                        <Text strong>{t("dashboard.settings.about.softwareVersion.description")}  {__APP_VERSION__}</Text>

                    </Card>
                </Col>
            </Row>
        </SettingsLayout>
    )
}
