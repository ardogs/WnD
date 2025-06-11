import { Card, Typography } from "antd"
import { useSettings, useTheme, useUITranslation } from "../../../../hooks";


export const SystemInfoCard = () => {

    const { Text } = Typography;
    const { shadows: { boxShadow } } = useTheme();
    const { apiVersion } = useSettings();
    const { t } = useUITranslation();
    return (
        <Card title={t("dashboard.settings.about.title")} variant="outlined" style={{ boxShadow: boxShadow }}>
            <Text>{t("dashboard.settings.about.softwareVersion.descriptionFE")}  <b>{__APP_VERSION__}</b></Text>
            <br />
            <Text>{t("dashboard.settings.about.softwareVersion.descriptionAPI")} <b>{apiVersion}</b></Text>
        </Card>
    )
}
