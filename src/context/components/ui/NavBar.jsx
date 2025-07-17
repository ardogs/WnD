import { useMemo } from "react";
import { Link, useLocation } from "react-router";
import { Layout, Image, Typography, Flex, Menu } from "antd";
import { BorderOutlined, CloseOutlined, FileExcelFilled, HomeFilled, MinusOutlined, ProjectFilled, SettingFilled, ShopFilled } from "@ant-design/icons";
import logo from '../../../assets/logo_2.webp';
import { DarkmodeSwitch } from "../../../dashboard/settings/components";
import { useTheme, useUITranslation } from "../../../hooks";

const { Title } = Typography
const { Header } = Layout;

const optionsArray = (t, color) => {
    return [
        { key: 'home', icon: <HomeFilled style={{ color: color.blue.backgroundColor }} />, label: <Link to="/">{t("ui.navigation.home.title")}</Link> },
        { key: 'quotations', icon: <ProjectFilled style={{ color: color.green.backgroundColor }} />, label: <Link to="/quotation">{t("ui.navigation.quotations.title")}</Link> },
        { key: 'invoices', icon: <FileExcelFilled style={{ color: color.orange.backgroundColor }} />, label: <Link to="/invoices">{t("ui.navigation.invoices.title")}</Link> },
        { key: 'companies', icon: <ShopFilled  style={{ color: color.cyan.backgroundColor }} />, label: <Link to="/companies">Mis empresas</Link> },
        { key: 'settings', icon: <SettingFilled style={{ color: color.orange.backgroundColor }} />, label: <Link to="/settings">{t("ui.navigation.settings.title")}</Link> }
    ]
}

const getSelectedKey = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/quotation')) return 'quotations';
    if (pathname.startsWith('/invoices')) return 'invoices';
    if (pathname.startsWith('/settings')) return 'settings';
    if (pathname.startsWith('/companies')) return 'companies';
    return '';
};

const ControlButtons = () => {

    const handleMinimize = () => window?.electronAPI?.minimize?.();
    const handleMaximize = () => window?.electronAPI?.maximize?.();
    const handleClose = () => window?.electronAPI?.close?.();

    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }} className="drag-region">
            <div id="titlebar" className="no-drag-region" style={{ gap: 1 }}>
                <DarkmodeSwitch />
                <div className="window-controls">
                    <button id="minimize" onClick={handleMinimize}><MinusOutlined /></button>
                    <button id="maximize" onClick={handleMaximize}><BorderOutlined /></button>
                    <button id="close" onClick={handleClose}><CloseOutlined /></button>
                </div>
            </div>
        </div>
    )
}

export const NavBar = () => {

    const { t } = useUITranslation();
    const { colors } = useTheme();
    const location = useLocation();

    const menuItems = useMemo(() => optionsArray(t, colors), [t, colors]);
    const selectedKey = useMemo(() => getSelectedKey(location.pathname), [location.pathname]);

    return (
<Header style={{ display: 'flex', alignItems: 'center', padding: '0 20px', height: 64, gap: 16, }}>
  {/* Lado izquierdo: logo y título */}
  <div className="no-select drag-region" style={{ display: 'flex', alignItems: 'center', flexShrink: 0, gap: 8, }} >
    <Image width={48} src={logo} preview={false} />
    <Title level={5} style={{ color: 'whitesmoke', margin: 0 }}> W&Ds </Title>
  </div>

  {/* Centro: menú */}
  <div className="drag-region" style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: 0, }} >
    <Menu className=" no-drag-region no-select" mode="horizontal"  disabledOverflow selectedKeys={[selectedKey]} items={menuItems} style={{ flex: 'none', borderBottom: 'none', whiteSpace: 'nowrap', }} />
  </div>

  {/* Lado derecho: controles */}
  <div style={{ flexShrink: 0 }}>
    <ControlButtons />
  </div>
</Header>
    );
}
