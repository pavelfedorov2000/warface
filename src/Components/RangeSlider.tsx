import classNames from "classnames";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useState } from "react";
import { InputType } from "../enums/InputType";

interface Props {
    color?: string;
    min?: number;
    max: number;
    start: [number, number];
    onChange: (from: number, to: number) => void;
}

const mainClass = 'range-slider';

const RangeSlider = ({ onChange, color, min, max, start }: Props) => {
    const [rangeValueFrom, setRangeValueFrom] = useState(start[0]);
    const [rangeValueTo, setRangeValueTo] = useState(start[1]);

    const handleChange = (value: any) => {
        setRangeValueFrom(value[0]);
        setRangeValueTo(value[1]);
        onChange(value[0], value[1]);
    }

    return (
        <div className={classNames(mainClass, {
            [`${mainClass}--color_${color}`]: color
        })}>
            <Nouislider range={{ min: min ?? 0, max: max }} start={start} connect onSlide={handleChange} />
            <div className={`${mainClass}__values`}>
                <div className={`${mainClass}__value`}>
                    <span>от</span>
                    <input className={`${mainClass}__value-input`} type={InputType.Number} value={rangeValueFrom} readOnly />
                </div>
                <div className={`${mainClass}__value`}>
                    <span>до</span>
                    <input className={`${mainClass}__value-input`} type={InputType.Number} value={rangeValueTo} readOnly />
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;