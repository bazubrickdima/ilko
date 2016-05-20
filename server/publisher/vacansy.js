Meteor.publish('vacans',function () {
    return Vacancy.find();

});