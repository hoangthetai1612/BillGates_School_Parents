import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  buttonStyle = {
    width: '50%',
    cssClass: 'buttonOranges',
    text: 'Huỷ bỏ',
    disable: true
  }
  constructor() { }

  ngOnInit() {
  }

}
