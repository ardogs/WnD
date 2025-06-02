import { Switch, } from 'antd';
import { SunFilled, MoonFilled } from '@ant-design/icons';
import { toggleDarkMode} from '../../../store/theme'
import { useDispatch, useSelector } from 'react-redux';

export const DarkmodeSwitch = () => {

    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.theme.darkMode);

    const onToggle = () => {
        dispatch(toggleDarkMode());
        localStorage.setItem('darkMode', !darkMode);
    };
    return <Switch checked={darkMode} checkedChildren={<MoonFilled />} unCheckedChildren={<SunFilled />} onChange={onToggle} />
    
}
