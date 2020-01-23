// @ts-ignore
import React, {useState} from "react";
import {Button} from "antd";
import CreateEcommercialId from "./create-new-ecommercialId.component";

interface ButtomAddEcommercialProps {
    refetchData?: () => void
}

const ButtonAddEcommercial:React.FC<ButtomAddEcommercialProps> = (props: any) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <React.Fragment>
            <Button
                onClick={() => setOpen(true)}
                style={{ width: "100%" }}
                type="primary"
            >
                Add more
            </Button>

            <CreateEcommercialId refetchData={props.refetchData} setOpen={setOpen} open={open}/>

        </React.Fragment>

    );
}

export default ButtonAddEcommercial