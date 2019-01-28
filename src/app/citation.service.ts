import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

declare const BibtexParser: any;

// get data of publiction
function getDate(pub: any): Date {
  if (pub.Fields.Month) {
    return new Date(Date.parse(pub.Fields.Month +" 1, " + pub.Fields.Year));
  } else {
    return new Date(Date.parse("Jan 1, " + pub.Fields.Year));
  }   
}

// replace all but last occurrence of token
function replaceAllButLast (str: string, token: string): string {
  if (str.indexOf(token) == -1) {
    return str;
  }
  var parts = str.split(token);
  return parts.slice(0,-1) + token + parts.slice(-1)
}

// handle list of references
function handleData(rawdata: string): any[] {
  let rawjson = BibtexParser(rawdata).entries;

  // Remove `and' between authors
  for (let index in rawjson) {
    rawjson[index].Fields.Author_noand = 
    replaceAllButLast(rawjson[index].Fields.Author, ' and');
  }

  return rawjson.sort(
    (e1, e2) => -getDate(e1).getTime() + getDate(e2).getTime() 
  );
}

// filter complete list by cite keys
function subset(publist: any[], keys: string[]) {
  return publist.filter(entry => keys.findIndex(key => key == entry.EntryKey) >= 0);
}


@Injectable()
export class CitationService {

  constructor(private http: HttpClient) { }

  // return publications matching citekey
  public citeSubset(keys: string[]): Observable<any[]> {
    return this.citeAll().pipe(map(publist => subset(publist, keys)));
  }

  // return all publications sorted by date (descending)
  public citeAll(): Observable<any[]> {
    return this.http.get('assets/bibfile.bib', {responseType: 'text'})
    .pipe(map(rawdata => handleData(rawdata)));
  }
}
