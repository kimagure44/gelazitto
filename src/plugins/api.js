import Axios from "axios";

const API = {
  install(Vue) {
    Vue.prototype.$API = {
      get: async (url) => {
        try {
          return await Axios.get(url);
        } catch (error) {
          throw new Error(error);
        }
      },
      post: async (url, data) => {
        try {
          return await Axios.post(url, data);
        } catch (error) {
          throw new Error(error);
        }
      },
    };
  },
};

export default API;
