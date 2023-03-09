import { ENV } from "../utils";

export class User {
  baseApi = ENV.BASE_API;

  async getMe(accessToken) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USER_ME}`;
      const params = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async createUser(accessToken, data) {
    try {
      //el formdata es para mandar imagines a la bd
      const formData = new FormData();
      //Sacamos los datos de las keys (firstname, lastname...)
      //y metemos los datos en las mismas keys del data (firstname, lastname...)
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.fileAvatar) {
        formData.append("avatar", data.fileAvatar);
      }

      const url = `${this.baseApi}/${ENV.API_ROUTES.USER}`;

      const params = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getUsers(accessToken, active = undefined) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USERS}?active=${active}`;

      const params = {
        //Si no le pasamos method por default es GET
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
  async updateUser(accessToken, idUser, userData) {
    try {
      const data = userData;

      if (!data.password) {
        delete data.password;
      }
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.fileAvatar) {
        formData.append("avatar", data.fileAvatar);
      }

      const url = `${this.baseApi}/${ENV.API_ROUTES.USER}/${idUser}`;
      const params = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async deleteUser(accessToken, idUser) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.USER}/${idUser}`;
      const params = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await fetch(url, params);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}