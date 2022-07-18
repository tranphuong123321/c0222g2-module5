import { Component, OnInit } from '@angular/core';
import {Customer} from "../../model/customer";
import {Contract} from "../../model/contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[] = [];
  p=1
  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.getContract()
  }
  public getContract() {
    this.contractService.getContract().subscribe(contracts => {
      this.contracts = contracts;
    });
  }
}
