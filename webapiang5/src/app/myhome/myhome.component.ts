import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import {Person} from '../person';

@Component({
  selector: 'app-myhome',
  templateUrl: './myhome.component.html',
  styleUrls: ['./myhome.component.scss']
})
export class MyhomeComponent implements OnInit {

  public peopleModel: string[] = [];
  public people:Person[];
  public person: Person;
  public putPersonResult:string = "";
  constructor(private personService:PersonService) { }

  ngOnInit() {
    //this.person.Name = "my name is anthony hehe";
    this.getPeople();
  }

  getPeople(){
    this.personService.getPeople().subscribe(data => {
      console.log(data);
      for(let x = 0; x < data.length; x++){
        this.peopleModel[x] = <string>data[x].Name;
      }
      this.people = data;

      }, err => {
      });
  }

  getPerson(id){
    this.personService.getPerson(id).subscribe(data => {
      console.log(data);
      this.person = data;      
      }, err => {
        this.person = null;
      });
  }

  putPerson(index){
    this.personService.putPerson(
      this.people[index].Id, 
      {
        Id:this.people[index].Id, 
        Name: this.peopleModel[index]
      }
    ).subscribe(data => {
      this.getPeople();
      this.putPersonResult = <string>data;
      }, err => {
        console.log(err);  
      });
   }

   postPerson(name){
    var newPerson:Person = 
    {
      Id:this.people.length > 0?(this.people[this.people.length-1].Id + 1):1, 
      Name:name
    };
    console.log(newPerson);
    this.personService.postPerson(newPerson).subscribe(data => {
      this.getPeople();
      this.putPersonResult = <string>data;
      }, err => {
        console.log(err);  
      });
   }

   deletePerson(id){
    this.personService.deletePerson(id).subscribe(data => {
      this.getPeople();
      this.putPersonResult = <string>data;
      }, err => {
        console.log(err);  
      });
   }


}
