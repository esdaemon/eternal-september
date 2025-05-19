class PlayerUI {
    constructor(audioPlayer, musicDatabase) {
        this.audioPlayer = audioPlayer;
        this.musicDatabase = musicDatabase;
        this.clickCount = 0;
        this.initializeEventListeners();
        this.initializeIframeMessageListener();
    }

    initializeEventListeners() {
        document.getElementById('play-pause-btn').addEventListener('click', 
            () => {
                console.log("play clicked");
                this.audioPlayer.togglePlayPause()});
        
        document.getElementById('volume-slider').addEventListener('input', 
            (e) => this.audioPlayer.setVolume(e.target.value));
    }

    initializeIframeMessageListener() {
        // Listen for messages from the iframe
        window.addEventListener('message', (event) => this.handleIframeMessage(event));
    }

    handleIframeMessage(event) {
        const notification = document.getElementById('notification');
        
        // Validate origin for security
        if (event.origin !== 'https://wiki.eternal-september.net') {
            console.warn('Received message from unknown origin:', event.origin);
            return;
        }
        
        // Handle the click notification from MediaWiki
        if (event.data.type === 'elementClicked') {
            console.log('Click detected in MediaWiki:', event.data);
            
            // Update notification text
            // notification.innerHTML = `
            //     <p><strong>Status:</strong> Element clicked: ${event.data.elementId || 'unnamed element'}</p>
            //     <p><strong>Click Count:</strong> ${++this.clickCount}</p>
            // `;

            // Check if clicked element has audio-ref class
            if (event.data.elementClass && event.data.elementClass.includes('audio-ref')) {
                this.handleAudioRefClick(event.data);
            }
        }
    }

    handleAudioRefClick(data) {
        // Extract the song ID from the element
        let songId;
        
        if (data.elementId && data.elementId.startsWith('audio-ref-')) {
            // Get song ID from element ID
            songId = data.elementId.replace('audio-ref-', '');
        } else if (data.elementText) {
            // Use the text content to look up the track
            console.log('Looking up song by id:', data.elementId);
            const tracks = this.musicDatabase.getAllTracks();
            const matchedTrack = tracks.find(track => 
                track.id.toLowerCase() === data.elementId.toLowerCase() ||
                `${track.title} - ${track.artist}`.toLowerCase().includes(data.elementText.toLowerCase())
            );
            
            if (matchedTrack) {
                this.loadAndPlayTrack(matchedTrack);
                return;
            }
        }

        if (songId) {
            console.log('Playing song ID:', songId);
            const track = this.musicDatabase.getTrackById(songId);
            
            if (track) {
                this.loadAndPlayTrack(track);
            } else {
                console.error('Track not found in database:', songId);
            }
        }
    }

    updateTrackInfo(track) {
        document.getElementById('current-track-title').textContent = track.title;
        document.getElementById('current-track-artist').textContent = track.artist;
    }

    renderPlaylist() {
        const playlistElement = document.getElementById('playlist');
        const tracks = this.musicDatabase.getAllTracks();

        tracks.forEach(track => {
            const listItem = document.createElement('div');
            listItem.classList.add('playlist-track');
            listItem.textContent = `${track.title} - ${track.artist}`;
            listItem.addEventListener('click', () => this.loadAndPlayTrack(track));
            playlistElement.appendChild(listItem);
        });
    }

    loadAndPlayTrack(track) {
        console.log("Loading and playing", track)
        this.audioPlayer.loadTrack(track);
        this.audioPlayer.play();
       this.updateTrackInfo(track);
    }
}