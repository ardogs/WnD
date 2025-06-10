import { DeleteFilled, EditFilled, FileAddFilled } from "@ant-design/icons"
import { Button, Flex, theme, Typography } from "antd"
import { Link } from "react-router";
import { useUITranslation } from "../../../hooks";

const { Title } = Typography
export const MainPageQuotations = () => {

  const {
    token: { customColor: { green, orange, red }, boxShadow },
  } = theme.useToken();
  const { t } = useUITranslation();

  return (
    <Flex vertical style={{ flex: 1, width: '100%' }}>
      {/* Encabezado */}
      <div style={{ textAlign: 'center', marginTop: 40 }} className="no-select">
        <Title level={1} style={{ fontSize: 60 }}><b>{t("dashboard.quotations.mainPage.title")}</b></Title>
        <Title level={5} style={{ marginBottom: '5px', marginTop: '50px' }}>{t("dashboard.quotations.mainPage.instructions")}</Title>
      </div>

      {/* Botones centrados verticalmente en el espacio restante */}
      <Flex style={{ flex: 1, marginTop: '20px' }} justify="center" align="center">
        <Flex gap="large" wrap justify="center">
          <Link to="/quotation/new"><Button shape="round" icon={<FileAddFilled />} size="large" style={{ boxShadow: boxShadow, fontSize: '18px', height: '60px', ...green }}>{t("dashboard.quotations.mainPage.button.new")}</Button></Link>
          <Link to="/quotation/edit"><Button shape="round" icon={<EditFilled />} size="large" style={{ boxShadow: boxShadow, fontSize: '18px', height: '60px', ...orange }}>{t("dashboard.quotations.mainPage.button.edit")}</Button></Link>
          <Link to="/quotation/delete"><Button shape="round" icon={<DeleteFilled />} size="large" style={{ boxShadow: boxShadow, fontSize: '18px', height: '60px', ...red }} >{t("dashboard.quotations.mainPage.button.delete")}</Button></Link>

        </Flex>
      </Flex>
    </Flex>

  )
}