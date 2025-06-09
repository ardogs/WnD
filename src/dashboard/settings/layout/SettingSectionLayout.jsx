import { Divider, Row } from 'antd'
import React from 'react'

export const SettingSectionLayout = ({ children, title }) => {
    return (
        <Row gutter={16} style={{ gap: 15 }} wrap>
            <Divider orientation="left"> {title} </Divider>
            {children}
        </Row>
    )
}
