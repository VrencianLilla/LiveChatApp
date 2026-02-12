import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChatService } from './services/chat/chat-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
  roomId = '';
  messageText = '';
  messageArray: { user: string; message: string }[] = [];
  phone = '';
  currentUser: any;
  selectedUser: any;

  userList = [
    {
      id: 1,
      name: 'Pingu',
      phone: '9876598765',
      image: 'assets/user/user1.jpg',
      roomId: {
        2: 'room-2',
        3: 'room-3'
      }
    },
    {
      id: 2,
      name: 'Fram',
      phone: '9876598762',
      image: 'assets/user/user2.jpg',
      roomId: {
        1: 'room-1',
        3: 'room-3'
      }
    },
    {
      id: 3,
      name: 'Racoon',
      phone: '9876598764',
      image: 'assets/user/user3.jpg',
      roomId: {
        1: 'room-1',
        2: 'room-2'
      }
    },
  ];

  constructor(private chatService: ChatService){
    this.currentUser = this.userList[0];

    this.chatService.getMessage()
    .subscribe((data:{user: string, message: string})=>{
      this.messageArray.push(data);
    })
  }

  selectUserHandler(phone: string): void{


    this.selectedUser = this.userList.find(user => user.phone === phone);
    this.roomId = this.selectedUser.roomId[this.selectedUser.id];
    this.messageArray = [];

    this.join(this.currentUser.name, this.roomId);
  }

  join(username: string, roomId: string): void{
    this.chatService.joinRoom({user: username, roomId: roomId});
  }
}
