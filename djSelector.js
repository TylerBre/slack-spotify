module.exports = function () {
    var select = function (albums) {
        var index = 0,
            albumsLength = albums.albums.items.length;

        if (albumsLength > 1) {
            index = Math.floor((Math.random() * albumsLength) + 1);
        }

        return 'Listen: ' + albums.albums.items[index].external_urls.spotify + ' Name: '
            + albums.albums.items[index].name + ' - ' + albums.albums.items[index].images[0].url;
    };

    return {
        select: select
    };
}();

