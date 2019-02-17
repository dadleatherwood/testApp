import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was Created"
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  username = "";
  usernamePresent = false;
  showMessage = false;
  messageLogs = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.username = "";
  }

  onShowMessage() {
    this.showMessage = !this.showMessage;
    this.messageLogs.push(this.messageLogs.length + 1);
    console.log(this.messageLogs);
  }

  

  

}
