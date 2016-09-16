$(function() {

    var getUser = function(id) {

        var base = 'http://jsonplaceholder.typicode.com';
        var route = '/users/' + id;
        var url = base + route;

        $.ajax({
            url: base + route,
            method: 'GET'
        }).then(function(data) {
            console.log(data);
        });
    };

});
