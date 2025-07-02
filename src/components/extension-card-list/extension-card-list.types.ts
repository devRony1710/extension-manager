import { ExtensionListDataResponse } from "@/api/get/get-extensions-list";

export interface ExtensionCardListProps {
  extensionsData: ExtensionListDataResponse[];
  handleOnToggle: (extensionName: string) => void;
}
