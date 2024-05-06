import styled from "styled-components";
import QuestionHeader from "./QuestionHeader/QuestionHeader";

const Container = styled.div`
  border-radius: 12px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 4px 0px, rgba(0, 0, 0, 0.08) 0px 0px 2px 0px;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const QuestionContainer = () => {
  return (
    <Container>
      <QuestionHeader />
    </Container>
  );
};

export default QuestionContainer;
