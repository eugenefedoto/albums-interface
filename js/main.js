var fullName, firstName, lastName;
var title;

var getUser = function(id) {
    var base = 'http://jsonplaceholder.typicode.com';
    var route = '/users/' + id;

    $.ajax({
        url: base + route,
        method: 'GET',
    }).done(function(user) {
        fullName = user.name;
        firstName = fullName.split(" ")[0];
        lastName = fullName.split(" ")[1];
        //console.log("NAME: " + firstName + " " + lastName);
    });
};

var getAlbum = function(id) {
    var base = 'http://jsonplaceholder.typicode.com';
    var route = '/albums?userId=' + id;

    $.ajax({
        url: base + route,
        method: 'GET',
    }).done(function(album) {
        title = album.title;
    });
};


getUser(1);
console.log("NAME: " + firstName + " " + lastName);

