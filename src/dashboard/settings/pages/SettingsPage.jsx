
import { SettingsLayout } from "../layout/SettingsLayout"
import { SettingSectionLayout } from "../layout/SettingSectionLayout";
import { Col } from 'antd';
import { APIIpCard, LanguageCard, ThemeCard, APIConnectionCard, SystemInfoCard } from '../components'
import { useUITranslation } from ".././../../hooks/"

export const SettingsPage = () => {

    const { t } = useUITranslation();

    return (
        <SettingsLayout>
            <SettingSectionLayout title={t("dashboard.settings.system.title")}>
                <Col xs={24} lg={24} xl={24} xxl={7}>
                    <ThemeCard />
                </Col>

                <Col xs={24} lg={24} xl={24} xxl={9}>
                    <LanguageCard />
                </Col>
            </SettingSectionLayout>

            <SettingSectionLayout title={t("dashboard.settings.APIConnection.title")}>
                <Col xs={24} lg={24} xl={24} xxl={10}>
                    <APIIpCard />
                </Col>
                <Col xs={24} lg={24} xl={24} xxl={6}>
                    <APIConnectionCard />
                </Col>
            </SettingSectionLayout>

            <SettingSectionLayout title={t("dashboard.settings.about.title")}>
                <Col xs={24} lg={24} xl={24} xxl={7}>
                    <SystemInfoCard />
                </Col>
            </SettingSectionLayout>
        </SettingsLayout>
    )
}
