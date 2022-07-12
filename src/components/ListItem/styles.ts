import styled from "styled-components";

export const Label = styled.label`
  display: flex;
  margin: 10px;
`;

type LabelProps = {
  text: boolean;
};

export const Paragraph = styled.p<LabelProps>`
  text-decoration: ${(props) => (props.text ? "line-through" : "none")};
  margin: 10px;
`;

export const Button = styled.button`
  color: white;
  background-color: rgba(32, 32, 32, 0.226);
  border: none;
  padding: 20px;
`;

export const Container = styled.div`
  display: flex;
`;
