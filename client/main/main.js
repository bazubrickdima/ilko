Template.main.onRendered(function() {
    Meteor.subscribe('price');
    Meteor.subscribe('stats');
    Meteor.subscribe('vacans');
});