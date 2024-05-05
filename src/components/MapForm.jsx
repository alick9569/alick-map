
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const MapForm = ({ onFinish, initialValues, submitButtonLoading }) => {

const [form, setForm] = useState(initialValues);

const handleSubmit = (e) => {
    e.preventDefault();
    onFinish(form)
};

const handleReset = () => {
    setForm(initialValues);
};

return (
    <div className='form-container'>
        <Form onSubmit={handleSubmit} onReset={handleReset} className='form'>
        <Form.Group className="mb-3" controlId="origin">
        
            <Form.Label>Starting location</Form.Label>
            <Form.Control
                type="text"
                placeholder="Input a Location"
                value={form.origin}
                onChange={(e) => setForm({ ...form, origin: e.target.value })}
                required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="destination">
            <Form.Label>Drop-off point</Form.Label>
            <Form.Control
                type="text"
                placeholder="Input a Location"
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                required
            />
        </Form.Group>

        <br />

        <Button variant="info" type="submit" style={{marginRight: 15}}>
            Submit
        </Button>
        <Button variant="dark" type="reset">Reset</Button>
        </Form>
    </div>
  );
};

export default MapForm;