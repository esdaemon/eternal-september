class MusicDatabase {
    constructor() {
        this.library = [];
    }

    async loadLibrary() {
        try {
            const response = await fetch('data/music-library.json');
            this.library = await response.json();
        } catch (error) {
            console.error('Error loading music library:', error);
        }
    }

    getAllTracks() {
        return this.library;
    }

    getTrackById(id) {
        return this.library.find(track => track.id === id);
    }

    searchTracks(query) {
        return this.library.filter(track => 
            track.title.toLowerCase().includes(query.toLowerCase()) ||
            track.artist.toLowerCase().includes(query.toLowerCase())
        );
    }
}