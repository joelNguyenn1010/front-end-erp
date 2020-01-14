import React from 'react'
import   InputCountryComponent  from './addAddress/inputCountryCoponent'
import InputPostcodeComponent from './addAddress/inputPostcodeComponent'
import InputCityComponent from './addAddress/inputCityComponent'
import InputStateComponent from './addAddress/inputStateComponent'
import InputStreetnameComponent from './addAddress/inputStreetnameComponent'
import InputStreetnumberComponent from './addAddress/inputStreetnumberComponent'
import InputCourrierNameComponent from './addShippingAccount/inputCourrierNameComponent'
import AddNoteForShippingComponent from './addNote/addNoteForShippingComponent'
import AddNoteForReceivingComponent from './addNote/addNoteForReceivingComponent'

const TableAddressDetail = () => {
    return (
        <div>
            <tr>
                <td>
                    Country:
                    <InputCountryComponent />
                </td>

                <td>
                    Postcode:
                    <InputPostcodeComponent />
                </td>

                <td>
                    City:
                    <InputCityComponent />
                </td>
            </tr>

            <tr>
                <td>
                    State:
                    <InputStateComponent />
                </td>

                <td>
                    Street Number:
                    <InputStreetnumberComponent />
                </td>

                <td>
                    Street Name:
                    <InputStreetnameComponent />
                </td>
            </tr>
            <tr style={{display:' inline-block' , marginTop:'10px'}}>
                <td>Customer Shipping Account: </td>
                <td><InputCourrierNameComponent/></td>
            </tr> 

            <tr style={{display: 'inline-block', marginTop:'10px'}}>
                <td>
                    Note for Shipping:
                    <AddNoteForShippingComponent />
                </td>

                <td>
                    Note for Receiving:
                    <AddNoteForReceivingComponent />
                </td>
            </tr>
        </div>
    )
}

export default TableAddressDetail
