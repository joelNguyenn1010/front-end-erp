import React, { useEffect, useState } from "react";

export declare const ConditionCheck: ["NIB", "NOB", "USEDA", "USEDB", "USEDC", "PART"];

interface DisplaySortedItemProps {
  cond: typeof ConditionCheck[number];
  text: string;
  record: any;
}
const DisplaySortedItem: React.FC<DisplaySortedItemProps> = props => {

    const { record } = props;

    const [value, setValue] = useState<number>(0)

    useEffect(() => {

        
        const data =  record.find((element: any) => element.name === props.cond)
        const qty = data ? data.QTY : 0

        setValue(qty)

    }, [])

  return <p>{value}</p>;
};

export default DisplaySortedItem;
