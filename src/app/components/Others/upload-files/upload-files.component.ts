import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AttachmentsService } from 'src/app/services/attachments.service';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  selectedFile: File | null = null;

  constructor(private service: AttachmentsService) {

  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  UploadImage() {

    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
     
     
      //console.log(formData);
      this.service.PostAttachImage(formData).subscribe(
        result => {
          alert(JSON.stringify(result))
        },
        error =>{
          alert(JSON.stringify(error))
        }


      )
    }

  }



  ngOnInit(): void {
  }

}
