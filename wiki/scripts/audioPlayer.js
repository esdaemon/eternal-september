class AudioPlayer {
    constructor() {
        this.audio = new Audio();
        this.currentTrack = null;
        this.isPlaying = false;
        
        // Add event listeners for time updates
        this.audio.addEventListener('timeupdate', this.updateTime.bind(this));
        this.audio.addEventListener('loadedmetadata', this.setDuration.bind(this));
        
        // Time tracking elements
        this.seekSlider = document.getElementById('seek-slider');
        this.currentTimeElement = document.getElementById('current-time');
        this.durationElement = document.getElementById('duration');
        
        // Set up seek slider
        this.seekSlider.addEventListener('input', this.seek.bind(this));
    }

    loadTrack(track) {
        this.currentTrack = track;
        this.audio.src = track.filePath;
        this.audio.load();
    }

    play() {
        this.audio.play();
        this.isPlaying = true;
    }

playTrackById(track) {
        console.log("Playing track by ID!!")
        this.currentTrack = track;
        this.audio.src = track.filePath;
        this.audio.load();
        this.audio.play();
        this.isPlaying = true;
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
    }

    togglePlayPause() {
        this.isPlaying ? this.pause() : this.play();
    }

    setVolume(volume) {
        this.audio.volume = volume;
    }

    updateTime() {
        // Update current time display
        const currentTime = this.formatTime(this.audio.currentTime);
        this.currentTimeElement.textContent = currentTime;
        
        // Update slider position (without triggering the input event)
        const percent = (this.audio.currentTime / this.audio.duration) * 100;
        this.seekSlider.value = percent;
    }
    
    setDuration() {
        // Set max value of slider to duration in seconds
        this.seekSlider.max = this.audio.duration;
        
        // Update duration display
        const duration = this.formatTime(this.audio.duration);
        this.durationElement.textContent = duration;
        
        // Reset slider value
        this.seekSlider.value = 0;
    }
    
    seek(event) {
        // Calculate the seek position
        const seekTo = (event.target.value / 100) * this.audio.duration;
        this.audio.currentTime = seekTo;
    }
    
    formatTime(seconds) {
        // Format time in MM:SS
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}