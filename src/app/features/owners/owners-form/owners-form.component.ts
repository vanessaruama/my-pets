import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mp-owners-form',
  templateUrl: './owners-form.component.html',
  styleUrls: ['./owners-form.component.css']
})
export class OwnersFormComponent implements OnInit {
  @Output() sendOwnerFormToSave = new EventEmitter();
  ownerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.onChangeForm();
  }

  buildForm(): void {
    this.ownerForm = this.formBuilder.group({
      id: '',
      name: '',
      rg: '',
      cpf: '',
      email: '',
      tel1: '',
      tel2: ''
    });
  }

  onChangeForm(): void {
    this.ownerForm.valueChanges.subscribe(
    { next: form => {
      console.log('entrei', form),
      this.sendOwnerFormToSave.emit(form)
    } })
  }
}
