import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StudentService {

    constructor(private http: HttpClient) { }

    // Uses http.get() to load data 
    getUsers() {
        return this.http.get('http://localhost:8000/users');
    }

    // Uses http.post() to post data 
    addUsers(firstName: string, lastName: string, mood: string, note: string) {
        this.http.post('http://localhost:8000/users', { firstName, lastName, mood, note })
            .subscribe((responseData) => {
                console.log(responseData);
            });
        location.reload();
    }

    deleteStudent(studentId: string) {
        this.http.delete("http://localhost:8000/users/" + studentId)
            .subscribe(() => {
                console.log('Deleted: ' + studentId);
            });
        location.reload();
    }

    updateUser(studentId: string, firstName: string, lastName: string, mood: string, note: string) {
        //request path http://localhost:8000/students/5xbd456xx 
        //first and last names will be send as HTTP body parameters 
        this.http.put("http://localhost:8000/users/"
            + studentId, { firstName, lastName, mood, note })
            .subscribe(() => {
                console.log('Updated: ' + studentId);
            });
        location.reload();
    }
}