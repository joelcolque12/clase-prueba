import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagenService {
  private apiUrl = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) {}

  getImages(limit: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?limit=${limit}`);
  }

  getImageById(id: number): Observable<any> {
    return this.http.get<any>(`https://picsum.photos/id/${id}/info`);
  }
}
