export const useWebFlow = () => {

    const { public: publicRuntimeConfig } = useRuntimeConfig();
    const { service } = useAxios();

    const getWebFlow = async () => {
        const res = await useFetch('/api/webflow');

        if(res) {
            return { res };
        }
    }

    return {
        getWebFlow,
    }

}