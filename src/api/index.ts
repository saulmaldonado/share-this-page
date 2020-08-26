import axois from 'axios';
import config from '../config';

export const apiClient = axois.create({ baseURL: config.baseURL });
