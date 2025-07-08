export const lightTheme = {
    token: {
        colorPrimary: '#265566',
        colorBgBase: '#f4f4f5',
        colorTextBase: '#262626',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        boxShadowSecondary: '0 2px 4px rgba(0, 0, 0, 0.06)',
        boxShadowTertiary: '0 8px 16px rgba(0, 0, 0, 0.12)',
        customColor: {
            green: {
                backgroundColor: '#52c41a',
                borderColor: '#95de64',
                color: '#f0f0f0'
            },
            orange: {
                backgroundColor: '#fa8c16',
                borderColor: '#ffc069',
                color: '#f0f0f0'
            },
            blue: {
                backgroundColor: '#1677ff',
                borderColor: '#69b1ff',
                color: '#f0f0f0'
            },
            cyan: {
                backgroundColor: '#00474f',
                borderColor: '#69b1ff',
                color: '#f0f0f0'
            },
            red: {
                backgroundColor: '#f5222d',
                borderColor: '#69b1ff',
                color: '#f0f0f0'
            }
        }, 
        fontSize: 15

    },

    components: {
        Layout: {
            headerBg: '#263238',
            triggerBg: '#000',
            siderBg: '#263238'
        },
        message: {
            contentBg: '#eceff1'
        }, 
        Menu:{
            colorBgContainer: '#263238',
            colorItemText: '#ffffff',
        }
    },

    algorithm: 'default',
};

export const darkTheme = {
    token: {
        colorPrimary: '#b7eb8f',
        colorBgBase: '#1f1f1f',
        colorTextBase: '#ffffff',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
        boxShadowSecondary: '0 2px 4px rgba(0, 0, 0, 0.4)',
        boxShadowTertiary: '0 8px 16px rgba(0, 0, 0, 0.6)',
        customColor: {
            green: {
                backgroundColor: '#b7eb8f',
                // borderColor: '#73d13d',
                color: '#595959'
            },
            orange: {
                backgroundColor: '#ffd666',
                // borderColor: '#ffc53d',
                color: '#595959'
            },
            blue: {
                backgroundColor: '#69b1ff',
                // borderColor: '#389e0d',
                color: '#595959'
            },
            cyan: {
                backgroundColor: '#36cfc9',
                borderColor: '#002329',
                color: '#595959'
            },
            red: {
                backgroundColor: '#ff7875',
                borderColor: '#ffa39e',
                color: '#f0f0f0'
            }
        },
        fontSize: 15
    },

    components: {
        Layout: {
            headerBg: '#263238',
            siderBg: '#263238',
            
        }, message: {
            contentBg: '#f1ecec'
        },
        Menu:{
            colorBgContainer: '#263238',
            colorItemText: '#ffffff',
        }
    },
    algorithm: 'dark',


};