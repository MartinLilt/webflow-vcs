import { useAxios } from "~/composables/useAxios.composable";

export default defineEventHandler(async (e) => {
const { public: publicRuntimeConfig } = useRuntimeConfig();
const { service } = useAxios();

const res = await service.get(`/users`, {
    headers: {
        Authorization: `Bearer ${publicRuntimeConfig.webFlowApiToken}`,
        'Content-Type': 'application/json',
        'Accept-Version': '1.0.0',
    }
});

if(res) {
    return res;
}

});