import axios from 'axios'

export default class postsApi {
  static async fetchPosts() {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      return response.data.data
    } catch (e) {
      console.log('Error', e)
    }
  }
}