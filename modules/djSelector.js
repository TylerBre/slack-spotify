
function select (data) {
    var albumsLength = data.albums.items.length;
    var index = Math.floor((Math.random() * albumsLength));

    return data.albums.items[index].external_urls.spotify;
}

module.exports = {
  select: select
};
