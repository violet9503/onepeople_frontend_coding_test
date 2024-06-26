import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import styled from "styled-components";
import Dropdown from "../../../../ui/Dropdown/Dropdown";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CopyIcon from "@mui/icons-material/ContentCopy";
import { QuestionType } from "../../../../types/questionType";
import { QUESTION_LABEL_TEMPLATE } from "../../../../pages/survey/constants/constants";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionRightOption = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

interface QuestionHeaderProps {
  type: QuestionType;
  isRequired: boolean;
  onChangeType: (type: QuestionType) => void;
  onToggleIsRequired: () => void;
  onAddQuestion: () => void;
  onCopyQuestion: () => void;
  onDeleteQuestion: () => void;
}

const QuestionHeader = (props: QuestionHeaderProps) => {
  const {
    type,
    isRequired,
    onChangeType,
    onToggleIsRequired,
    onAddQuestion,
    onCopyQuestion,
    onDeleteQuestion,
  } = props;

  const handleClickDropdownItem = (label: (typeof QUESTION_LABEL_TEMPLATE)[number]["label"]) => {
    const selectedType = QUESTION_LABEL_TEMPLATE.find(template => template.label === label)?.type;

    if (selectedType) {
      onChangeType(selectedType);
    }
  };

  return (
    <Container>
      <FormControlLabel
        control={<Checkbox checked={isRequired} onClick={onToggleIsRequired} />}
        label="필수 항목"
      />
      <QuestionRightOption>
        <Dropdown
          items={QUESTION_LABEL_TEMPLATE.map(template => template.label)}
          selectedItem={
            QUESTION_LABEL_TEMPLATE.find(template => template.type === type)?.label || ""
          }
          onClickItem={handleClickDropdownItem}
        />
        <ButtonContainer>
          <IconButton aria-label="add" size="large" onClick={onAddQuestion}>
            <AddIcon />
          </IconButton>
          <IconButton aria-label="copy" size="large" onClick={onCopyQuestion}>
            <CopyIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large" onClick={onDeleteQuestion}>
            <DeleteIcon />
          </IconButton>
        </ButtonContainer>
      </QuestionRightOption>
    </Container>
  );
};

export default QuestionHeader;
