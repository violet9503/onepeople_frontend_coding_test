export type QuestionType = "short" | "long" | "checkbox" | "radio" | "file";

interface DefaultFormData {
  title: string;
  isRequired: boolean;
}

export interface ShortForm extends DefaultFormData {
  type: "short";
}

interface LongForm extends DefaultFormData {
  type: "long";
}

type Option = { isSelected: boolean; optionTitle: string };

interface CheckboxForm extends DefaultFormData {
  type: "checkbox";
  options: Array<Option>;
  etcOption?: Option;
}

interface RadioForm extends DefaultFormData {
  type: "radio";
  options: Array<Option>;
  etcOption?: Option;
}

interface FileForm extends DefaultFormData {
  type: "file";
}

export type QuestionForm = Array<ShortForm | LongForm | CheckboxForm | RadioForm | FileForm>;
