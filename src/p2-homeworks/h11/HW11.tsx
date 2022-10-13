import React, {useEffect, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import styles from "./HW11.module.css"
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";


type ChangeResult = {
    min: number;
    max: number;
    minValue: number;
    maxValue: number;
};

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRangeHandler = (value: number) => {
        if (value < value2) {
            setValue1(value)
        }
    }

    const handleInput1 = (val1: number) => {
        if (val1 < value2) {
            setValue1(val1)
        }
    }

    const handleInput2 = (val2: number) => {
        if (val2 > value1) {
            setValue2(val2)
        }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={styles.superRangeBlock}>
                <span className={styles.numDisplay}>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRangeHandler}
                    value1={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div className={"superDoubleRangeBlock"}>
                <span className={styles.numDisplay}>{value1}</span>
                <SuperDoubleRange
                    onChangeRange1={handleInput1}
                    onChangeRange2={handleInput2}
                    value1={value1}
                    value2={value2}
                    min={0}
                    max={100}
                    onChange={({min, max}: { min: number; max: number }) => {
                        setValue1(min);
                        setValue2(max)
                    }}
                />
                <span className={styles.numDisplay}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
