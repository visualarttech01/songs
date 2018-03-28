import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';
/**
 * Generated class for the MusicPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music-player',
  templateUrl: 'music-player.html',
})
export class MusicPlayerPage {
 public music= [];
 private songMedia = null;
  private isPaused= false;
  constructor(
    private nativeAudio: NativeAudio,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.music= this.navParams.get("music");
   //this.nativeAudio.preloadSimple({{music.id}}, 'music.music_url').then(onSuccess, onError);
   this.nativeAudio.preloadComplex(this.music["id"], this.music["music_url"],1,1,0),() => console.log('this.music["id"] is done playing');

  }

  playMusic(){
    if(this.songMedia=== null){
      this.songMedia= this.nativeAudio.play(this.music["id"], () => console.log('this.music["id"] is done playing'));
    }else{
      if(this.isPaused === true){
        this.songMedia= this.nativeAudio.play(this.music["id"], () => console.log('this.music["id"] is again playing'));
        this.isPaused= false;
      }
    }
 
  }
  stopMusic(){
    if(this.songMedia !== null){
     this.nativeAudio.stop(this.music["id"]), () => console.log('this.music["id"] is done stop');
     this.nativeAudio.unload(this.music["id"]), () => console.log('this.music["id"] is done unload');
      this.isPaused = true;
    }
  }
 pauseMusic(){
  if(this.songMedia !== null){
    this.nativeAudio.stop(this.music["id"]), () => console.log('this.music["id"] is Pause');
    this.songMedia = null;
  }
 }


}
