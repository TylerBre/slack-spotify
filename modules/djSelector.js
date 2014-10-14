module.exports = function () {
    var select = function (albums) {
        var albumsLength = albums.albums.items.length,
            index = Math.floor((Math.random() * albumsLength));

        return 'Listen: ' + albums.albums.items[index].external_urls.spotify + ' Name: ' +
            albums.albums.items[index].name + ' - ' + albums.albums.items[index].images[0].url;
    };

    return {
        select: select
    };
}();

