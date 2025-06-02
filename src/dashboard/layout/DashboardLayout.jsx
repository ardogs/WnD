import { useTranslation } from 'react-i18next';
import { Button, Flex, Layout, theme } from 'antd';
import { FooterUI, NavBar, BreadcrumbUI, LeftMenu } from '../../context/components/ui';
import { useLocation, useNavigate } from 'react-router';
import { ArrowLeftOutlined, HomeFilled } from '@ant-design/icons';

const { Content } = Layout;

export const DashboardLayout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Layout style={{ minHeight: '100vh' }} className='theme-transition'>
      <NavBar />
      <Layout style={{ flex: 1 }} >
        <LeftMenu translation={t} />
        <Content style={{ padding: '0 18px', display: 'flex', flexDirection: 'column' }}>
          <BreadcrumbUI translation={t} />
          <Layout style={{ flex: 1, background: colorBgContainer, borderRadius: borderRadiusLG, overflow: 'hidden' }} >
            <Flex>
              <Button disabled={(location.pathname === '/') ? true : false} size="large" type="text" style={{ width: '24px', margin: '15px 0 15px 15px' }} onClick={() => navigate(-1)}><ArrowLeftOutlined /></Button>
              <Button disabled={(location.pathname === '/') ? true : false} size="large" type="text" style={{ width: '24px', margin: '15px 0 0px 5px' }} onClick={() => navigate('..')}><HomeFilled /></Button>
            </Flex>
            <Content style={{ padding: '0 24px', display: 'flex', flex: 1, flexDirection: 'column' }}>
              {children}
            </Content>
          </Layout>
        </Content>
      </Layout>
      <FooterUI />
    </Layout>
  );
};




