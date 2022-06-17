import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {

  constructor() { }

  getItems(item:string) {
    return JSON.parse(localStorage.getItem(item) || '{}')
  }

  createItems(data: any, newData: any, item:string) {

    data.push(newData);
    console.log(data);
    
  localStorage.setItem(item, JSON.stringify(data));
}

}
