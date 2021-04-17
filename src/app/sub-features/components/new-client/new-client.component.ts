import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.sass'],
})
export class NewClientComponent {
  upload = faUpload;

  submit(form: NgForm): void {
    console.log(form.value);
    alert('Not implemented yet');
  }
}
