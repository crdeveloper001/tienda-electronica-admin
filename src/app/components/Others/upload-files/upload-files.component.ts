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
  attachmentForm:FormGroup

  constructor(private service:AttachmentsService,private formBuilder:FormBuilder) {
    this.attachmentForm = this.formBuilder.group({
      ImageFile: new FormControl('',Validators.required)
    })
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.attachmentForm.get("ImageFile")?.setValue(file)
  }
  UploadImage(){
    const formData = new FormData();
    formData.append('file',this.attachmentForm.get("ImageFile")?.value)

    this.service.PostAttachImage(formData).subscribe(result =>{
      alert("success")
    },(error:HttpErrorResponse) =>{
      alert(JSON.stringify(error))
    })
  }
 
  

  ngOnInit(): void {
  }

}
