import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

function separate(data: string): string[] {
	return data.replace(/\r\n/g, "\r").replace(/\n/g, "\r").split(/\r/).filter(i => i.length);
}

@Injectable()
export class NewsService {

	constructor(private http: HttpClient) { }

	public getNews(): Observable<string[]> {
		return this.http.get('assets/news.txt', {responseType: 'text'})
		.pipe(map(data => separate(data)));
	}
}
