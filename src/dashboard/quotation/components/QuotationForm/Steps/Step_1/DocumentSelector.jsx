import { Flex, Select, Image } from 'antd'
import { useEffect, useState } from 'react'
import { EditToggle } from './EditToggle';

export const DocumentSelector = ({ options, selected, onChange, isLoading }) => {

    const [img, setImg] = useState(`Doc_${selected}`);

    useEffect(() => {
        setImg(`Doc_${selected}`);
    }, [selected]);


    return (
        <Flex justify="center" align="center" style={{ height: '100%', width: '100%', gap: 25 }} vertical>
            <Select size="large" onChange={onChange} placeholder="Selección de documento" options={options} loading={isLoading} />
            <EditToggle />
            <Image width={"35%"} src={`/src/assets/${img}.png`} />
        </Flex>
    );
}
