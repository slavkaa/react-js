import axios from 'axios'

export default class usersApi {

  static GET_USERS_BASE_URL = "https://reqres.in/api/users?page=";

  static async fetchUsersListData(page) {
    try {
      const response = await axios.get(this.GET_USERS_BASE_URL + page);
      return response.data
    } catch (e) {
      console.log('Error', e)
    }
  }
}