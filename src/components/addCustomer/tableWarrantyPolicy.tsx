import React from 'react'

import InputIpsWarrantyPolicyComponent from './addWarrantyPolicy/inputIpsWarrantyPolicyComponent'
import InputCusWarrantyPolicyComponent from './addWarrantyPolicy/inputCusWarrantyPolicyComponent'

const TableWarrantyPolicy = () => {
    return (
        <div>
            <tr>
                <td>
                    Ips's warranty policy:
                    <InputIpsWarrantyPolicyComponent />
                </td>
                <td>
                    Customer warranty policy:
                    <InputCusWarrantyPolicyComponent />
                </td>
            </tr>
        </div>
    )
}

export default TableWarrantyPolicy