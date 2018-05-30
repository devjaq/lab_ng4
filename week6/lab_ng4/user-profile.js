"use strict";

const userProfile = {
  template: `
  <div class="box">
    <div class="img-box">
      <img src="cgp-grey.png" alt="profile pic">
    </div>
    <div class="info">
      <h2>{{ $ctrl.user.name }}</h2>
      <h4>{{ $ctrl.user.contact }}</h4>
      <p>{{ $ctrl.user.bio }}</p>
      <button type="button" class="function" ng-click="$ctrl.submit()">Edit</a></button>
    </div
  </div>
  `,
  // controller: ["ProfileService", function(ProfileService){
  controller: ["$http", "$location", "ProfileService", function($location, $http, ProfileService){

    const vm = this;
    vm.user = angular.copy(ProfileService.getUserProfile());

    // let test = $q;
    let url = location.hash;
    console.log(location.href);
    
    console.log(url);
    // console.log($q);
    
    vm.submit = () => {
      console.log("click");
      location.hash = "#!/editProfile"
    }

  }]

}// end userProfile

angular
  .module("App")
  .component("userProfile", userProfile)