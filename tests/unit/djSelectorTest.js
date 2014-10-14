var should = require("should");

describe('dj selector', function () {

    it('should return "HotDreams" when "albums" contains only this one', function () {
        var djSelector = require('modules/djSelector'),
            albums = {},
            album = {};

        albums = {
            albums: {
                href: 'https: //api.spotify.com/v1/search?query=timber+timbre&offset=0&limit=20&type=album',
                items: [
                    {
                        album_type: 'album',
                        external_urls: {
                            spotify: 'https: //open.spotify.com/album/5g2rr2du9RJ9bOiO2fgqlC'
                        },
                        href: 'https: //api.spotify.com/v1/albums/5g2rr2du9RJ9bOiO2fgqlC',
                        id: '5g2rr2du9RJ9bOiO2fgqlC',
                        images: [
                            {
                                height: 640,
                                url: 'https://i.scdn.co/image/6927267deff360d62e0fe9f41eb7647b164a17a8',
                                width: 640
                            }
                        ],
                        name: 'HotDreams',
                        type: 'album',
                        uri: 'spotify: album: 5g2rr2du9RJ9bOiO2fgqlC'
                    }
                ],
                limit: 20,
                next: 'https: //api.spotify.com/v1/search?query=timber+timbre&offset=20&limit=20&type=album',
                offset: 0,
                previous: null,
                total: 37
            }
        };

        album = djSelector.select(albums);

        (album).should
            .be
            .exactly('Listen: https: //open.spotify.com/album/5g2rr2du9RJ9bOiO2fgqlC Name: HotDreams - ' +
                'https://i.scdn.co/image/6927267deff360d62e0fe9f41eb7647b164a17a8');
    });

    it('should return a "TimberTimbre" album when "albums" contains two album', function () {
        var djSelector = require('modules/djSelector'),
            albums = {},
            album = {};

        albums = {
            albums: {
                href: 'https: //api.spotify.com/v1/search?query=timber+timbre&offset=0&limit=20&type=album',
                items: [
                    {
                        album_type: 'album',
                        external_urls: {
                            spotify: 'https: //open.spotify.com/album/5g2rr2du9RJ9bOiO2fgqlC'
                        },
                        href: 'https: //api.spotify.com/v1/albums/5g2rr2du9RJ9bOiO2fgqlC',
                        id: '5g2rr2du9RJ9bOiO2fgqlC',
                        images: [
                            {
                                height: 640,
                                url: 'https://i.scdn.co/image/6927267deff360d62e0fe9f41eb7647b164a17a8',
                                width: 640
                            }
                        ],
                        name: 'HotDreams',
                        type: 'album',
                        uri: 'spotify: album: 5g2rr2du9RJ9bOiO2fgqlC'
                    },
                    {
                        album_type: 'album',
                        external_urls: {
                            spotify: 'https: //open.spotify.com/album/5g2rr2du9RJ9bOiO2fgqlC'
                        },
                        href: 'https: //api.spotify.com/v1/albums/5g2rr2du9RJ9bOiO2fgqlC',
                        id: '5g2rr2du9RJ9bOiO2fgqlC',
                        images: [
                            {
                                height: 640,
                                url: 'https://i.scdn.co/image/6927267deff360d62e0fe9f41eb7647b164a17a8',
                                width: 640
                            }
                        ],
                        name: 'TimberTrimbre',
                        type: 'album',
                        uri: 'spotify: album: 5g2rr2du9RJ9bOiO2fgqlC'
                    }
                ],
                limit: 20,
                next: 'https: //api.spotify.com/v1/search?query=timber+timbre&offset=20&limit=20&type=album',
                offset: 0,
                previous: null,
                total: 37
            }
        };

        album = djSelector.select(albums);

        (album).should
            .be
            .containEql('https://i.scdn.co/image/6927267deff360d62e0fe9f41eb7647b164a17a8');
    });
});

