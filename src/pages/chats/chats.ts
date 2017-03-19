import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { Chat, MessageType } from '../../models';
 
@Component({
  templateUrl: 'chats.html'
})
export class ChatsPage {
  chats: Observable<Chat[]>;

   constructor() {
    this.chats = this.findChats();
   }

	private findChats(): Observable<Chat[]> {
		return Observable.of([
		  {
		    _id: '0',
		    title: 'mc ride',
		    picture: 'https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png',
		    lastMessage: {
		      content: 'Is this death grips?',
	          createdAt: moment().subtract(1, 'hours').toDate(),
	          type: MessageType.TEXT,
		    }
		  },
		  {
		    _id: '1',
		    title: 'Puggo',
		    picture: 'https://img.ifcdn.com/images/2a17eee4301bebf0c93fd092d0f0864205144a36ec39f523d12eef54da504e81_1.jpg',
		    lastMessage: {
		      content: 'ultimate borkdrive',
		      createdAt: moment().subtract(2, 'hours').toDate(),
	          type: MessageType.TEXT
		    }
		  },
		  {
		    _id: '2',
		    title: 'Doge',
		    picture: 'http://i1.kym-cdn.com/photos/images/newsfeed/000/674/934/422.jpg',
		    lastMessage: {
		      content: 'wow',
		      createdAt: moment().subtract(1, 'days').toDate(),
	          type: MessageType.TEXT
		    }
		  },
		  {
		    _id: '3',
		    title: 'ana-chan',
		    picture: 'https://i.ytimg.com/vi/Jn1KumzW66s/hqdefault.jpg',
		    lastMessage: {
		      content: 'kyaaa ',
		      createdAt: moment().subtract(4, 'days').toDate(),
		      type: MessageType.TEXT
		    }
		  },
		  {
		    _id: '4',
		    title: 'Mozao',
		    picture: 'http://4.bp.blogspot.com/-G83WhDnEq48/UzcUfTIC6PI/AAAAAAAAAJo/6dMIQQTlM4I/s1600/livre_1293420723.png',
		    lastMessage: {
		      content: 'Eai meu mel',
		      createdAt: moment().subtract(2, 'weeks').toDate(),
		      type: MessageType.TEXT
		    }
		  }
		]);
	}

  	// removeChat(chat: Chat): void {
   //  	this.chats = this.chats.map<Chat[]>(chatsArray => {
   //    		const chatIndex = chatsArray.indexOf(chat);
   //    		chatsArray.splice(chatIndex, 1);
 
   //    		return chatsArray;
   //  	});
  	// }
}