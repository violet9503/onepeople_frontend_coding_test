import { QuestionType, ShortForm } from "../../../types/questionType";

export const DEFAULT_FORM_DATA: ShortForm = {
  id: crypto.randomUUID(),
  title: "",
  isRequired: true,
  type: "short",
};

export const QUESTION_LABEL_TEMPLATE: Array<{ type: QuestionType; label: string }> = [
  { type: "long", label: "장문형 답변" },
  { type: "short", label: "단문형 답변" },
  { type: "radio", label: "객관식 답변(단일 선택)" },
  { type: "checkbox", label: "객관식 답변(복수 선택)" },
  { type: "file", label: "파일업로드" },
];
