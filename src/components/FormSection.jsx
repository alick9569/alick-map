import { Fragment } from "react";
import MapForm from './MapForm';

const FormSection = () => {

    const initialValues = {
        origin: '',
        destination: ''
    }

    const onFinish = (values) => {
        console.log(values)
    }

    return (
        <Fragment>
            <MapForm onFinish={onFinish} initialValues={initialValues}/>
        </Fragment>
    );
}

export default FormSection;