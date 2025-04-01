
document.addEventListener('DOMContentLoaded', async () => {
    const musicDatabase = new MusicDatabase();
    await musicDatabase.loadLibrary();

    const audioPlayer = new AudioPlayer();
    const playerUI = new PlayerUI(audioPlayer, musicDatabase);

    playerUI.renderPlaylist();
});