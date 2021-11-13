import styled from "styled-components";

type ContainerProps = {
  done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=> (
  `
  display: flex;
  background: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 11px;
  align-items: center;

  input {
    width: 25px;
    height: 25px;
    margin-right: 8px;
    background: #c03;
    opacity: ${done ? '40%' : '100%'}
  }

  label {
    color: ${done ? '#444' : '#ccc'};
    text-decoration ${done ? 'line-through': 'initial'};
  }
  `
));
