const { Given, When, Then } = require('@cucumber/cucumber')
    
// Given Lucy is located 15 meters from Sean
 //      Undefined. Implement with the following snippet:

         Given('Lucy is located {int} meters from Sean', function (distance) {
         // Given('Lucy is located {float} meters from Sean', function (float) {       
           // Write code here that turns the phrase above into concrete actions        
           console.log(distance)
             return 'pending';
         });

   // When Sean shouts "free bagels at Sean's"
  //     Undefined. Implement with the following snippet:

         When('Sean shouts {string}', function (string) {
           // Write code here that turns the phrase above into concrete actions        
           return 'pending';
         });

   // Then Lucy hears sean's message
   //    Undefined. Implement with the following snippet:

         Then('Lucy hears sean\'s message', function () {
           // Write code here that turns the phrase above into concrete actions        
           return 'pending';
         });