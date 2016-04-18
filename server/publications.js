Meteor.publish("mucositisData", function () {
   return Mucositis.find({
      $and: [
         {createdBy: this.userId},
         {createdBy: {$exists: true}}
      ]
   });
});

Meteor.publish("medicineData", function () {
   //TODO: replace collection name with Mongo.Collection.get("name")
   return Medicine.find({
      $and: [
         {createdBy: this.userId},
         {createdBy: {$exists: true}}
      ]
   });
});

Meteor.publish("bloodsampleData", function () {
   return Bloodsample.find({
      $and: [
         {createdBy: this.userId},
         {createdBy: {$exists: true}}
      ]
   });
});

Meteor.publish("painData", function () {
   return Pain.find({
      $and: [
         {createdBy: this.userId},
         {createdBy: {$exists: true}}
      ]
   });
});

Meteor.publish("notes", function () {
   return Notes.find({
      $and: [
         {createdBy: this.userId},
         {createdBy: {$exists: true}}
      ]
   });
});

Meteor.publish("reminders", function () {
   return Reminders.find({
      $or: [
         {isListReminders: true},
         {
            $and: [
               {createdBy: this.userId},
               {createdBy: {$exists: true}}
            ]
         }]
   });
});