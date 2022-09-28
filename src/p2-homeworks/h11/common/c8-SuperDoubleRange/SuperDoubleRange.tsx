import React from 'react'
import SuperRange from "../c7-SuperRange/SuperRange";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value: [number, number]
    onChangeRangeHandler: (v: number) => void
    onChangeRangeHandler2: (v: number) => void
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


    return (
        <>

        </>
    )
}

export default SuperDoubleRange
