$(function() {

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
                    '<div class="row"><span style="display: inline-block; width: 50px;">' + element.id + '</span><span>' + element.title + '</span></div>');
            })
        });
    }

    getUser(1).then(getUser(2)).then(getAlbum(1)).then(getAlbum(2));

    var $dragging = null;

    $(document.body).on("mousemove", function(e) {
        if ($dragging) {
        	$(e).addClass('.disable_text_highlighting');
            $dragging.offset({
                top: e.pageY,
                left: e.pageX
            });
        }
    });


    $(document.body).on("mousedown", "span:last-child", function (e) {
        $dragging = $(e.target);
    });

    $(document.body).on("mouseup", function (e) {
        $dragging = null;
    });
});
