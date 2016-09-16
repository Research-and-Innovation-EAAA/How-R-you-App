(function () {

    Meteor.publish('moduleData', function (module) {
        return Registrations.find({
            $and: [
                {moduleName: module},
                {moduleName: {$exists: true}},
                {createdBy: this.userId},
                {createdBy: {$exists: true}}
            ]
        }, {
            sort: {
                timestamp: -1,
                createdAt: -1
            },
            limit: 1,
            fields: {
                createdBy: 0,
                id: 0,
                createdAt: 0,
                timestamp: 0,
                updatedAt: 0
            }
        })
    });

    Meteor.publish('graphData', function (module, startTimestamp, endTimestamp) {
        return Registrations.find({
            $and: [
                {moduleName: module},
                {moduleName: {$exists: true}},
                {createdBy: this.userId},
                {createdBy: {$exists: true}},
                {
                    timestamp: {
                        $gte: startTimestamp,
                        $lte: endTimestamp
                    }
                },
                {timestamp: {$exists: true}}
            ]
        }, {
            sort: {timestamp: -1}
        })
    });

    Meteor.startup(function () {
        if (Meteor.isServer) {
            Registrations._ensureIndex({"moduleName": 1});
            Registrations._ensureIndex({"createdBy": 1});
            Registrations._ensureIndex({"timestamp": 1});
        }
    });

    Meteor.publish("registrationWithTimestamp", function (module, timestamp) {
        if (module == null || timestamp == null) {
            return this.ready();
        }
        return Registrations.find({
            $and: [
                {createdBy: this.userId},
                {createdBy: {$exists: true}},
                {moduleName: module},
                {moduleName: {$exists: true}},
                {timestamp: {$exists: true}},
                {timestamp: timestamp}
            ]
        }, {
            limit: 1,
            fields: {
                createdBy: 0
            }
        })
    });

    Meteor.publish("notes", function () {
        return Notes.find({
            $and: [
                {createdBy: this.userId},
                {createdBy: {$exists: true}}
            ]
        });
    });

    Meteor.startup(function () {
        if (Meteor.isServer) {
            Notes._ensureIndex({"createdBy": 1});
        }
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

    Meteor.startup(function () {
        if (Meteor.isServer) {
            Reminders._ensureIndex({"createdBy": 1});
        }
    });

    Meteor.publish("settings", function () {
        return Settings.find(
            {
                key: {$exists: 'analytics'}, value: {$exists: true}
            }
        );
    });

    Meteor.publish("userSettings", function () {
        return UserSettings.find(
            {
                userId: this.userId
            }
        );
    });

    Meteor.publish("customModules", function () {
        return CustomModules.find(
            {
                // TODO add only for this user
            }
        );
    });
})();
