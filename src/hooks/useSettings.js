import { useDispatch, useSelector } from "react-redux";

export const useSettings = () => {

    const dispatch = useDispatch();

    const darkmode = useSelector((state) => state.settings.settings.darkmode);
    const language = useSelector((state) => state.settings.settings.language);
    const apiURL = useSelector((state) => state.settings.settings.apiURL);
    const apiVersion = useSelector((state) => state.settings.settings.apiVersion);
    const statusConnection =  useSelector((state) => state.settings.statusConnection);

    const isLoadingDarkmode = useSelector((state) => state.settings.isLoading.darkmode);
    const isLoadingLanguage = useSelector((state) => state.settings.isLoading.language);
    const isLoadingapiURL = useSelector((state) => state.settings.isLoading.apiURL);
    const isLoadingStatusConnection = useSelector((state) => state.settings.isLoading.statusConnection);
    const isLoadingApp = useSelector((state) => state.settings.isLoading.app);

    return {
        darkmode,
        language,
        apiURL,
        apiVersion,
        statusConnection,
        isLoadingDarkmode,
        isLoadingLanguage,
        isLoadingapiURL,
        isLoadingStatusConnection,
        isLoadingApp,
        dispatch
    }
}
