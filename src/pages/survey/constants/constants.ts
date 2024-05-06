import { ShortForm } from "../../../types/questionType";

export const DEFAULT_FORM_DATA: ShortForm = {
  id: crypto.randomUUID(),
  title: "",
  isRequired: true,
  type: "short",
};
