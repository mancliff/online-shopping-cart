import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

import {map, take} from 'rxjs/operators';
import {observable} from 'rxjs';


export interface Item {
  id?: string,
  name?: string,
  price?: number
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Observable<Item[]>;
  private itemCollection: AngularFirestoreCollection<Item>;


  constructor(private afs: AngularFirestore) {
  
   }
}
