import React, { useState } from 'react'
import {Button} from 'antd'

import CreateNewRepresentative from './create-new-representative.component'


interface ButtonAddRepresentativeProps {
  onClose?: () => void
}
const ButtonAddRepresentative: React.FC<ButtonAddRepresentativeProps> = props => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <React.Fragment>
      <Button
        onClick={() => setOpen(true)}
        style={{ width: "100%" }}
        type="primary"
      >
        Add more
      </Button>

      {open && <CreateNewRepresentative onClose={props.onClose}  setOpen={setOpen} open={open}/>}
      
    </React.Fragment> 
    )
}


export default ButtonAddRepresentative