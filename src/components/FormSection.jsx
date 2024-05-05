import { Fragment } from "react";
import useLayout from "../hooks/useLayout";
import { useDispatch } from "react-redux";
import MapForm from './MapForm';
import { getRoute, getToken } from "../redux/actions/MapAction";

const FormSection = () => {
    const layout = useLayout()
    const dispatch = useDispatch();

    const initialValues = {
        origin: '',
        destination: ''
    }

    const onFinish = async (values) => {
        try {
            const token = await dispatch(getToken(values))
            let status = await dispatch(getRoute(token))
            while(status == 'in progress') {
                status = await dispatch(getRoute(token))
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Fragment>
            <MapForm onFinish={onFinish} initialValues={initialValues} submitButtonLoading={layout.submitting}/>
        </Fragment>
    );
}

export default FormSection;