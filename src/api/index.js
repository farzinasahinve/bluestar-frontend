import axios from 'axios';
import { toast } from 'react-toastify';
import {CONFIG} from '../utility/config'

const API = axios.create({ baseURL: CONFIG.SERVER_URL });
API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        const token = JSON.parse(localStorage.getItem('token')) || '';
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

API.interceptors.response.use(null, error => {
    const expectedError =
     error.response &&
     error.response.status >= 400 &&
     error.response.status < 500;

    if (!expectedError) {
     toast.error("An unexpected error occurred");
    }
   
    return Promise.reject(error);
});

// API.interceptors.response.use(response => {
//     return response;
//  }, error => {
//     //    if (error.response.status === 401) {
//     //        //return error.response;
//     //       //  window.location.assign('/login');
//     //    }
//     console.log(error)
// //    if(error.response.status === 500) {
// //        alert("Server error");
// //    }
//   // return error;
   
//  });

// authantication apis
export const signIn = (formData) => API.post('/login', formData);
export const signUp = (formData) => API.post('/register', formData);
export const logOut = () => API.get('/logout');
export const changePassword = (updatedForm) => API.put('/api/password/update', updatedForm);
export const passwordReset = ({ password, type, id }) => API.put(`api/reset/password?id=${id}&type=${type}`, { password });
export const resendEmailVerification = (email) => API.post(`api/resend/verification/${email}`);
export const emailVerify = ({id ,type}) => API.put(`/api/user/verify/?id=${id}&type=${type}`);
export const getEmailByUser = (email) => API.post(`/api/forgetPassword/${email}`);
export const refreshExpireToken = () => API.get(`api/refresh-token`);
export const verifyRecaptcha = (captchaData) => API.post('api/verify/recaptcha', captchaData)
// current user
export const getUserProfile = () => API.get('/api/user/profile');
//export const loadCurrentUser = () => API.get('/api/user/profile');
export const getUser = (id) => API.get(`/api/user/get/${id}`);
export const updateProfile = (updateForm) => API.put('/api/update/profile', updateForm);
// admin projects
export const getDashboardProject = () => API.get('/api/admin/project-list');
// user dashboard apis
export const getUserDashboardList = () => API.get('/api/dashboard');
export const updateProjectShortCut = (projectData) => API.put('/api/projects/add-to-shortcuts', projectData);
// admin dashboard api
export const getDashboardStats = () => API.get('/api/admin/dashboard/stats');
// home page contend
export const getHompageContent = () => API.get('/home/content');
export const createPageContent = (content) => API.post('/api/admin/manage/content', content);


// Driver API
export const getAllDriver = () => API.get('/getDriverList?lastkeyfound=start&limit=20');
export const editDriver = (payload) => API.post('/api/admin/manage/payload', payload);
export const storeDriver = (payload) => API.post('/createDriver', payload);
export const updateDriver = (payload) => API.post('/api/admin/manage/payload', payload);
export const deleteDriver = (payload) => API.post('/api/admin/manage/payload', payload);
// Vehicles API
export const getAllVehicle = () => API.get('/getVehicles?lastkeyfound=start&limit=20');
export const editVehicle = (payload) => API.post('/getVehicleInfo', payload);
export const storeVehicle = (payload) => API.post('/addVehicle', payload);
export const updateVehicle = (payload) => API.post('/editVehicle', payload);
export const deleteVehicle = (payload) => API.post('removeVehicle', payload);
// ELD Device API
export const getAllELDDevice = () => API.get('/getELDs?lastkeyfound=start&limit=20');
export const editELDDevice = (payload) => API.post('/api/editELD', payload);
export const storeELDDevice = (payload) => API.post('/addELD', payload);
export const updateELDDevice = (payload) => API.post('/api/admin/manage/payload', payload);
export const deleteELDDevice = (payload) => API.post('/removeELD', payload);
