import { describe, it, expect } from 'vitest';
import { getToken, getRoute } from '../redux/actions/MapAction';
import { Store } from '../redux/Store';

describe('Map Action', () => {
	it('should get a token and success to store into the map state or getting error 500 status', async () => {
        const store = Store
        const params = { origin: "Hong Kong", destination: "Kowloon" };

        global.window = {
            location: { pathname: '/' },
        };

        try {
            await store.dispatch(getToken(params));
            const state = store.getState();
            expect(typeof state.map.token).toBe('string');
            expect(state.map.token).toBe("9d3503e0-7236-4e47-a62f-8b01b5646c16");
        } 
        catch (error) {
            expect(error.response.status).toBe(500);
        }
	});

	it('should get a status and success store into the map state or getting error 500 status', async () => {
        const store = Store
        const params = "9d3503e0-7236-4e47-a62f-8b01b5646c16"

        global.window = {
            location: { pathname: '/' },
        };

        try {
            await store.dispatch(getRoute(params));
            const state = store.getState();
            expect(typeof state.map.status).toBe('string');
            expect(state.map.status).toMatch(/success|failure|in progress/i);
        } catch (error) {
            expect(error.response.status).toBe(500);
        }
    
	});
});