import data from "@/lib/constants/data.json";
export const getExtensionsList = async () => {
    return new Promise((res) => setTimeout(() => res(data), 2000));
};
