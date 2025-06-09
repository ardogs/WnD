import { axiosInstance } from "../../services/api/axiosInstance";

export const fetchAppSettingsAPI = async () => {
    const res = await axiosInstance.get('/api/UI/UISettingInfo');
    return res;
}

export const getConnectionStatusAPI = async () => {
    const res = await axiosInstance.get('/api/UI/isConnected');
    return res;
}

export const updateDarkModeAPI = async (enabled) => {
    const res = await axiosInstance.post('/api/UI/DarkMode', { darkMode: enabled });
    return res;
}

export const updateLanguageAPI = async (lang) => {
    const res = await axiosInstance.post('/api/UI/Language', { language: lang });
    return res;
}

export const updateAPIURLAPI = async (url) => {
    const res = await axiosInstance.post('/api/UI/APIUrl', { url });
    return res;
}



