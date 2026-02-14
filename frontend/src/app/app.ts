import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';  I don't need this, because i dont have multiple pages and I dont need navigation between routes like /login /chat etc.
import { ChatService } from './services/chat/chat-service';
import { CommonModule } from '@angular/common';  //gives you access to *ngIf *ngFor

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('frontend');

  username = '';
  messageText = '';
  isLoggedIn = false;

  isDarkMode = false;  //for dark mode function

  messages: { user: string; message: string }[] = [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.chatService.getMessage()
      .subscribe(data => {
        this.messages.push(data);
      });
  }

  login(): void {
    if (!this.username.trim()) return;
    this.isLoggedIn = true;
    this.chatService.joinRoom({ user: this.username, room: 'main' });
  }

  sendMessage(): void {
    if (!this.messageText.trim()) return;

    const msg = {
      user: this.username,
      room: 'main',
      message: this.messageText
    };

    this.chatService.sendMessage(msg);
    this.messageText = '';
  }

  toggleDarkMode(): void {  //for Dark mode
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  isOwnMessage(msg: any): boolean { return msg.user === this.username; }  // for UI
}
