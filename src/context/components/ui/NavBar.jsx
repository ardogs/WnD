import { Layout, Image, Typography, Flex} from "antd";
import logo from '../../../assets/logo_2.webp';
import { DarkmodeSwitch} from "../settings";
const { Title } = Typography

const { Header } = Layout;

export const NavBar = () => {
    return (
        <Header style={{ display: 'flex', alignItems: 'center', position: 'relative'}} >
            <Flex gap="small" className="no-select">
                <Image width={48} src={logo} preview={false} />
                <Title level={5} style={{ color: 'whitesmoke' }}>W&Ds</Title>
            </Flex>

            <div style={{ marginLeft: 'auto' }}>
                <DarkmodeSwitch/>
            </div>
        </Header>
    )
}
