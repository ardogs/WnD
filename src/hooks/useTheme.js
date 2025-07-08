import { theme } from 'antd';

export const useTheme = () => {
    const {
        token: {
            customColor: { green, red, blue, orange, cyan },
            boxShadow,
            boxShadowSecondary,
            boxShadowTertiary,
            colorPrimary,
            colorBgBase,
            colorTextBase,
            colorBgContainer,
            borderRadiusLG,
            fontSize
        },
    } = theme.useToken();

    return {
        colors: { green, red, blue, orange, cyan },
        shadows: {
            boxShadow,
            boxShadowSecondary,
            boxShadowTertiary,
        },
        baseColors: {
            primary: colorPrimary,
            bgBase: colorBgBase,
            textBase: colorTextBase,
        },
        colorBgContainer,
        borderRadiusLG,
        fontSize
    };
};