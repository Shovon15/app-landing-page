import styled from "styled-components";

export default styled.div`
  cursor: pointer;
  transition: all 250ms ease-in;
  background-color: ${({ active }) => (active ? "#2196F3" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#2196F3")};
  transform: scale(${({ active }) => (!active ? 1 : 1.1)});
  box-shadow: 0 0 2px 1px #2196f3;
  display: flex;
  border: #2196f3;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin: 10px 10px;
`;
//
