import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import* as AOS from 'aos'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  @ViewChild('myForm') myForm!:ElementRef;
  @ViewChild('nameField') nameField!:ElementRef;
  @ViewChild('emailField') emailField!:ElementRef;
  @ViewChild('messageField') messageField!:ElementRef;
  @ViewChild('sendButton') sendButton!:ElementRef;

  @Input() emailsend : boolean = false;

  constructor(){}

  ngOnInit():void{
    AOS.init();
  }

  async sendMail(){
     
    console.log('send Mail', this.myForm);
    this.emailsend = true;


    let nameField = this.nameField.nativeElement
    let emailField = this.emailField.nativeElement
    let messageField = this.messageField.nativeElement
    let sendButton = this.sendButton.nativeElement

    nameField.disabled=true;
    emailField.disabled=true;
    messageField.disabled=true;
    sendButton.disabled=true;
    
    // Animation anzeigen
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);

    
    //send
    await fetch("https://hao-truong.developerakademie.net/send_mail/send_mail.php",
    {
      method: 'POST',
      body: fd
    }
    );
    


    // Text anzeigen : Nachricht gesendet
    this.clearForm(nameField, messageField, emailField, sendButton);
    this.enableForm(nameField, messageField, emailField, sendButton);
    setTimeout(() => {
      this.emailsend = false;
    }, 3000);

  }

  enableForm(nameField: { disabled: boolean; }, messageField: { disabled: boolean; }, emailField: { disabled: boolean; }, sendButton: { disabled: boolean; }) {
    nameField.disabled = false;
    messageField.disabled = false;
    emailField.disabled = false;
    sendButton.disabled = false;
  }
  
  clearForm(nameField: { value: string; }, messageField: { value: string; }, emailField: { value: string; }, sendButton: { value: string; }){
    nameField.value = '';
    messageField.value = '';
    emailField.value = '';
    sendButton.value = '';

  }
}





