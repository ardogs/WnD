
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json'; // ajusta la ruta
import { FooterUI } from '../components/ui';
import { Typography } from 'antd';

export const LoadingPage = () => {

    const { Title } = Typography;
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', boxSizing: 'border-box' }} >
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }} >
                <Lottie animationData={loadingAnimation} loop style={{ height: 150 }} />
                <Title level={4}>El sistema esta cargando.</Title>
            </div>

            <FooterUI />
        </div>

    );
};