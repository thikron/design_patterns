import {TV} from "./Konkrete_Implementierung/TV";
import {DVDPlayer} from "./Konkrete_Implementierung/DVDPlayer";
import {StandardRemoteControl} from "./Konkrete_Implementierung/StandardRemoteControl";

const tv = new TV();
const dvdPlayer = new DVDPlayer();

const standardRemoteForTV = new StandardRemoteControl(tv);
const standardRemoteForDVD = new StandardRemoteControl(dvdPlayer);

standardRemoteForTV.powerOn();
standardRemoteForTV.volumeUp();
standardRemoteForTV.powerOff();

standardRemoteForDVD.powerOn();
standardRemoteForDVD.volumeDown();
standardRemoteForDVD.powerOff();