import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_KEY } from '../../../../api-key';
import { SearchByQueryResult } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  private endpoint = environment.foodDataEndpoint;
  private apiKey = API_KEY;

  constructor(private http: HttpClient) { }

  // Fetches details for one food item by FDC ID
  public getOneFoodDetails(fdcid: string): Observable<any> {
    return this.http.get(`${this.endpoint}/food/${fdcid}`, {
      params: {
        api_key: this.apiKey
      }
    });
  }

  // Returns a list of foods that matched search (query) keywords
  public searchByQuery(query: string): Observable<SearchByQueryResult> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.endpoint}/foods/search`, { query }, {
      headers,
      params: {
        api_key: this.apiKey
      }
    }).pipe(
      map((result: any) => result as SearchByQueryResult)
    );
  }

}
