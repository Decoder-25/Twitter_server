const { TweetRepository, HashtagRepository } = require('../repository/index');

class TweetService {
    constructor(){
          this.tweetRepository = new TweetRepository();
          this.hashtagRepository = new HashtagRepository();
    }

    //making the collection for the hashtags by extracting it from the tweets
    async create(data){
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts the hashtags
        tags = tags.map((tag) => tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        const alreadyPresentTags = this.hashtagRepository.findByName(tags).map(tags => tags.title);
        const newTags = tags.filter(tag => !alreadyPresentTags.includes(tag));
        // todo create hashtags and add here
        /*
        1. bulk insert in mongoose
        2. filter title of hashtags based on multiple tags
        3. how to add tweet id inside all the hashtags
        */
        return tweet;
    }
}

module.exports = TweetService;