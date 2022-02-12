import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const cachedAxios = setupCache(axios);

export default cachedAxios;
