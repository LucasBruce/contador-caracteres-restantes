import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public formDescricao!: FormGroup;
  public text = '';
  public totalCaracteres = 80;

  get descricao() {
    return this.formDescricao.get('descricao');
  }

  constructor(private formBuider: FormBuilder) {}

  ngOnInit(): void {
    this.configurarFormulario();
  }
  configurarFormulario() {
    this.formDescricao = this.formBuider.group({
      descricao: [''],
    });
  }
}
