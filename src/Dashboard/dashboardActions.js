import axios from 'axios';
const BASE_URL = 'http://localhost:3003/api';

function getSummary() {
    const request = axios.get(`${BASE_URL}/billingcycles/summary`);
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}

export { getSummary }