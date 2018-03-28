import { Component } from '@angular/core';
import { NavController,LoadingController,ActionSheetController } from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';

import { MusicPlayerPage } from '../../pages/music-player/music-player';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public allMusic:any;

 constructor(public navCtrl: NavController,
  public musicProvider: MusicsProvider,
  private actionSheetController: ActionSheetController,
  public loadingController : LoadingController
) {
  
  
  }

  ionViewDidLoad(){
    let allMusicLoading = this.loadingController.create({
        content:" Loading Songs"
    }); 
    allMusicLoading.present();
    return this.musicProvider.getMusic()
   .subscribe(
              res => { console.log(res);
                allMusicLoading.dismiss();
                this.allMusic = res}
              );
    
   
 }


 play(music){
 this.navCtrl.push( MusicPlayerPage,{music: music});}
    
 
  

}
