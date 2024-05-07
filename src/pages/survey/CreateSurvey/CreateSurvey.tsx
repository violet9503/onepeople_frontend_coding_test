import { useState } from "react";
import { QuestionForm, QuestionType } from "../../../types/questionType";
import QuestionContainer from "../../../components/surveyForm/questionContainer/QuestionContainer";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { DEFAULT_FORM_DATA } from "../constants/constants";

const SurveyForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 100px;
  background-color: rgb(251, 251, 252);
  gap: 20px;
`;

const CreateSurvey = () => {
  const [surveyForm, setSurveyForm] = useState<QuestionForm>([DEFAULT_FORM_DATA]);
  const [selectedQuestionId, setSelectedQuestionId] = useState<QuestionForm[number]["id"]>("");

  const handleAddQuestion = (index?: number) => {
    const newQuestion = { ...DEFAULT_FORM_DATA, id: crypto.randomUUID() };

    setSurveyForm(prev =>
      index !== undefined
        ? prev.slice(0, index).concat(newQuestion, prev.slice(index))
        : prev.concat(newQuestion)
    );
  };

  const handleChangeQuestionType = (id: QuestionForm[number]["id"], type: QuestionType) => {
    const targetQuestion = surveyForm.find(formData => formData.id === id);

    if (targetQuestion) {
      const { isRequired, title } = targetQuestion;
      const newQuestion: QuestionForm[number] = (() => {
        switch (type) {
          case "short":
            return { type, id, title, isRequired };
          case "long":
            return { type, id, title, isRequired };
          case "checkbox":
            return { type, id, title, isRequired, options: [] };
          case "radio":
            return { type, id, title, isRequired, options: [] };
          case "file":
            return { type, id, title, isRequired };
        }
      })();

      setSurveyForm(prev => prev.map(formData => (formData.id === id ? newQuestion : formData)));
    }
  };

  const handleUpdateQuestion = (
    id: QuestionForm[number]["id"],
    updatedQuestion: QuestionForm[number]
  ) => {
    setSurveyForm(prev => prev.map(formData => (formData.id === id ? updatedQuestion : formData)));
  };

  const handleCopyQuestion = (id: QuestionForm[number]["id"]) => {
    const copyQuestion = surveyForm.find(formData => formData.id === id);

    if (copyQuestion) {
      setSurveyForm(prev => prev.concat({ ...copyQuestion, id: crypto.randomUUID() }));
    }
  };

  const handleDeleteQuestion = (id: QuestionForm[number]["id"]) => {
    setSurveyForm(prev => prev.filter(formData => formData.id !== id));
  };

  return (
    <SurveyForm>
      {surveyForm.map((formData, i) => (
        <QuestionContainer
          key={formData.id}
          formData={formData}
          isSelected={selectedQuestionId === formData.id}
          onChangeType={type => handleChangeQuestionType(formData.id, type)}
          onChangeQuestion={updatedQuestion => handleUpdateQuestion(formData.id, updatedQuestion)}
          onFocusQuestion={() => setSelectedQuestionId(formData.id)}
          onAddQuestion={() => handleAddQuestion(i)}
          onCopyQuestion={() => handleCopyQuestion(formData.id)}
          onDeleteQuestion={() => handleDeleteQuestion(formData.id)}
        />
      ))}
      <Button variant="outlined" onClick={() => handleAddQuestion()}>
        항목 추가하기
      </Button>
    </SurveyForm>
  );
};

export default CreateSurvey;
