import {Component, OnInit} from '@angular/core';
import {Dictionary} from '../model/dictionary';
import {ActivatedRoute, convertToParamMap, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  detailDictionary: Dictionary;

  constructor(activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      if (id != null) {
        this.detailDictionary = this.dictionaryService.findById(parseInt(id));
      }
    });
  }

  ngOnInit(): void {
  }

}
