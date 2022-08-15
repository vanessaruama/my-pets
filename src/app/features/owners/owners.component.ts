import { Component, OnInit, ViewChild } from '@angular/core';
import { PoInfoOrientation, PoModalAction, PoModalComponent, PoPageAction } from '@po-ui/ng-components';
import { Owner } from './shared/interface/owner.interface';
import { OwnersService } from './shared/services/owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) ownerFormModal: PoModalComponent;
  owners: Array<Owner>;
  orientation = PoInfoOrientation;
  actions: Array<PoPageAction>;
  modalActions: Array<PoModalAction>;
  ownerFormToSave: Owner;

  constructor(
    private ownersService: OwnersService
  ) {
    console.log('entrei no constructor');
  }

  ngOnInit(): void {
    console.log('entrei no onInit');
    this.getOwners();
    this.actions = this.getActions();
    this.modalActions = this.getModalActions();
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
      {label: 'Incluir', action: () => this.openModal()}
      //outra forma> action: this.entrei.bind(this)
    ];
  }

  entrei(): void {
    alert('entrei no incluir')
  }

  receiverForm(owner: Owner): void {
    console.log('Entrei no pai', owner);
    this.ownerFormToSave = owner;
  }

  deleteOwner(id: string): void {
    this.ownersService.delete(id).subscribe(
      {next: () => this.getOwners()}
    )
  }

  openModal(): void {
    this.ownerFormModal.open();
  }

  colseModal(): void {
    this.ownerFormModal.close();
  }

  getModalActions(): Array<PoModalAction> {
    return [
      {label: 'Salvar', action: () => this.postOwner()},
      {label: 'Cancelar', action: () => this.entrei()}
    ]
  }

  postOwner(): void {
    this.ownersService.post(this.ownerFormToSave).subscribe(
      { next: () => { this.colseModal(), this.getOwners() } }
    )
  }
}

