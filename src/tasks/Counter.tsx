import React from 'react';


type CounterProps = {
  value: number;
}
function Counter(props: CounterProps) {
      return (
        <div>
            <span>{props.value}</span>
        </div>
    );
}
export default Counter;