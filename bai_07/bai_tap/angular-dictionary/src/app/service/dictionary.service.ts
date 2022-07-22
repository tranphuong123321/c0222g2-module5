import {Injectable} from '@angular/core';
import {Dictionary} from '../model/dictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarys: Dictionary[] = [];

  constructor() {
    this.dictionarys.push({id: 1, word: 'Dog', mean: 'Con chó'});
    this.dictionarys.push({id: 2, word: 'Cat', mean: 'Con mèo'});
    this.dictionarys.push({id: 3, word: 'Tiger', mean: 'Con hổ'});
    this.dictionarys.push({id: 4, word: 'Lion', mean: 'Con sư tử'});
  }

  public getAll() {
    return this.dictionarys;
  }

  public findById(id: number) {
    for (const dictionary of this.dictionarys) {
      if (dictionary.id === id) {
        return dictionary;
      }
    }
  }
}
