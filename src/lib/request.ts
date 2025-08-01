import axios, {
  AxiosRequestConfig,
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";

// Axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Define retry queue type
type FailedRequest = {
  resolve: (token: string | null) => void;
  reject: (error: AxiosError | null) => void;
};

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

// Queue processor
const processQueue = (
  error: AxiosError | null,
  token: string | null = null
) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve(token);
    }
  });
  failedQueue = [];
};

// Request interceptor — attach token
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && config.headers) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — auto refresh token logic
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token: any | null) => {
            if (token && originalRequest.headers) {
              originalRequest.headers["Authorization"] = `Bearer ${token}`;
            }
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const res = await axiosInstance.post("/refresh-token");
        const newAccessToken = res.data.accessToken;

        localStorage.setItem("accessToken", newAccessToken);
        processQueue(null, newAccessToken);

        if (originalRequest.headers) {
          originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        }

        return axiosInstance(originalRequest);
      } catch (refreshError) {
        processQueue(refreshError as AxiosError, null);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
