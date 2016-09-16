UserSettings = new Mongo.Collection("userSettings");

Meteor.methods({
    setActiveModule: (module, active) => {
        if (!Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        var updateVal = {};
        updateVal["modules." + module] = active;

        UserSettings.update({userId: Meteor.userId()}, {$set: updateVal}, {upsert: true});
    }
});