import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;
  private url = "http://localhost:3000";

  constructor() {
    this.socket = io(this.url, {
      transports: ['websocket', 'polling']
    });
  }

  joinRoom(data: {user: string; room: string}): void {
    this.socket.emit('join', data);
  }

  sendMessage(data: {user: string; room: string; message: string}): void {
    this.socket.emit('message', data)
  }

  getMessage(): Observable<any> {
    return new Observable(observer => {
      this.socket.on("new message", (data) => {
        observer.next(data);
      });

      this.socket.on("join", (data) => {
        observer.next({
          user: 'SYSTEM',
          message: `${data.user} new user joined`
        });
      });
    });
  }

}
