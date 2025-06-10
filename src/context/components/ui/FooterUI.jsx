import { Typography } from "antd"
import Layout from "antd/es/layout/layout";
import { useUITranslation } from "../../../hooks";
const { Footer } = Layout;

const { Text } = Typography

export const FooterUI = () => {
    const { t } = useUITranslation();
    return (
        <Footer style={{ textAlign: 'center' }} >
            <Text style={{ cursor: 'default' }} disabled>{t("ui.footer.copyright")}</Text>
        </Footer>
    )
}
