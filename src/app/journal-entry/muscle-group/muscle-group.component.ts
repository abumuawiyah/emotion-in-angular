import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { css } from 'emotion';

import { button, colors, font, flex, height, input } from '../../../styles';

@Component({
  selector: 'gj-muscle-group',
  templateUrl: './muscle-group.component.html'
})
export class MuscleGroupComponent implements OnInit {
  muscleForm: FormGroup;

  constructor(private fb: FormBuilder) { }
  @Output() submitted: EventEmitter<object> = new EventEmitter<object>();
  musclesList: string[] = [
    'Arms',
    'Back',
    'Shoulders',
    'Chest',
    'Legs',
    'Abs'
  ];

  textClass: string = css`
    ${font.md};
    color: ${colors.primary};
    margin-bottom: 30px;
  `

  formClass: string = css`
    ${flex};
    ${flex.column};
    input { 
      ${input.large};
      font-size: 20px;
      margin-bottom: 20px;
      padding-left: 20px;
    }
  `

  inputClass: string = css`
    ${height(50)}
    margin-bottom: 20px;
    padding-left: 10px;
  `

  buttonClass: string = css`
    ${button.large};
    ${button.primary};
  `

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.muscleForm = this.fb.group({
      muscles: [this.musclesList[0], Validators.required],
    })
  }

  submit(value: object) {
    console.log('submitting value....')
    this.submitted.emit(value);
  }

}
