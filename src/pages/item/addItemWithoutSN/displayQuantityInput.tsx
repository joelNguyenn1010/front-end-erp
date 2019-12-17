import React from 'react'
import NumericInput from './inputQuantityItem'

const DisplayQuantityInput = () => {
    const [state, setState] = React.useState({value: ''})

  const onChange = (value: any) => {
    setState({ value });
  };

  
    return (
      <NumericInput value={state.value} onChange={onChange} />
    );
}

export default DisplayQuantityInput
