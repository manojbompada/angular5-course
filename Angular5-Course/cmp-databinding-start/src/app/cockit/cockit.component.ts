import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockit',
  templateUrl: './cockit.component.html',
  styleUrls: ['./cockit.component.css']
})
export class CockitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContentInput')
  serverContentInput;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
    // console.log(nameInput);
    this.serverCreated.emit(
      {serverName: nameInput.value , serverContent: this.serverContentInput.nativeElement.value});
  }


  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});

  }

}
