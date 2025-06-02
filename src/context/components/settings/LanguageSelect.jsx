import { Select } from 'antd';
import i18n from '../../../utils/translation/i18n';
import MXFlag from '../../../assets/icons/mx.svg?react'
import KRFlag from '../../../assets/icons/kr.svg?react'
import USFlag from '../../../assets/icons/us.svg?react'


const options = [
    { value: 'kr', label: <KRFlag style={{ width: 20 }} /> },
    { value: 'es', label: <MXFlag style={{ width: 20 }} />  },
    { value: 'en', label: <USFlag style={{ width: 20 }} />  },
];

export const LanguageSelect = () => {

    const language = localStorage.getItem( 'i18nextLng' )

    const handleChange = (value) => {
        i18n.changeLanguage(value);
    };

    return <Select defaultValue={language} options={options} onChange={ handleChange }/>
    
}
