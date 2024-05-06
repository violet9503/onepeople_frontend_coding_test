import { Checkbox, FormControlLabel, IconButton } from "@mui/material";
import styled from "styled-components";
import Dropdown from "../../../../ui/Dropdown/Dropdown";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CopyIcon from "@mui/icons-material/ContentCopy";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuestionRightOption = styled.div``;

const ButtonContainer = styled.div`
  display: flex;
`;

const DUMMY_ITEMS = [
  "장문형 답변",
  "단문형 답변",
  "객관식 답변(단일 선택)",
  "객관식 답변(복수 선택)",
  "파일업로드",
];

const QuestionHeader = () => {
  return (
    <Container>
      <FormControlLabel control={<Checkbox />} label="필수 항목" />
      <QuestionRightOption>
        <Dropdown items={DUMMY_ITEMS} selectedItem={DUMMY_ITEMS[0]} />
        <ButtonContainer>
          <IconButton aria-label="add" size="large">
            <AddIcon />
          </IconButton>
          <IconButton aria-label="copy" size="large">
            <CopyIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <DeleteIcon />
          </IconButton>
        </ButtonContainer>
      </QuestionRightOption>
    </Container>
  );
};

export default QuestionHeader;
