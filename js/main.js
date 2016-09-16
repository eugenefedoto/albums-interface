var getUser = function(id) {
    var base = 'http://jsonplaceholder.typicode.com';
    var route = '/users/' + id;
    var type = 'user';

    getJson(base, route, type);
};

var getAlbum = function(id, callback) {
    var base = 'http://jsonplaceholder.typicode.com';
    var route = '/albums?userId=' + id;

    getJson(base, route);
};

var getUser = function(id) {
    var base = 'http://jsonplaceholder.typicode.com';
    var route = '/users/' + id;

    return $.ajax({
        url: base + route,
        method: 'GET',
    }).done(function(data) {
        $('#user' + id + ' h1').append(data.name);
    });
}

$.when(getUser(1)).then(getUser(2));
