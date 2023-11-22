import React from "react"



export const useAnimation = (initialValue = "", onClose = () => { }, duration = 200): [string, any, () => void] => {

    const [value, setValue] = React.useState(initialValue)

    const onCloseCallback = () => {
        setValue("ease-out");
        onClose();

        setTimeout(() => {
            setValue("")
        }, duration)
    }


    return [value, setValue, onCloseCallback]
}