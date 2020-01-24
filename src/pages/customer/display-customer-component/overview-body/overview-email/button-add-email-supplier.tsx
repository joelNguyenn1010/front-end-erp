import React from 'react'
import { Button } from 'antd';
import CreateNewEmailSupplier from "./create-new-email-supplier-modal";

interface ButtonAddEmailSupplierProps {
    refetchData: () => void
}

const ButtonAddEmailSupplier:React.FC<ButtonAddEmailSupplierProps> = (props: any) => {

    const [open, setOpen] = React.useState<boolean>(false);

    return(
        <React.Fragment>
            <Button
                onClick={() => setOpen(true)}
                style={{ width: "100%" }}
                type="primary"
            >
                Add more
            </Button>

            <CreateNewEmailSupplier refetchData={props.refetchData} setOpen={setOpen} open={open}/>

        </React.Fragment>
    )
}

export default ButtonAddEmailSupplier