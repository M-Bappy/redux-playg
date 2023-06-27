import { decrement, addHistory, DECREMENT } from "../store";
import { useDispatch } from "react-redux";

const DecBtn = () => {
  const dispatch = useDispatch();

  const handleClick = ()=>{
    dispatch(decrement(1))
    dispatch(addHistory({action: DECREMENT, count: 1}))
  }
  return <button onClick={handleClick}>-</button>;
};

export default DecBtn;





