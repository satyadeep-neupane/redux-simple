import { useDispatch } from 'react-redux';
import { INCREMENT, DECREMENT } from './storeRTK';

function CountComponent()
{
    const dispatch = useDispatch();
    return(
        <div>
            <button onClick={() => dispatch(INCREMENT())}>-</button>
            <button onClick={() => dispatch(DECREMENT())}>+</button>
        </div>
    )
}

export default CountComponent;