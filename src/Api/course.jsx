import { ENV } from "../utils";

export class Course {
  baseApi = ENV.BASE_API;

  async getCourses(params) {
    try {
      const pageFilter = `page=${params?.page || 1}`;
      const limitFilter = `limit=${params?.limit || 10}`;
      const url = `${this.baseApi}/${ENV.API_ROUTES.COURSE}?${pageFilter}&${limitFilter}?`;

      //Aquí no le pasamos parametros como en el user porque es una petición sin authorización.
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async createCourses(accessToken, data) {
    try {
      const formData = new FormData();
      //Para la miniatura
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.file) {
        formData.append("miniature", data.file);
      }

      const url = `${this.baseApi}/${ENV.API_ROUTES.COURSE}`;
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

  async updateCourses(accessToken, idCourse, data) {
    try {
      const formData = new FormData();
      //Para la miniatura
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });

      if (data.file) {
        formData.append("miniature", data.file);
      }

      const url = `${this.baseApi}/${ENV.API_ROUTES.COURSE}/${idCourse}`;
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
  async deleteCourses(accessToken, idCourse) {
    try {
      const url = `${this.baseApi}/${ENV.API_ROUTES.COURSE}/${idCourse}`;
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
