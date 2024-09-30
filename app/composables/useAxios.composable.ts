import axios from "axios";

export const useAxios = () => {

    const { public: publicRuntimeConfig } = useRuntimeConfig();
    const service = axios.create({ baseURL: publicRuntimeConfig.baseServiceUri });

    return {
        service,
    }
}