import { fetchAppSettingsAPI, getConnectionStatusAPI, updateAPIURLAPI, updateDarkModeAPI, updateLanguageAPI } from '../../api'
import { setDarkMode, changeLanguage, setSettings, setLoading, setAPIURL, setStatusConnection } from './settingsSlice';

export const fetchAppSettings = () => {
    return async (dispatch) => {
        dispatch(setLoading({ key: 'app', value: true }));
        try {
            // const response = await axiosInstance.get('/api/UI/UISettingInfo');
            const response = await fetchAppSettingsAPI();
            const { darkMode, language, apiVersion, apiurl } = response.data;
            dispatch(setSettings({ darkMode, language, apiVersion, apiurl }));
            return { ok: true }
        } catch (error) {
            dispatch(setLoading({ key: 'app', value: false }));
            return { ok: false, message: `No se pudieron cargar las configuraciones iniciales. Error reason: ${error}` }
        }
    };
};
export const updateDarkMode = (enabled) => {
    return async (dispatch) => {
        dispatch(setLoading({ key: 'darkmode', value: true }));
        try {
            // await axiosInstance.post('/api/UI/DarkMode', { darkMode: enabled });
            await updateDarkModeAPI(enabled);
            dispatch(setDarkMode(enabled));
            return { ok: true, message: 'Modo oscuro encendido', enabled }
        } catch (error) {
            return { ok: false, message: `Error al guardar cambios. Error reason: ${error.code}` }
        } finally {
            dispatch(setLoading({ key: 'darkmode', value: false }));
        }
    };
};

export const updateLanguage = (lang) => {
    return async (dispatch) => {
        dispatch(setLoading({ key: 'language', value: true }));

        try {
            // await axiosInstance.post('/api/UI/Language', { language: lang });
            await updateLanguageAPI(lang);
            dispatch(changeLanguage(lang));
            return { ok: true, message: 'Idioma actualizado' }
        } catch (error) {
            return { ok: false, message: `Error al guardar cambios. Error reason: ${error.code}` }
        } finally {
            dispatch(setLoading({ key: 'language', value: false }));
        }
    };
};

export const updateAPIURL = (url) => {
    return async (dispatch) => {
        dispatch(setLoading({ key: 'apiURL', value: true }));
        try {
            // await axiosInstance.post('/api/settings/darkmode', { darkMode: true });
            await updateAPIURLAPI(url)
            dispatch(setAPIURL(url));
            return { ok: true, message: 'La URL de la API ha sido actualizada' }
        } catch (error) {
            return { ok: false, message: `Error al guardar cambios. Error reason: ${error.code}` }
        } finally {
            dispatch(setLoading({ key: 'apiURL', value: false }));
        }
    };
};

export const getConnectionStatus = () => {
    return async (dispatch) => {
        dispatch(setLoading({ key: 'statusConnection', value: true }));
        try {
            // const response = await axiosInstance.get('/api/UI/isConnected');
            const response = await getConnectionStatusAPI();
            const connectionStatus = (response.status === 200) ? true : false;
            dispatch((setStatusConnection(connectionStatus)));
            return { ok: true, message: 'OK' }
        } catch (error) {
            // console.error(error)
            return { ok: false, message: `${error.code}` }
        } finally {
            dispatch(setLoading({ key: 'statusConnection', value: false }));
        }
    };
};