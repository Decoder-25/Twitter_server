const Hashtag = require("../models/hashtags");

class HashtagRepository {
  //creating the hashtags
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data){
    try {
         const tags = await Hashtag.insertMany(data);
    } catch (error) {
        
    }
  }

  //getting the hashtags based on theit hashtag id
  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  //deleting the hashtags
  async destroy(id) {
    try {
      const response = await Hashtag.findByIdAndRemove(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  //finding the title of the hashtags
  async findByName(titleList){
    try {
      const tags = await Hashtag.find({
        title: titleList
      }).select('title-_id') ;
      return tags
    } catch (error) {
      console.log(error);
    }
  }

}
 