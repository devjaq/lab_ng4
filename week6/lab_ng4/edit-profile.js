"use strict";

const editProfile = {
  template: `
  <form ng-submit="$ctrl.addInfo()">
    <p>Use the form below to update your profile.</p>
    <label for="">Name</label>
    <input type="text" class="function" ng-model="$ctrl.user.name" placeholder="Name">
    <label for="">Contact</label>
    <input type="text" class="function" ng-model="$ctrl.user.contact" placeholder="Email Address">
    <label for="">Bio</label>
    <textarea class="function" id="bio" ng-model="$ctrl.user.bio" placeholder="Tell us a bit about yourself!"></textarea>
    <button class="function">Update</button>
  </form>
  `,
  controller: ["ProfileService", function(ProfileService){
    const vm = this;

    angular.copy
      vm.user = angular.copy(ProfileService.getUserProfile());
      vm.addInfo = () => {
        ProfileService.setUserProfile(vm.user);
        location.hash = "#!/userProfile"
      }
      vm.getInfo = () => {
        ProfileService.setUserProfile();
      }
  }]
  // controller: function() {
  // // controller: ["ProfileService" , function(ProfileService) {
  //   const vm = this;
  //   vm.user = {};
  //   vm.addInfo = () => {
  //     console.log("testing");
  //     // ProfileService.setUserProfile(user);
  //   }
  // }
}

angular
  .module("App")
  .component("editProfile", editProfile)