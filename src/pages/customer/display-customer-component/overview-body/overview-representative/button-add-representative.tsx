import React, { useState } from 'react'
import { Button } from 'antd'

import CreateNewRepresentative from './create-new-representative.component'


interface ButtonAddRepresentativeProps {
  refetchData?: () => void
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

      <CreateNewRepresentative refetchData={props.refetchData} setOpen={setOpen} open={open} />

    </React.Fragment>
  )
}


export default ButtonAddRepresentative