import { ChangeEventHandler } from "react";
import styled from "styled-components";
import { QuestionForm, QuestionType } from "../../../types/questionType";
import Input from "../../../ui/Input/Input";
import FileUpload from "./QuestionContent/FileUpload/FileUpload";
import Long from "./QuestionContent/Long/Long";
import MultiOption from "./QuestionContent/MultiOption/MultiOption";
import Short from "./QuestionContent/Short/Short";
import QuestionHeader from "./QuestionHeader/QuestionHeader";

const Container = styled.div<{ $isSelected: boolean }>`
  border-radius: 12px;
  width: 100%;
  box-shadow: ${props =>
    props.$isSelected
      ? `rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px, rgba(101, 88, 255, 0.4) 0px 0px 20px 0px;`
      : "rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px"};
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
  isSelected: boolean;
  onChangeType: (type: QuestionType) => void;
  onChangeQuestion: (updatedQuestion: QuestionForm[number]) => void;
  onFocusQuestion: () => void;
  onAddQuestion: () => void;
  onCopyQuestion: () => void;
  onDeleteQuestion: () => void;
}

const QuestionContainer = (props: QuestionContainerProps) => {
  const {
    formData,
    isSelected,
    onChangeType,
    onChangeQuestion,
    onFocusQuestion,
    onAddQuestion,
    onCopyQuestion,
    onDeleteQuestion,
  } = props;

  const handleToggleIsRequired = () => {
    onChangeQuestion({ ...formData, isRequired: !formData.isRequired });
  };

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = e => {
    onChangeQuestion({ ...formData, title: e.currentTarget.value });
  };

  return (
    <Container $isSelected={isSelected} onClick={onFocusQuestion}>
      <QuestionHeader
        type={formData.type}
        isRequired={formData.isRequired}
        onChangeType={onChangeType}
        onToggleIsRequired={handleToggleIsRequired}
        onAddQuestion={onAddQuestion}
        onCopyQuestion={onCopyQuestion}
        onDeleteQuestion={onDeleteQuestion}
      />
      <Content>
        <Input
          aria-label="question input"
          placeholder="질문 내용을 200자 이내로 입력해주세요"
          value={formData.title}
          onChange={handleChangeTitle}
        />
        {(() => {
          switch (formData.type) {
            case "short":
              return <Short />;
            case "long":
              return <Long />;
            case "checkbox":
            case "radio":
              return <MultiOption formData={formData} onChangeQuestion={onChangeQuestion} />;
            case "file":
              return <FileUpload />;
          }
        })()}
      </Content>
    </Container>
  );
};

export default QuestionContainer;
