import { MapService } from "../../services/MapService";
import { IS_SUBMITTING, SUBMITTED } from "./LayoutAction";

export const GET_TOKEN = 'GET_TOKEN'
export const GET_ROUTE = 'GET_ROUTE'

export function getToken(params, onSuccess = null)
{
    return async (dispatch, getState) => {
        dispatch({type: IS_SUBMITTING})
        try {
            const response = await MapService.getToken(params)
            if (response.status == 200){
                const result = response.data
                dispatch({type: GET_TOKEN, token: result.token})
                if (onSuccess) onSuccess()
                return result.token
            }
        } catch (error) {
            throw error;
        } 
    }
}

export function getRoute(params, onSuccess = null, onError = null, onFinish = null)
{
    return async (dispatch, getState) => {
        dispatch({type: IS_SUBMITTING})
        try {
            const response = await MapService.getRoute(params)
            const result = response.data
            switch (result.status){
                case "in progress":  
                    dispatch({type: GET_ROUTE})
                    if (onSuccess) onSuccess()
                    return result.status
                case "success": 
                    dispatch({type: GET_ROUTE, payload: response.data})
                    if (onSuccess) onSuccess()
                    return result.status
                case "failure":
                    dispatch({type: GET_ROUTE, error: result.error })
                    if (onError) onError()
                    return result.status
            }
        } catch (error) {
            throw error;
        } finally {
            dispatch({type: SUBMITTED})
            if (onFinish) onFinish()
        }
    }
}