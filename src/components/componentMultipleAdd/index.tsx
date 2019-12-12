import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

interface MultipleAddProps {
  input: string;
  setInput: (value: string) => void;
  //   masterName: string[];
  //   onClickBtn: (otherName: string) => void;
}

const MultipleAddContainer: React.FC<MultipleAddProps> = (props: any) => {
  const [data, setData] = React.useState<Array<string>>([]);

  const handleChange = (value: React.FormEvent<HTMLInputElement>) => {
    props.setInput(value.currentTarget.value);
  };

  const handleSubmit = (value: React.FormEvent<HTMLFormElement>) => {
    const oldData = data.concat();
    oldData.push(props.input);
    setData(oldData);

    console.log(oldData);
    props.setInput("");
    value.preventDefault();
  };

  const removeOtherName = (index: any) => {
    const copyData = data.concat();
    copyData.splice(index, 1);

    setData(copyData);

    // var result = data.filter((a: any) => a.id)
  };

  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasic">
        <Form.Label>
          {data &&
            data.map((value: any, index: any) => {
              return (
                <div key={index}>
                  <Form className="p-3 mb-2 bg-primary text-white">
                    {value} 
                    <Button onClick={() => removeOtherName(index)}>X</Button>
                  </Form>
                </div>
              );
            })}
        </Form.Label>

        <Form.Control type="text" value={props.input} onChange={handleChange} />
        {props.input.length > 0 && <Button type="submit">Add</Button>}
      </Form.Group>
    </Form>
  );
};

export default MultipleAddContainer;
