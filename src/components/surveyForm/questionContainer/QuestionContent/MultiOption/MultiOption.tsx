import styled from "styled-components";
import { CheckboxForm, QuestionForm, RadioForm } from "../../../../../types/questionType";
import Input from "../../../../../ui/Input/Input";
import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent } from "react";
import Button from "@mui/material/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

const CheckboxContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const DEFAULT_OPTION = { isSelected: false, optionTitle: "" };

interface MultiOptionProps {
  formData: CheckboxForm | RadioForm;
  onChangeQuestion: (updatedQuestion: QuestionForm[number]) => void;
}

const MultiOption = (props: MultiOptionProps) => {
  const { formData, onChangeQuestion } = props;

  const { type, options, etcOption } = formData;

  const handleAddOption = () => {
    onChangeQuestion({
      ...formData,
      options: formData.options.concat(DEFAULT_OPTION),
    });
  };

  const handleToggleOption = (index: number) => {
    onChangeQuestion({
      ...formData,
      options: formData.options.map((option, i) =>
        i === index ? { ...option, isSelected: !option.isSelected } : option
      ),
    });
  };

  const handleChangeOptionTitle = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    onChangeQuestion({
      ...formData,
      options: formData.options.map((option, i) =>
        i === index ? { ...option, optionTitle: e.currentTarget.value } : option
      ),
    });
  };

  const handleAddEtcOption = () => {
    onChangeQuestion({
      ...formData,
      etcOption: DEFAULT_OPTION,
    });
  };

  const handleToggleEtcOption = () => {
    if (!etcOption) {
      return;
    }

    onChangeQuestion({
      ...formData,
      etcOption: { ...etcOption, isSelected: !etcOption.isSelected },
    });
  };

  const handleChangeEtcOptionTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!etcOption) {
      return;
    }

    onChangeQuestion({
      ...formData,
      etcOption: { ...etcOption, optionTitle: e.currentTarget.value },
    });
  };

  return (
    <Container>
      {type === "checkbox" ? (
        <div>
          <span>체크항목</span>
          {options.map((option, i) => (
            <CheckboxContainer key={i}>
              <Checkbox checked={option.isSelected} onClick={() => handleToggleOption(i)} />
              <Input value={option.optionTitle} onChange={e => handleChangeOptionTitle(e, i)} />
            </CheckboxContainer>
          ))}
          {etcOption ? (
            <CheckboxContainer>
              <Checkbox checked={etcOption.isSelected} onClick={() => handleToggleEtcOption()} />
              <Input value={etcOption.optionTitle} onChange={e => handleChangeEtcOptionTitle(e)} />
            </CheckboxContainer>
          ) : null}
        </div>
      ) : (
        <div>
          <span>선택항목</span>
          <RadioGroup name="controlled-radio-buttons-group">
            {options.map((option, i) => (
              <FormControlLabel
                key={i}
                control={
                  <Radio checked={option.isSelected} onClick={() => handleToggleOption(i)} />
                }
                label={
                  <Input value={option.optionTitle} onChange={e => handleChangeOptionTitle(e, i)} />
                }
              />
            ))}
            {etcOption ? (
              <FormControlLabel
                control={
                  <Radio checked={etcOption.isSelected} onClick={() => handleToggleEtcOption()} />
                }
                label={
                  <Input
                    value={etcOption.optionTitle}
                    onChange={e => handleChangeEtcOptionTitle(e)}
                  />
                }
              />
            ) : null}
          </RadioGroup>
        </div>
      )}
      <ButtonContainer>
        <Button variant="outlined" onClick={() => handleAddOption()}>
          항목 추가
        </Button>
        {!etcOption ? (
          <Button variant="outlined" onClick={() => handleAddEtcOption()}>
            기타 항목 추가
          </Button>
        ) : null}
      </ButtonContainer>
    </Container>
  );
};

export default MultiOption;
