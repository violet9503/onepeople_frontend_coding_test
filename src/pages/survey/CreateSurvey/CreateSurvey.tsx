import { useState } from "react";
import { QuestionForm } from "../../../types/questionType";
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

  return (
    <SurveyForm>
      {surveyForm.map(formData => (
        <QuestionContainer formData={formData} />
      ))}
      <Button variant="outlined">항목 추가하기</Button>
    </SurveyForm>
  );
};

export default CreateSurvey;
