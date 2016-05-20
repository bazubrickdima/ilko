Meteor.publish('price',function () {
    return Prices.find();

});