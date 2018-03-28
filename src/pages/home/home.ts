import { Component } from '@angular/core';
import { NavController,LoadingController,ActionSheetController } from 'ionic-angular';
import { MusicsProvider } from '../../providers/musics/musics';
import { SocialSharing } from '@ionic-native/social-sharing';
import { MusicPlayerPage } from '../../pages/music-player/music-player';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public allMusic:any;

 constructor(public navCtrl: NavController,
  private socialSharing: SocialSharing, 
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
 this.navCtrl.push( MusicPlayerPage,{music: music});
}
    
share(music){
  let shareSong = this.actionSheetController.create({
    title: "Share Song",
    buttons:[
      {
        text: "FaceBook",
        icon: "logo-facebook",
        handler:()=> {
          this.socialSharing.shareViaFacebook(music.name, music.image, music.music_url)
        }
      },
      {
        text: "Twitter",
        icon: "logo-twitter",
        handler:()=> {
          this.socialSharing.shareViaTwitter(music.name, music.image, music.music_url)
        }
      },
      {
        text: "Share",
        icon: "share",
        handler:()=> {
          this.socialSharing.share(music.name, "", music.image, music.music_url)
        }
      },
      {
        text: "Close",
        role: "destructive",
        icon: "close"

      }
      ]
  });
  shareSong.present();
} 
  

}
