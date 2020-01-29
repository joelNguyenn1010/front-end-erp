import React, { useEffect, useState, useRef } from "react";
import { Badge } from "antd";

export declare const ConditionCheck: ["NIB", "NOB", "USEDA", "USEDB", "USEDC", "PART"];

const goUp = "#52c41a";
const goDown = "red";
const stable = "#999";

export declare const StatusCheck: [typeof goUp, typeof goDown, typeof stable]

interface DisplaySortedItemProps {
  cond: typeof ConditionCheck[number];
  text: string;
  record: any;
}


const DisplaySortedItem: React.FC<DisplaySortedItemProps> = props => {

  let previousValue = 0

  const [status, setStatus] = useState<typeof StatusCheck[number]>(stable)



  const { record } = props;

  const [value, setValue] = useState<number>(0)

  // const [initData, setInitData] = useState<number>(0)


  const firstUpdate = useRef(false);




  useEffect(() => {

    const data = record.find((element: any) => {
      return element.name === props.cond
    })
    const qty = data ? data.QTY : 0

    // setValue(qty)

    if (firstUpdate.current) {
      changeStatus(qty)
    } else {
      setValue(qty)
      firstUpdate.current = true
    }


    


  }, [record])





  const changeStatus = (newData: any) => {


    if (newData > value) {
      setStatus(goUp)
    } else if (newData < value) {
      setStatus(goDown)
    } else {
      setStatus(stable)
    }

    setValue(newData)
    // setInitData(newData)
  }

  return <><Badge showZero={true} count={value} style={{ backgroundColor: status }} /></>;
};

export default DisplaySortedItem;
