import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-chat-upload',
  templateUrl: './chat-upload.component.html',
  styleUrls: ['./chat-upload.component.scss'],
})
export class ChatUploadComponent implements OnInit {
  imageUrl: any = '';
  @ViewChild('fileInput') fileInput: any;
  public fileForm!: FormGroup;

  constructor(private toast: ToastrService, private route: Router, private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  uploadFile(event: any) {
    // console.log('file selected', event.target.files);
    this.imageUrl = event.target.files[0].name;
    this.toast.success('File Uploaded Successfully');
    setTimeout( () => {
      this.fileInput.value = '';
      this.imageUrl = '';
    }, 3000);
  }

  setForm() {
    this.fileForm = this._formBuilder.group({
      filUpload: ['']
    });
  }

  askQuestion() {
    this.route.navigate(['/dashboard']);
  }
}
