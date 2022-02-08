import React, {FC} from "react";
import styled from "styled-components";

export const ItemAddForm: FC = () => {
    return (
        <Form>
            <Input>
                <input placeholder="What needs to be done?" id="add_input" type="text" className="validate"/>
            </Input>
            <Button className="btn btn-large">Add</Button>
        </Form>
    );
};

const Form = styled.form`
  display: flex;
`;

const Input = styled.div`
  width: auto;
  flex-grow: 1;
  align-items: center;
`;

const Button = styled.button`
  margin-left: 1rem;
  transition: 0.5s all;
  &:hover {
    background-color: teal;
  }
`;
