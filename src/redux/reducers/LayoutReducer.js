import { IS_SUBMITTING, SUBMITTED } from '../actions/LayoutAction'

const initialState = {
    submitting: false,
}

const LayoutReducer = function (state = initialState, action) 
{
    switch (action.type) 
    {
        case IS_SUBMITTING: {
            return {...state, submitting: true}
        }
        case SUBMITTED: {
            return {...state, submitting: false}
        }
        default:
            return {...state}
    }
}

export default LayoutReducer