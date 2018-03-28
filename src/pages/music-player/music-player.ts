import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
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
 private songMedia: MediaObject= null;
  private isPaused= false;
  constructor(
    private media: Media,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
   this.music= this.navParams.get("music");
   
  }

  playMusic(){
    if(this.songMedia=== null){
      this.songMedia= this.media.create(this.media["music_url"]);
      this.songMedia.play();
    }else{
      if(this.isPaused === true){
        this.songMedia.play();
        this.isPaused= false;
      }
    }
 
  }
  stopMusic(){
    if(this.songMedia !== null){
      this.songMedia.pause();
      this.isPaused = true;
    }
  }
 pauseMusic(){
  if(this.songMedia !== null){
    this.songMedia.stop();
    this.songMedia.release();
    this.songMedia = null;
  }
 }


}
