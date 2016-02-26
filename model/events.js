Reminders = new Mongo.Collection("reminders");

Meteor.methods({
   addReminder: (reminder) => {
      if (!Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
      }
      reminder.createdBy = Meteor.userId();

      Reminders.insert(reminder);
      console.log('Succesfully inserted reminder: ', reminder);
   },
   deleteReminder: (reminder) => {
      if (!Meteor.userId()) {
         throw new Meteor.Error('not-authorized');
      }

      Reminders.remove(reminder._id);
      console.log('Removed reminder: ', reminder);
   }
});