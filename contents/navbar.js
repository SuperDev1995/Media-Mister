import { assertLeafType } from "graphql";

export const navItems = {
    instagram: {
        title: "instagram",
        content: ["Followers", "Likes", "Views", "Impressions", "Saves", "Mentions", "Comment Replies",
                "Comments", "Profile Visits", "Post Reach", "Story Poll Votes"],
        isTwo: true,
        inNav: true
    },
    tiktok: {
        title: "tiktok",
        content: ["Followers", "Comments", "Likes", "Shares", "Views"],
        isTwo: false,
        inNav: true
    },
    youtube: {
        title: "youtube",
        content: ["Views", "Likes", "Subscribers", "Favorites", "Shares", "Watch Time Hours",
                "Dislikes", "Comment Visits"],
        isTwo: true,
        inNav: true
    },
    twitter: {
        title: "twitter",
        content: ["Flowers", "Retweets", "Comments", "Likes", "Views", "Poll Votes", "Impressions"],
        isTwo: false,
        inNav: true
    },
    facebook: {
        title: "facebook",
        content: ["Likes", "Flowers", "Views", "Reviews", "Group Members", "Reactions", "Attendes",
                "Comment Replies", "Comments", "Shares", "Poll Votes"],
        isTwo: true,
        inNav: true
    },
    spotify: {
        title: "spotify",
        content: ["Followers", "Monthly Listeners", "Plays", "Pre Saves", "Saves"],
        isTwo: false,
        inNav: true
    },
    clubhouse: {
        title: "clubhouse",
        content: ["Followers", "Room Visitiors"],
        isTwo: false,
        inNav: true
    },
    discord:    {
        title: "discord",
        content: ["Members", "Direct Messages"],
        isTwo: false,
        inNav: true
    },
    linkedin: {
        title: "linkedin",
        content: ["Followers", "Connections", "Recommendations", "Endorsements", "Employees", "Likes", "Comments",
                "Shares"],
        isTwo: false,
        inNav: true
    },
    twitch: {
        title: "twitch",
        content: ["Followers", "Views"],
        isTwo: false,
        inNav: false
    },
    Pinterest:{
        title: "Pinterest",
        content: ["Followers", "Repins", "Reactions"],
        isTwo: false,
        inNav: false
    },
    Podcast: {
        title: "Podcast",
        content: ["Listeners", "Downloads", "Subscribers"],
        isTwo: false,
        inNav: false
    },
    Rumble: {
        title: "Rumble",
        content: ["Views"],
        isTwo: false,
        inNav: false
    },
    Mixcloud: {
        title: "Mixcloud",
        content: ["Plays", "Followers"],
        isTwo: false,
        inNav: false
    },
    Soundcloud: {
        title: "Soundcloud",
        content: [
          "Plays", "Followers", "Likes", "Comments", "Reposts"
        ],
        isTwo: false,
        inNav: false
    },
    Vimeo: {
        title: "Vimeo",
        content: ["Views", "Followers", "Likes"],
        isTwo: false,
        inNav: false
    },
    Dailymotion: {
        title: "Dailymotion",
        content: ["Views"],
        isTwo: false,
        inNav: false
    },
    VK: {
        title: "VK",
        content: ["Friends", "Followers", "Members", "Likes", "Comments", "Shares"],
        isTwo: false,
        inNav: false
    },
    Website: {
        title: "Website Traffic",
        content: [
            "Website Traffic"
        ],
        isTwo: false,
        inNav: false
    },
    Tumblr: {
        title: "Tumblr",
        content: ["Followers", "Reblogs", "Likes"],
        isTwo: false,
        inNav: false
    },
    Telegram: {
        title: "Telegram",
        content: ["Members", "Post Views", "Votes", "Reactions"],
        isTwo: false,
        inNav: false
    },
    Shazam: {
        title: "Shazam",
        content: ["Plays", "Followers"],
        isTwo: false,
        inNav: false
    },
    Quora: {
        title: "Quora",
        content: ["Followers", "Upvotes", "Shares", "Comments", "Views", "Answers"],
        isTwo: false,
        inNav: false
    },
    Google: {
        title: "Google",
        content: ["My Business Reviews", "Play Reviews"],
        isTwo: false,
        inNav: false
    },
    iOS: {
        title: "iOS",
        content: ["App Reviews"],
        isTwo: false,
        inNav: false
    },
    Reddit: {
        title: "Reddit",
        content: ["Upvotes", "Subscribers", "Followers"],
        isTwo: false,
        inNav: false
    },
    Sitejabber: {
        title: "Sitejabber",
        content: [ "Reviews"],
        isTwo: false,
        inNav: false
    },
    Trustpilot: {
        title: "Trustpilot",
        content: ["Reviews"],
        isTwo: false,
        inNav: false
    },
    Tidal: {
        title: "Tidal",
        content: ["Followers", "Plays"],
        isTwo: false,
        inNav: false
    },
    IMDb: {
        title: "IMDb",
        content: ["Ratings", "Reviews"],
        isTwo: false,
        inNav: false
    },
    ReverbNation: {
        title: "ReverbNation",
        content: ["Plays", "Fans"],
        isTwo: false,
        inNav: false
    },
    Datpiff: {
        title: "Datpiff",
        content: ["Plays"],
        isTwo: false,
        inNav: false
    },
    Snapchat: {
        title: "Snapchat",
        content: ["Followers", "Story Views"],
        isTwo: false,
        inNav: false
    },
    Audiomack: {
        title: "Audiomack",
        content: ["Plays", "Likes", "Followers"],
        isTwo: false,
        inNav: false
    },
    Likee: {
        title: "Likee",
        content: ["Followers", "Likes", "Views"],
        isTwo: false,
        inNav: false
    },
    Tripadvisor: {
        title: "Tripadvisor",
        content: ["Reviews"],
        isTwo: false,
        inNav: false
    },
    Pandora: {
        title: "Pandora",
        content: ["Plays"],
        isTwo: false,
        inNav: false
    },
    Napster: {
        title: "Napster",
        content: ["Plays"],
        isTwo: false,
        inNav: false
    }
}

export const navTitles = ["instagram", "tiktok", "youtube","twitter", "facebook","spotify",
                        "clubhouse", "discord", "linkedin", "twitch", "Pinterest", "Podcast", "Rumble", "Mixcloud", "Soundcloud",
                        "Vimeo", "Dailymotion", "VK", "Website", "Tumblr", "Telegram", "Shazam", "Quora",
                        "Google", "iOS", "Reddit", "Sitejabber", "Trustpilot", "Tidal", "IMDb", "ReverbNation", "Datpiff", "Snapchat", "Audiomack",
                        "Likee", "Tripadvisor", "Pandora", "Napster"]