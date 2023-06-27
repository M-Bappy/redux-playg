import { increment, addHistory, INCREMENT } from "../store";
import { useDispatch } from "react-redux";

const IncBtn = () => {
  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(increment(1))
    dispatch(addHistory({action: INCREMENT, count: 1}))
  }

  return <button onClick={handleClick}>+</button>;
};

export default IncBtn;
