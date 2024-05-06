
import { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Autocomplete } from '@react-google-maps/api';
import useMap from '../hooks/useMap';

const MapForm = ({ onFinish, initialValues, submitButtonLoading }) => {

    const [form, setForm] = useState(initialValues);
    
    const map = useMap()

    const originRef = useRef(null);
    const destinationRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onFinish(form)
    };

    const handleReset = () => {
        setForm(initialValues);
    };

    const handleOriginChange = () => {
        let originAuto = originRef.current.getPlace().formatted_address 
        setForm({ ...form, origin: originAuto });
    };

    const handleDestinationChange = () => {
        let destinationAuto = destinationRef.current.getPlace().formatted_address 
        setForm({ ...form, destination: destinationAuto });
    };

    return (
        <div className='form-container'>
            <Form onSubmit={handleSubmit} onReset={handleReset} className='form'>
                <Form.Group className="mb-3" controlId="origin">
                
                    <Form.Label>Starting location</Form.Label>
                    <Autocomplete onLoad={(auto) => (originRef.current = auto)} onPlaceChanged={handleOriginChange}>
                        <Form.Control
                            type="text"
                            placeholder="Input a Location"
                            value={form.origin}
                            onChange={(e) => setForm({ ...form, origin: e.target.value })}
                            required
                        />
                    </Autocomplete>
                </Form.Group>

                <Form.Group className="mb-3" controlId="destination">
                    <Form.Label>Drop-off point</Form.Label>
                    <Autocomplete onLoad={(auto) => (destinationRef.current = auto)} onPlaceChanged={handleDestinationChange}>
                        <Form.Control
                            type="text"
                            placeholder="Input a Location"
                            value={form.destination}
                            onChange={(e) => setForm({ ...form, destination: e.target.value })}
                            required
                        />
                    </Autocomplete>
                </Form.Group>
                <br />
                <div className='message'>
                    { map.error ? <p style={{color: 'red'}}>{map.error}</p> : null }
                    { map.payload?.total_distance ? <p>Total Distance: {map.payload.total_distance}</p> : null }
                    { map.payload?.total_time ? <p>Total Time: {map.payload.total_time}</p> : null }
                </div>
                <div className='btn-grp'>
                    <Button variant="info" type="submit" disabled={submitButtonLoading} style={{marginRight: 15}}>
                        { map.error ? 'Re-Submit' : map.payload?.status === 'success' ? 'Re-Submit' : 'Submit'}
                    </Button>
                    <Button variant="dark" type="reset">Reset</Button>
                </div>
            </Form>
            
        </div>
    );
    };

export default MapForm;