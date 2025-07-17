import { Flex, Select, Image } from 'antd'
import { useEffect, useState } from 'react'

export const DocumentSelector = ({ options, selected, onChange, isLoading }) => {

    const [img, setImg] = useState(`Doc_${selected}`);

    useEffect(() => {
        setImg(`Doc_${selected}`);
    }, [selected]);

    return (
        <Flex justify="center" align="center" style={{ height: '100%', width: '100%', gap: 25 }} vertical>
            <Select size="large" defaultValue={selected} onChange={onChange} placeholder="Selección de documento" options={options} loading={isLoading}/>
            <Image width={"40%"} src={`/src/assets/${img}.webp`} />
        </Flex>
    );
}
