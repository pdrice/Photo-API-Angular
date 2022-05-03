import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls:{
    regular:string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FetchPhotoService {
  constructor(private http:HttpClient) {}

  getPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers:{
        Authorization:
          'Client-ID ZMcdgdSSIU8NElWikVwfrXZQp49voZn0_3_BvkJ5FqE'
      }
    });
  }


}
