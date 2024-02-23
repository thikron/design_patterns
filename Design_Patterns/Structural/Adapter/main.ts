import {MediaPlayer} from "./Target_Interface/mediaPlayer";
import {AudioPlayer} from "./Client/audioPlayer";

const audioPlayer: MediaPlayer = new AudioPlayer();
audioPlayer.play("mp3", "song.mp3");
audioPlayer.play("vlc", "movie.vlc");
audioPlayer.play("mp4", "video.mp4");
audioPlayer.play("avi", "video.avi"); // Output: Invalid media type: avi
