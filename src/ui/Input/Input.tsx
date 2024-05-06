import React from "react";
import { Input as BaseInput, InputProps } from "@mui/base/Input";
import { styled } from "@mui/system";

const InputElement = styled("input")(
  () => `
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: #1C2025;
    background: #fff;
    border: 1px solid #DAE2ED;
    box-shadow: 0px 2px 2px #F3F6F9;

    &:hover {
      border-color: #3399FF;
    }
  `
);

const Input = React.forwardRef(function CustomInput(
  props: InputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return <BaseInput slots={{ input: InputElement }} {...props} ref={ref} />;
});

export default Input;
