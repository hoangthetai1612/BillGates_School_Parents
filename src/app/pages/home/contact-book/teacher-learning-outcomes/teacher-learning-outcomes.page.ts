import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LearningOutcomesPage } from '../learning-outcomes/learning-outcomes.page';

@Component({
  selector: 'app-teacher-learning-outcomes',
  templateUrl: './teacher-learning-outcomes.page.html',
  styleUrls: ['./teacher-learning-outcomes.page.scss'],
})
export class TeacherLearningOutcomesPage implements OnInit {
  header = {
    cssClass: 'header-special',
    classText: 'text-white',
    iconRight: '',
    iconLeft: 'assets/svg/icon-backbutton.svg',
    iconCenter: {
      text: 'Kết quả học tập',
    },
    type: {
      text: 'text',
      backbutton: 'backbutton'
    }
  };

  fakeData = [
    {
      id: 1,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 2,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    },
    {
      id: 3,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 4,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    },
    {
      id: 5,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 6,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    },
    {
      id: 7,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 8,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    },
    {
      id: 9,
      name: 'Nguyễn Thu Huyền',
      imageUrl: 'https://br-art.vn/wp-content/uploads/2018/02/chia-se-preset-bo-anh-chan-dung-ao-dai-hoc-sinh-cua-nag-thinh-nguyen-2.jpg'
    },
    {
      id: 10,
      name: 'Nguyễn Duy Mạnh',
      imageUrl: 'https://ntthnue.edu.vn/uploads/Images/2016/06/003.jpg'
    }
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openDetailResult(item) {
    const modal = await this.modalController.create({
      component: LearningOutcomesPage,
      componentProps: { data: item }
    });
    return await modal.present();
  }

}
