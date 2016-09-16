var getUser = function(id) {
    var base = 'http://jsonplaceholder.typicode.com';
    var route = '/users/' + id;

    return $.ajax({
        url: base + route,
        method: 'GET',
    }).done(function(data) {
        $('#col' + data.id + ' .name').append(data.name);
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
            $('#col' + element.userId).append(
            	'<div class="row"><span style="display: inline-block; width: 50px;">' + element.id + '</span><span q>' + element.title + '</span></div>');
        })
    });
}

getUser(1).then(getUser(2)).then(getAlbum(1)).then(getAlbum(2));
