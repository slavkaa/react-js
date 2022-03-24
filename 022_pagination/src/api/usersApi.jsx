import axios from 'axios'

export default class usersApi {

  static GET_USERS_BASE_URL = "https://reqres.in/api/users?page=";

  static async fetchPostsData(page) {
    try {
      const response = await axios.get(this.GET_USERS_BASE_URL + 1);
      return response.data
    } catch (e) {
      console.log('Error', e)
    }
  }
}