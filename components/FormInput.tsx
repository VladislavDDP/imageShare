import { TextInput } from "react-native"
import React from "react"

const FormInput = (props: any) => {
    const { placeholder } = props
    return (
        <>
            <TextInput {...props} placeholder={placeholder} />
        </>
    )
} 

export default FormInput