Router.configure({
    layoutTemplate: 'main'
});
Router.route('main',{
    path: '/',
    template: 'mainWrraper'

});
Router.route('services',{
    path: '/services',
    template: 'services',
/*    waitOn: function() {
        return Meteor.subscribe('price');
    }*/
});
Router.route('contact',{
    path: '/contact',
    template: 'contact'
});
Router.route('mainAdmin',{
    path: '/admin',
    template: 'admin',
    layoutTemplate: 'yieldAdmin'
});
Router.route('vacancy',{
    path: '/vacancy',
    template: 'vacancy'
});