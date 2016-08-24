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

// Initialise default reminders
Meteor.startup(() => {
   console.log('Meteor startup called');
   Meteor.setTimeout(function() {
      if (!Reminders.findOne({isListReminders: true})) {
         var reminders = [
            {
               description: 'Blodprøver'
            },
            {
               description: 'Højdosis'
            }];
         Reminders.insert({
            isListReminders: true,
            reminders: reminders
         });
         Reminders._ensureIndex({"createdBy": 1});
      }
   }, 10000);
});
