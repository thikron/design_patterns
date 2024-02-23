import {MediaPlayer} from "../Target_Interface/mediaPlayer";
import {AdvancedMediaPlayer} from "../Adaptee/advancedMediaPlayer";

export class MediaAdapter implements MediaPlayer {
    private advancedMediaPlayer?: AdvancedMediaPlayer;

    constructor(audioType: string) {
        if (audioType === "vlc") {
            this.advancedMediaPlayer = new AdvancedMediaPlayer();
        }
    }

    play(audioType: string, fileName: string): void {
        if (audioType === "vlc") {
            this.advancedMediaPlayer?.playVlc(fileName);
        } else if (audioType === "mp4") {
            console.log("Playing mp4 file by converting to vlc");
            this.advancedMediaPlayer?.playMp4(fileName);
        }
    }
}