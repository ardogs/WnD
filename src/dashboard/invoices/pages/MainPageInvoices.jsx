import { DeleteFilled, EditFilled, FileAddFilled } from "@ant-design/icons"
import { Button, Flex, Typography } from "antd"
import { Link } from "react-router";
import { useTheme, useUITranslation } from "../../../hooks";
// import { blue } from '@ant-design/colors';

const { Title } = Typography
export const MainPageInvoices = () => {

  const { colors, shadows } = useTheme();
  const { green, orange, red } = colors;
  const { boxShadow } = shadows;

  const { t } = useUITranslation();

  return (
    <Flex vertical style={{ flex: 1, width: '100%' }}>

      <div style={{ textAlign: 'center', marginTop: 40 }} className="no-select">
        <Title level={1} style={{ fontSize: 60 }}><b>{t("dashboard.invoices.mainPage.title")}</b></Title>
        <Title level={5} style={{ marginBottom: '5px', marginTop: '50px' }}>{t("dashboard.invoices.mainPage.instructions")}</Title>
      </div>

      <Flex style={{ flex: 1, marginTop: '20px' }} justify="center" align="center">
        <Flex gap="large" wrap justify="center">
          <Link to="/invoices/new"><Button shape="round" icon={<FileAddFilled />} size="large" style={{ boxShadow: boxShadow, fontSize: '18px', height: '60px', ...green }}>{t("dashboard.invoices.mainPage.button.new")}</Button></Link>
          <Link to="/invoices/edit"><Button shape="round" icon={<EditFilled />} size="large" style={{ boxShadow: boxShadow, fontSize: '18px', height: '60px', ...orange }}>{t("dashboard.invoices.mainPage.button.edit")}</Button></Link>
          <Link to="/invoices/delete"><Button shape="round" icon={<DeleteFilled />} size="large" style={{ boxShadow: boxShadow, fontSize: '18px', height: '60px', ...red }} >{t("dashboard.invoices.mainPage.button.delete")}</Button></Link>

        </Flex>
      </Flex>
    </Flex>

  )
}