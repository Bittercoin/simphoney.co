Template.home.events({

    'mouseenter #mobinilButton': function(e, t) {
        $('body').css('backgroundColor', 'orange')
    },
    'mouseenter #vodafoneButton': function(e, t) {
        $('body').css('backgroundColor', 'red')
    },
    'mouseenter #etisalatButton': function(e, t) {
        $('body').css('backgroundColor', 'green')
    },
    'mouseleave #mobinilButton, mouseleave #vodafoneButton, mouseleave #etisalatButton': function(e, t) {
        //$('body').css('backgroundColor', '#8800aa')
    },
    'click #mobinilButton': function(e, t){
        $(document).trigger('coinbase_show_modal', '72c974533c78359f5c66cd6710a3a67b');
            return false;
    },
    'click #vodafoneButton': function(e, t){
        $(document).trigger('coinbase_show_modal', '4ce7ea4617093de63dc403762459a18b');
            return false;
    },
    'click #etisalatButton': function(e, t){
        $(document).trigger('coinbase_show_modal', '482cd94d60800787cc84479f4aab1e7f');
            return false;
    }
})

Template.home.rendered = function() {
    coinbaseFunction()
}
