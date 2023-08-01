import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { questions } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-chat-dashboard',
  templateUrl: './chat-dashboard.component.html',
  styleUrls: ['./chat-dashboard.component.scss'],
})
export class ChatDashboardComponent implements OnInit {
  public queAnsData = JSON.stringify(questions);
  public currentQuestion!: string;
  public currentSet!: any;
  // public objDiv!: any;
  public chatArray: any[] = [];
  public questionForm!: FormGroup;

  public items = [
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
    {
      icon: '../../../assets/images/recent-icon.svg',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi totam, nemo corrupti voluptate soluta sint assumenda quidem, doloremqu',
    },
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.questionForm = this._formBuilder.group({
      question: [''],
    });
  }

  submitQuestion() {
    const question = this.questionForm.value.question;
    this.chatArray.push({ question: this.questionForm.value.question });
    const dataSet = JSON.parse(this.queAnsData);
    this.currentSet = dataSet?.filter((data: any) => {
      const temp = data.key?.filter((key: any) => {
        return question?.toLowerCase()?.indexOf(key) !== -1;
      });
      return temp.length === data?.key?.length ? temp : null;
    });
    this.chatArray.push({ answer: this.currentSet?.[0] });
    this.setForm();
    // console.log(this.chatArray);
    // this.scrollTop('element');
  }


  // scrollTop(element:any) {
  //   element.scroll({ top: element.scrollHeight, behavior: 'smooth' });
  // }

}
