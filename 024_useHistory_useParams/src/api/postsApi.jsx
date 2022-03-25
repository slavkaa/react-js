import axios from 'axios'

export default class postsApi {
  static async fetchPosts() {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return response.data
    } catch (e) {
      console.log('Error', e)
    }
  }

  static async getById(id) {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
      return response.data
    } catch (e) {
      console.log('Error', e)
    }
  }

  static async fetchComments(postId) {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
      return response.data
    } catch (e) {
      console.log('Error', e)
    }
  }
}