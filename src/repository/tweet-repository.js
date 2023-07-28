const Tweet = require('../models/tweet');

class TweetRepository {
  //creating the tweets
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  //getting the tweets based on theit tweet id
  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  //deleting the tweets
  async destroy(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  //getting all the hashtags
  async getAll(offset, limit) {
    try {
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}