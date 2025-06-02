import { Typography } from "antd"
import Layout from "antd/es/layout/layout";
import { useTranslation } from "react-i18next";
const { Footer } = Layout;

const { Text } = Typography

export const FooterUI = () => {
    const { t } = useTranslation();
    return (
        <Footer style={{ textAlign: 'center' }} >
            <Text style={{ cursor: 'default' }} disabled>{t("ui.footer.copyright")}</Text>
        </Footer>
    )
}
