import { useMemo } from "react";
import { Link, useLocation } from "react-router";
import { Layout, Image, Typography, Flex, Menu } from "antd";
import { BorderOutlined, CloseOutlined, FileExcelFilled, HomeFilled, MinusOutlined, ProjectFilled, SettingFilled } from "@ant-design/icons";
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
        { key: 'settings', icon: <SettingFilled style={{ color: color.cyan.backgroundColor }} />, label: <Link to="/settings">{t("ui.navigation.settings.title")}</Link> }
    ]
}

const getSelectedKey = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname.startsWith('/quotation')) return 'quotations';
    if (pathname.startsWith('/invoices')) return 'invoices';
    if (pathname.startsWith('/settings')) return 'settings';
    return '';
};

const ControlButtons = () => {

    const handleMinimize = () => window?.electronAPI?.minimize?.();
    const handleMaximize = () => window?.electronAPI?.maximize?.();
    const handleClose = () => window?.electronAPI?.close?.();

    return (
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }} className="drag-region">
            <div id="titlebar" className="no-drag-region" style={{ gap: 30 }}>
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
        <Header style={{ display: 'flex', alignItems: 'center', padding: "0px 20px 0px 50px" }} >
            <Flex gap="small" className="no-select drag-region" style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }} >
                <Image width={48} src={logo} preview={false} />
                <Title level={5} style={{ color: 'whitesmoke', margin: 0 }}>W&Ds</Title>
            </Flex>

            <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }} className="no-drag-region">
                <Menu mode="horizontal" defaultSelectedKeys={['home']} selectedKeys={[selectedKey]} items={menuItems} style={{ width: '100%', justifyContent: 'center', borderBottom: 'none' }} />
            </div>
            <ControlButtons/>
        </Header>
    );
}
