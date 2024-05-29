import { format } from 'util';
import '@testing-library/jest-dom';


// console.error should fail tests
console.error = (message, ...params) => {
    throw new Error(format(message, ...params));
}