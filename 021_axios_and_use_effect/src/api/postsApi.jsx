import axios from 'axios'

export default class postsApi {
  static async fetchPosts() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);
      return response.data
    } catch (e) {
      console.log('Error', e)
    }
  }
}