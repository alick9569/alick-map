import React from 'react';
import MapForm from '../components/MapForm';
import { describe, it, vi, expect } from 'vitest';
import { Provider } from 'react-redux';
import { Store } from '../redux/Store';
import { render, fireEvent, screen } from '@testing-library/react';

/* Needs to be comment the AutoComplete Component in MapForm.jsx and start testing*/
describe('MapForm', () => {
    const initialValues = {
        origin: '',
        destination: '',
    };

    const onFinish = vi.fn();

    it('should be success to submit the input data after clicking the button', () => {
        const store = Store
        const MapFormComponent = render(
            <Provider store={store}>
                <MapForm onFinish={onFinish} initialValues={initialValues} />
            </Provider>
        );

        const originInput = screen.getByLabelText('Starting location');
        fireEvent.change(originInput, { target: { value: 'Hong Kong' } });

        const destinationInput = screen.getByLabelText('Drop-off point');
        fireEvent.change(destinationInput, { target: { value: 'Kowloon' } });

        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);

        expect(onFinish).toHaveBeenCalledTimes(1);
        expect(onFinish).toHaveBeenCalledWith({
            origin: 'Hong Kong',
            destination: 'Kowloon',
        });
    });
});