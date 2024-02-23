import {MediaPlayer} from "../Target_Interface/mediaPlayer";
import {MediaAdapter} from "../Adapter/mediaAdapter";

export class AudioPlayer implements MediaPlayer {
    private mediaAdapter?: MediaAdapter;

    play(audioType: string, fileName: string): void {
        if (audioType === "mp3") {
            console.log("Playing mp3 file: " + fileName);
        } else if (audioType === "vlc" || audioType === "mp4") {
            this.mediaAdapter = new MediaAdapter(audioType);
            this.mediaAdapter.play(audioType, fileName);
        } else {
            console.log("Invalid media type: " + audioType);
        }
    }
}