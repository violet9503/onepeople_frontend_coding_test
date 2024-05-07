import styled from "styled-components";
import { CheckboxForm, RadioForm } from "../../../../../types/questionType";
import Input from "../../../../../ui/Input/Input";
import { Checkbox, FormControlLabel, Radio, RadioGroup } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
`;

interface MultiOptionProps {
  formData: CheckboxForm | RadioForm;
}

const MultiOption = (props: MultiOptionProps) => {
  const { formData } = props;
  const { type, options, etcOption } = formData;

  return (
    <Container>
      {type === "checkbox" ? (
        <div>
          <span>체크항목</span>
          {options.map(option => (
            <Container>
              <Checkbox />
              <Input value={option.optionTitle} />
            </Container>
          ))}
        </div>
      ) : (
        <div>
          <span>선택항목</span>
          <RadioGroup name="controlled-radio-buttons-group">
            {options.map(option => (
              <>
                <FormControlLabel
                  control={<Radio />}
                  label={<Input value={option.optionTitle} />}
                />
              </>
            ))}
          </RadioGroup>
        </div>
      )}
    </Container>
  );
};

export default MultiOption;
