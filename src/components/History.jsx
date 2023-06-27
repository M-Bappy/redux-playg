import {useSelector, useDispatch} from 'react-redux'

const History = () => {
    const History = useSelector(state => state.history)
    const dispatch =  useDispatch()
    return (
        <div>
            <p>history: <button>clear history</button></p>
            <ul>
                {History.map(item => (
                    <li key={item.id}>{item.action} - {item.count} - {item.time.toISOString()}</li>
                ))}
            </ul>
        </div>
    );
};

export default History;