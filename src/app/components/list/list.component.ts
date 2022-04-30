import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/models/user.interface';
import { DataService } from './data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  users!: UserInterface[];
  user!: UserInterface;
  panelOpenState = false;

  updated!: boolean;

  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {}

  getUsers() {
    this.dataSvc.getUsers().subscribe((data) => (this.users = data));
  }

  getUser(id: number) {
    this.dataSvc.getUser(id).subscribe((data) => {
      this.user = data;
    });
  }

  saveUser(
    id: number,
    name: string,
    lastName: string,
    age: number,
    email: string
  ) {
    this.dataSvc
      .saveUser({
        id: id,
        name: name,
        lastName: lastName,
        age: age,
        email: email,
      })
      .subscribe();
  }

  updateUser(id: number) {
    this.dataSvc
      .updateUser(
        {
          id: id,
          name: 'Nicolas',
          lastName: 'Smael',
          age: 31,
          email: 'nico.smael@gmail.com',
        },
        id
      )
      .subscribe();
  }

  deleteUser() {
    this.dataSvc.deleteUser(4).subscribe();
  }
}
