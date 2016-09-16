$(function() {

    var getUser = function(id) {

        var base = 'http://jsonplaceholder.typicode.com';
        var route = '/users/' + id;

        $.ajax({
            url: base + route,
            method: 'GET'
        }).then(function(data) {
            console.log(data);
        });
    };

    var getAlbum = function(id) {

        var base = 'http://jsonplaceholder.typicode.com';
        var route = '/albums?userId=' + id;

        $.ajax({
            url: base + route,
            method: 'GET'
        }).then(function(data) {
            console.log(data);
        });
    };

});
