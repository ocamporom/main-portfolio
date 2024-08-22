import ky from 'ky';

const api = ky.create({ prefixUrl: import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000' });

export default api;
