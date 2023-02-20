import { useDispatch, useSelector } from 'react-redux';
import './Counter.css';
import { Increment, decrement, RESET } from '../../Services/Action/Counter.Action';

function Counter() {
    const count = useSelector((state) => state.IncDsc);
    const dispatch = useDispatch();

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='w-3'>
                        <button onClick={() => dispatch(Increment())}>
                            +
                        </button>
                    </div>
                    <div className='w-3'>
                        <h2>
                            {
                                count
                            }
                        </h2>
                    </div>
                    <div className='w-3'>
                        <button onClick={() => dispatch(decrement())}>
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