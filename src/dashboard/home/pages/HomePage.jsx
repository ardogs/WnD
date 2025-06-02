import { FileExcelFilled, ProjectFilled, SettingFilled } from "@ant-design/icons"
import { Button, Flex, theme, Typography } from "antd"
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const { Title} = Typography
export const HomePage = () => {

  const {
    token: { customColor: {green, orange, cyan}, boxShadow },
  } = theme.useToken();

  const { t } = useTranslation();

  return (
    <Flex vertical style={{ flex: 1, width: '100%' }}>
      <div style={{ textAlign: 'center', marginTop: 40 }} className="no-select">
        <Title level={1} style={{ fontSize: 60 }}>{t("dashboard.home.welcomeMessage")} <b>{t("dashboard.home.nickname")}</b></Title>
        <Title level={5} style={{ marginBottom: '5px', marginTop: '50px' }}>{t("dashboard.home.instructions")}</Title>
      </div>

      <Flex style={{ flex: 1, marginTop: '20px' }} justify="center" align="center">
        <Flex gap="large" wrap justify="center">
          <Link to="/quotation"><Button shape="round" icon={<ProjectFilled />} size="large" style={{ boxShadow: boxShadow, fontSize: '18px', height: '60px', ...green }}>{t("dashboard.home.button.quotations")}</Button></Link>
          <Link to="/invoices"><Button shape="round" icon={<FileExcelFilled />} size="large" style={{ boxShadow: boxShadow, fontSize: '18px', height: '60px', ...orange }}>{t("dashboard.home.button.invoices")}</Button></Link>
          <Link to="/settings"><Button shape="round" icon={<SettingFilled />} size="large" style={{ boxShadow: boxShadow, fontSize: '18px', height: '60px', ...cyan }} >{t("dashboard.home.button.settinsgs")}</Button></Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
