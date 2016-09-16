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

var getAlbum = function(id) {
    var base = 'http://jsonplaceholder.typicode.com';
    var route = '/albums?userId=' + id;

    return $.ajax({
        url: base + route,
        method: 'GET',
    }).done(function(data) {
        data.forEach(function(element) {
            $('#user' + id + ' header').append('<div>' + '<span class="albumId">' 
            	+ element.id + '</span>' + '<span class="albumTitle">' + element.title + '</span>' + '</div>');
        })
    });
}

getUser(1).then(getUser(2)).then(getAlbum(1)).then(getAlbum(2));
