function dragstart_handler(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.id);
}

function drop_handler(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("text");
    //console.log(ev.target);
    //ev.currentTarget.appendChild(document.getElementById(data));
    var userId = $('#' + ev.currentTarget.id).attr('userid');
    var base = 'http://jsonplaceholder.typicode.com';
    var route = '/albums/' + id;
    //console.log($('#' + id + ' span:last-child').text());
    var title = $('#' + id + ' span:last-child').text();
    $.ajax({
        url: base + route,
        method: 'PUT',
        data: {
            userId: userId,
            id: id,
            title: title
        }
    }).done(function(data) {
    	console.log(data);
    	$('#' + id).remove()
        $('#col' + data.userId).append(
                    '<div id=' + data.id + ' class="row" draggable="true" ondragstart="dragstart_handler(event)";><span style="display: inline-block; width: 50px;">' + data.id + '</span><span>' + data.title + '</span></div>');
    });
}

$(function() {
    function getUser(userId) {
        var base = 'http://jsonplaceholder.typicode.com';
        var route = '/users/' + userId;

        return $.ajax({
            url: base + route,
            method: 'GET',
        }).done(function(data) {
            $('#col' + data.id + ' .name').append(data.name);
        });
    }



    function getAlbum(userId) {
        var base = 'http://jsonplaceholder.typicode.com';
        var route = '/albums?userId=' + userId;

        return $.ajax({
            url: base + route,
            method: 'GET',
        }).done(function(data) {
            data.forEach(function(element) {
                $('#col' + element.userId).append(
                    '<div id=' + element.id + ' class="row" draggable="true" ondragstart="dragstart_handler(event)";><span style="display: inline-block; width: 50px;">' + element.id + '</span><span>' + element.title + '</span></div>');
            })
        });
    }

    $(document).on("dragover", function(event) {
        event.preventDefault();
    });

    getUser(1).then(getUser(2)).then(getAlbum(1)).then(getAlbum(2));
});
