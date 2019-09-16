import React from 'react';

type FilterProps = {
    placeholder: string,
    // fieldName: string,
    handler: (e: React.FormEvent<HTMLInputElement>) => void,
    value: string,
}

const FilterField = (props: FilterProps) => {
    return <input type={"text"} placeholder={props.placeholder} onChange={props.handler} value={props.value}/>

};
export default FilterField;
