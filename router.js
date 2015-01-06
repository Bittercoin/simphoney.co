Router.configure({
    notFoundtemplate: "notFound"
});


Router.map(function() {

    this.route('home', {
        path: '/',
        layoutTemplate: "layout",
        template: 'home',
        notFoundTemplate: 'notFound'

    });
})