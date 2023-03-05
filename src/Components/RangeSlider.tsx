import classNames from "classnames";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useState } from "react";

interface Props {
    color?: string;
    min?: number;
    max: number;
    start: [number, number];
}

const RangeSlider = ({ color, min, max, start }: Props) => {
    const [rangeValueFrom, setRangeValueFrom] = useState(start[0]);
    const [rangeValueTo, setRangeValueTo] = useState(start[1]);

    const handleChange = (value: any) => {
        setRangeValueFrom(value[0]);
        setRangeValueTo(value[1]);
    }

    return (
        <div className={classNames('range-slider', color && `range-slider--color_${color}`)}>
            <Nouislider range={{ min: min ?? 0, max: max }} start={start} connect onSlide={handleChange} />
            <div className="range-slider__values">
                <div className="range-slider__value">
                    <span>от</span>
                    <input className="range-slider__value-input" type="number" value={rangeValueFrom} readOnly />
                </div>
                <div className="range-slider__value">
                    <span>до</span>
                    <input className="range-slider__value-input" type="number" value={rangeValueTo} readOnly />
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;