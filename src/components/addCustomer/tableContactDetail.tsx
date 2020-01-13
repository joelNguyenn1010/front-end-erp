import React from 'react'
import AddSalutation from './addContactDetail/addSalutation'
import AddFirstName from './addContactDetail/addFirstName'
import AddLastName from './addContactDetail/addLastName'
import AddPosition from './addContactDetail/addPosition'
import AddPhoneNumber from './addContactDetail/addPhoneNumber'
import AddEmail from './addContactDetail/addEmail'




const TableRepresentative = () => {
    return (
        <div>
            <tr>
                <td>
                    Salutation:
                    <AddSalutation />
                </td>
                <td>
                    First Name: 
                    <AddFirstName />
                </td>
                <td>
                    Last Name:
                    <AddLastName />
                </td>
            </tr>

            <tr>
                <td>
                    Position:
                    <AddPosition />
                </td>
                <td>
                    Phone Number:
                    <AddPhoneNumber />
                </td>
                <td>
                    Email:
                    <AddEmail />
                </td>
            </tr>
        </div>
    )
}

export default TableRepresentative