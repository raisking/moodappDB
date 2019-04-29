import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "moodapp";
  class = "IT6203 Group 7 Project";
  member = "Praneet Ahuja, Juston Bryant, Prakash Rai, Brian Shieh";

  name: string = '';
  giphy: string = '';
  data: [];
  images: [];
  fixed_width: [];
  url: string;

  found: boolean;
  posts: any;
  age: number;
  id: number;

  constructor(private httpClient: HttpClient) { }
  onNameKeyUp(event: any) {
    this.name = event.target.value;
    this.found = false;
  }
  getGiphy() {
    let api = "c04UQ5rjxyA2URztitAZ2NbyddJ7Saat";
    this.httpClient.get(`https://api.giphy.com/v1/gifs/search?api_key=${api}&q=${this.name}&limit=5&offset=0&rating=G&lang=en`)
      .subscribe(
        (data: any[]) => {


          console.log(data);



        }
      )

  }

  // getProfile() {
  //   this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`)
  //     .subscribe(
  //       (data: any[]) => {
  //         if (data.length) {
  //           this.age = data[0].age;
  //           this.id = data[0].id;
  //           this.found = true;
  //         }
  //         console.log(data)
  //       }
  //     )
  // }
}
