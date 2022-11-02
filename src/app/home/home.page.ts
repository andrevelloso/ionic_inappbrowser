import { Component , OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
  
  }
  
  ngOnInit(){
  
      const browser = this.iab.create('https://www.sysbrasil.com/','_self',{location:'no'}); 
  
  }
  }