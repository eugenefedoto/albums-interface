function dragstart_handler(ev) {
    //console.log("dragStart");
    // Add the target element's id to the data transfer object
    ev.dataTransfer.setData('text/plain', ev.target.id);
    var data = event.dataTransfer.getData('text');
    console.log(event.target);

}

function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    var data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
    console.log(ev.currentTarget);
    //ev.target.appendChild(document.getElementById(data));
}

$(function() {

    function getUser(id) {
        var base = 'http://jsonplaceholder.typicode.com';
        var route = '/users/' + id;

        return $.ajax({
            url: base + route,
            method: 'GET',
        }).done(function(data) {
            $('#col' + data.id + ' .name').append(data.name);
        });
    }



    function getAlbum(id) {
        var base = 'http://jsonplaceholder.typicode.com';
        var route = '/albums?userId=' + id;

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




    getUser(1).then(getUser(2)).then(getAlbum(1)).then(getAlbum(2)).then(function() {
        /* Events fired on the drop target */

        // By default, data/elements cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element
        $(document).on("dragover", function(event) {
            event.preventDefault();
        });

    });


});
