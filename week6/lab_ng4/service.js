"use strict";

function ProfileService() {
  let userData = {
    name: "CGP Grey",
    contact: "cgp@hi.bark",
    bio: "CGP Grey is an American-Irish educational YouTuber and podcaster who posts on YouTube under the channel CGP Grey."
  };

  const getUserProfile = () => {

    return userData;
  }

  const setUserProfile = (user) => {
    userData = user;
    console.log(userData);
  }

  return {
    getUserProfile,
    setUserProfile
  }

}

angular 
  .module("App")
  .factory("ProfileService", ProfileService);