/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => {
    playlists = [...playlists, {name: playlistName, songs: []}];
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      playlists = playlists.filter(playlist => playlist.name !== playlistName);
    };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    const playlist = playlists.find(({name}) => name === playlistName);
    if(!playlist){
      throw new Error('Playlist not found');
    };
    playlists = playlists.map((playListElement => {
      if (playListElement.name === playlistName){
        return {name: playListElement.name, songs: [...playListElement.songs, {...song, favorite: false}]};
      };
      return playListElement;
    }));
  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    const playlist = playlists.find(({name}) => name === playlistName);
    if(!playlist){
      throw new Error('Playlist not found');
    };
    const song  = playlist.songs.find((song) => song.title === title);
    if (!song){
      throw new Error('Song not found');
    };
    playlists = playlists.map((playListElement => {
      if (playListElement.name === playlistName){
        return {name: playListElement.name, 
          songs: playListElement.songs.filter(song => song.title !== title)
        };
      };
      return playListElement;
    }));
  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {
    playlists = playlists.map((playListElement => {
      if (playListElement.name === playlistName){
        return {name: playListElement.name, songs: playListElement.songs.map(songElement => {
          if(songElement.title === title){
            return {...songElement, favorite: true};
          };
          return songElement;
        })};
      };
      return playListElement;
    }));

  }

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
    const playlist = playlists.find(({name}) => name === playlistName);
    if(!playlist){
      throw new Error('Playlist not found');
    };
    switch (criterion){
      case 'title':
        playlists = playlists.map((playListElement => {
          if (playListElement.name === playlistName){
            return {name: playListElement.name, songs: [...playListElement.songs].sort((a,b)=> a.title.localeCompare(b.title))};
          };
          return playListElement;
        })); 
        break;
      case 'artist':
        playlists = playlists.map((playListElement => {
          if (playListElement.name === playlistName){
            return {name: playListElement.name, songs: [...playListElement.songs].sort((a,b)=> a.artist.localeCompare(b.artist))};
          };
          return playListElement;
        })); 
        break;
        case 'duration':
          playlists = playlists.map((playListElement => {
            if (playListElement.name === playlistName){
              return {name: playListElement.name, songs: [...playListElement.songs].sort((a,b)=> a.duration - b.duration)};
            };
            return playListElement;
          })); 
          break;
        default:
          throw new Error('Criterion is invalid');
    };

  };

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};



//test
const myCatalog = musicCatalog();
myCatalog.createPlaylist('lista1');
myCatalog.createPlaylist('lista2');
console.log(myCatalog.getAllPlaylists());

try {
  myCatalog.addSongToPlaylist('lista1', {title :'title', artist: 'artist', genre: 'genre', duration: 4});
  myCatalog.addSongToPlaylist('lista1', {title :'title2', artist: 'artist2', genre: 'genre1', duration: 8});
  myCatalog.addSongToPlaylist('lista1', {title :'title1', artist: 'artist1', genre: 'genre1', duration: 5});
  myCatalog.addSongToPlaylist('lista2', {title :'title2', artist: 'artist1', genre: 'genre1', duration: 5});
} catch (error){
  console.log(error);
};
console.log(myCatalog.getAllPlaylists());
myCatalog.removeSongFromPlaylist('lista1','title');
console.log(myCatalog.getAllPlaylists());
myCatalog.removePlaylist('lista2')
console.log(myCatalog.getAllPlaylists());
myCatalog.favoriteSong('lista1', 'title2');
console.log(myCatalog.getAllPlaylists());
myCatalog.sortSongs('lista1','duration');
console.log(myCatalog.getAllPlaylists());




export default musicCatalog;