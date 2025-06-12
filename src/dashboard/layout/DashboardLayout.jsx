import { Button, Flex, Layout, Typography } from 'antd';
import { FooterUI, NavBar, BreadcrumbUI, LeftMenu } from '../../context/components/ui';
import { useLocation, useNavigate } from 'react-router';
import { ArrowLeftOutlined, HomeFilled } from '@ant-design/icons';
import { PathNametoTitle } from '../../utils'
import { useTheme, useUITranslation } from '../../hooks';

const { Content } = Layout;
const { Title } = Typography;

const NavigationBar = (location, navigate, t) => {
  return (
    <Flex className="no-select">
      <Button disabled={(location.pathname === '/') ? true : false} size="large" type="text" style={{ margin: '15px 0 15px 5px' }} onClick={() => navigate(-1)}><ArrowLeftOutlined /></Button>
      <Button disabled={(location.pathname === '/') ? true : false} size="large" type="text" style={{ margin: '15px 0 0px' }} onClick={() => navigate('..')}><HomeFilled /></Button>
      <Title level={1} style={{ margin: '15px 0 0px 25px' }}> {PathNametoTitle(t)[location.pathname]} </Title>
    </Flex>
  )
}
export const DashboardLayout = ({ children }) => {
  const { colorBgContainer, borderRadiusLG } = useTheme();
  const { t } = useUITranslation();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }} className='theme-transition'>
      <NavBar />
      <Layout style={{ flex: 1 }} >
        <LeftMenu translation={t} />
        <Content style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px - 70px)', overflow: 'hidden' }}>
          <BreadcrumbUI translation={t} />
          <Layout style={{ flex: 1, background: colorBgContainer, borderRadius: borderRadiusLG, overflow: 'auto', height: 'calc(100vh - 64px - 100px)' }}>
            {NavigationBar(location, navigate, t)}
            <Content style={{ padding: '10px 24px', display: 'flex', flex: 1, flexDirection: 'column', overflow: 'auto' }}>
              {children}
            </Content>
          </Layout>
        </Content>
      </Layout>
      <FooterUI />
    </Layout>
  );
};




