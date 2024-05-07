import styled from "styled-components";
import QuestionHeader from "./QuestionHeader/QuestionHeader";
import Input from "../../../ui/Input/Input";
import { QuestionForm, QuestionType } from "../../../types/questionType";
import Short from "./QuestionContent/Short/Short";
import Long from "./QuestionContent/Long/Long";
import MultiOption from "./QuestionContent/MultiOption/MultiOption";
import FileUpload from "./QuestionContent/FileUpload/FileUpload";

const Container = styled.div`
  border-radius: 12px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1.5rem;
`;

interface QuestionContainerProps {
  formData: QuestionForm[number];
  onChangeType: (type: QuestionType) => void;
}

const QuestionContainer = (props: QuestionContainerProps) => {
  const { formData, onChangeType } = props;

  return (
    <Container>
      <QuestionHeader type={formData.type} onChangeType={onChangeType} />
      <Content>
        <Input aria-label="question input" placeholder="질문 내용을 200자 이내로 입력해주세요" />
        {(() => {
          switch (formData.type) {
            case "short":
              return <Short />;
            case "long":
              return <Long />;
            case "checkbox":
            case "radio":
              return <MultiOption formData={formData} />;
            case "file":
              return <FileUpload />;
          }
        })()}
      </Content>
    </Container>
  );
};

export default QuestionContainer;
