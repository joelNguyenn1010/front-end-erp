import React from 'react'

import styled from 'styled-components'
import { Tooltip } from 'antd'

const DisplayText = styled.p`
    cursor: pointer;

    &:hover {
        color: blue;
    }

`

const usefulTxt = "Click to edit"

interface EditableDisplayTextProps {
    onClick?: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
    style?: any
}

const EditableDisplayText: React.FC<EditableDisplayTextProps> = props => {

    return (
        <Tooltip placement="top" title={usefulTxt}>
            <DisplayText style={props.style} onClick={props.onClick}>
                {props.children}
            </DisplayText>
        </Tooltip>
    )
}

export default EditableDisplayText