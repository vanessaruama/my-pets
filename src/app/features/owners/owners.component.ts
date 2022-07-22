import { Component, OnInit } from '@angular/core';
import { PoInfoOrientation, PoPageAction } from '@po-ui/ng-components';
import { Owner } from './shared/interface/owner.interface';
import { OwnersService } from './shared/services/owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  owners: Array<Owner>;
  orientation = PoInfoOrientation;
  actions: Array<PoPageAction>;

  constructor(
    private ownersService: OwnersService
  ) {
    console.log('entrei no constructor');
  }

  ngOnInit(): void {
    console.log('entrei no onInit');
    this.getOwners();
    this.actions = this.getActions();
  }

  getOwners(): void {
    this.ownersService.get().subscribe(
      {
        next: response => this.owners = response, //sucesso
        error: error => console.log(error), //erro
        complete: () => console.log('finalizei') //quando finalizou
      }
    );
  }

  getActions(): Array<PoPageAction>{
    return [
      {label: 'Incluir', action: () => this.entrei()}
      //outra forma> action: this.entrei.bind(this)
    ];
  }

  entrei(): void {
    alert('entrei no incluir')
  }
}

