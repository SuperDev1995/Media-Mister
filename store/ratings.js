const initialState = {
    instagram: {
        Followers:5,
        Likes:5,
        Views:5,
        Impressions:5,
        Saves:5,
        Mentions:5,
        Comment:4,
        Comments:5,
        ProfilVisits:5,
        Post:5,
        Story:5
    },
    tiktok: {
        Followers:5,
        Comments:5,
        Likes:5,
        Shares:5,
        Views:2
    },
    youtube: {
        Views:3,
        Likes:5,
        Subscribers:5,
        Favorites:5,
        Shares:5,
        Watch:5,
        Dislikes:5,
        Comment:5
    },
    twitter: {
        Flowers:5,
        Retweets:5,
        Comments:5,
        Likes:5,
        Views:5,
        Poll:5,
        Impressions:5
    },
    facebook: {
        Likes:5,Flowers:5,Views:5,Reviews:5,Group:5,Reactions:5,Attendes:5,
                Comment:5,Comments:5,Shares:5,Poll:5
    },
    spotify: {
        Followers:5,Monthly:5,Plays:5,Pre:5,Saves:5
    },
    clubhouse: {
        Followers:5,Room:5
    },
    discord:    {
        Members:5
    },
    linkedin: {
        Followers:5,
        Connections:5,
        Recommendations:5,
        Endorsements:5,
        Employees:5,
        Likes:5,
        Comments:5,
        Shares:5
    },
    twitch: {
        Followers:5,
        Views:5
    },
    Pinterest:{
        Followers: 5, Repins:5,Reactions:5
    },
    Podcast: {
        Listeners:5,Downloads:5,Subscribers:5
        
    },
    Rumble: {
        Views:5
        
    },
    Mixcloud: {
        Plays:5,Followers:5,
        
    },
    Soundcloud: {
          Plays:5,Followers:5,Likes:5,Comments:5,Reposts:5
        
    },
    Vimeo: {
        Views:5,Followers:5,Likes:5
    },
    Dailymotion: {
        Views:5
        
    },
    VK: {
        Friends:5,Followers:5,Members:5,Likes:5,Comments:5,Shares:5
        
    },
    Website: {
        Website:5
    },
    Tumblr: {
        Followers:5,Reblogs:5,Likes:5
    },
    Telegram: {
        Members:5,Post:5,Votes:5,Reactions:5
    },
    Shazam: {
        Plays:5,Followers:5
    },
    Quora: {
        Followers:5,Upvotes:5,Shares:5,Comments:5,Views:5,Answers:5
        
    },
    Google: {
        My:5,Play:5,
    },
    iOS: {
        App:5
    },
    Reddit: {
        Upvotes:5,Subscribers:5,Followers:5
    },
    Sitejabber: {
        Reviews:5
    },
    Trustpilot: {
        Reviews:5
    },
    Tidal: {
        Followers:5,Plays:5
    },
    IMDb: {
        Ratings:5,Reviews:5
    },
    ReverbNation: {
        Plays:5,Fans:5
    },
    Datpiff: {
        Plays:5
    },
    Snapchat: {
        Followers:5,Story:5
    },
    Audiomack: {
        Plays:5,Likes:5,Followers:5
    },
    Likee: {
        Followers:5,Likes:5,Views:5
    },
    Tripadvisor: {
        Reviews:5
    },
    Pandora: {
        Plays:5
    },
    Napster: {
        Plays:5
    }
}

const RatingReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default RatingReducer;