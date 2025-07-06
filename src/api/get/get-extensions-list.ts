import data from "@/lib/constants/data.json";

export interface ExtensionListDataResponse {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export const getExtensionsList = async (): Promise<
  ExtensionListDataResponse[]
> => {
  return new Promise((res) => setTimeout(() => res(data), 2000));
};
