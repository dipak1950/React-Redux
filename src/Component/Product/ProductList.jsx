import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader/Loader'
import { ProductDataAsync } from '../../Services/Action/Product.Action';

function ProductList() {
    const { detail, isLoading } = useSelector((state) => state.ProR);
    // const  = useSelector((state) => state.ProR);
    const dispatch = useDispatch()

    return (
        <>
            <h1>
                Redux Thunk
            </h1>
            <button onClick={() => dispatch(ProductDataAsync())}>Product</button>
            {
                isLoading ? <Loader /> : <h3>
                    {
                        detail
                    }
                </h3>
            }
            {/* <h2>
                {
                    Product.map((p) => {
                        return (
                            <>
                                <h5>
                                    {
                                        p.id
                                    }
                                </h5>
                                <h5>
                                    {
                                        p.title
                                    }
                                </h5>
                                <h5>
                                    {
                                        p.price
                                    }
                                </h5>
                            </>
                        )
                    })
                }
            </h2> */}
        </>
    )
}

export default ProductList