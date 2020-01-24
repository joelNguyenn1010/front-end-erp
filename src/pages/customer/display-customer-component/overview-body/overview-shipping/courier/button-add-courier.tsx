import React from 'react'
import { Button } from 'antd';
import CreateNewCourier from "./create-new-courier";

interface ButtonAddCourierProps {
    refetchData: () => void
}


const ButtonAddCourier:React.FC<ButtonAddCourierProps> = (props:any) => {
    const [open, setOpen] = React.useState<boolean>(false);

    return (
        <React.Fragment>
            <Button
                onClick={() => setOpen(true)}
                style={{ width: "100%" }}
                type="primary"
                aria-colspan={2}
            >
                Add more
            </Button>

            <CreateNewCourier refetchData={props.refetchData} setOpen={setOpen} open={open}/>

        </React.Fragment>
    )
}

export default ButtonAddCourier
