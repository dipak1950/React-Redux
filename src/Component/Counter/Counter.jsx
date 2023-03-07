import { useDispatch, useSelector } from 'react-redux';
import './Counter.css';
import { Increment, decrement, RESET, IncrementAsync, decrementAsync } from '../../Services/Action/Counter.Action';

function Counter() {
    const { count } = useSelector((state) => state.IncDsc);
    const { isLoading } = useSelector((state) => state.IncDsc);
    const dispatch = useDispatch();

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='w-3'>
                        <button onClick={() => dispatch(IncrementAsync())}>
                            +
                        </button>
                    </div>
                    <div className='w-3'>
                        {
                            isLoading ? <h2>Loading....</h2> : <h3>
                                {
                                    count
                                }
                            </h3>
                        }
                    </div>
                    <div className='w-3'>
                        <button onClick={() => dispatch(decrementAsync())}>
                            -
                        </button>
                    </div>
                    <div className='w-3'>
                        <button onClick={() => dispatch(RESET())}>
                            RESET
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;