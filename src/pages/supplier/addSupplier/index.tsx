import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import AddCustomer from '../../customer/add'

interface AddSupplierProps {
    onSuccess?: () => void
}
const AddSupplier: React.FC<AddSupplierProps> = props => {

    const [open, setOpen] = useState<boolean>(false)
    return (
        <React.Fragment>
            <Button onClick={() => setOpen(true)}>
                Create Supplier
        </Button>
            <Drawer
                title="Create new supplier/organisation"
                visible={open}
                onClose={() => setOpen(false)}
                placement="right"
            >
                <AddCustomer onSuccess={props.onSuccess} />
            </Drawer>
        </React.Fragment>
    )
}

export default AddSupplier
