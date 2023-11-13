import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as mask from "app/shared/utils/masks";
import { CpfValidator } from "app/shared/utils/validators";
import { fadeInOut } from 'app/shared/animations/animations';
import { InfoCard } from 'app/shared/models/info-card.model';
import { Store } from '@ngrx/store';
import * as footerButton from 'app/core/store/footer';
@Component({
  selector: 'app-nova-admissao',
  templateUrl: './nova-admissao.component.html',
  styleUrls: ['./nova-admissao.component.scss'],
  animations: [fadeInOut]
})
export class NovaAdmissaoComponent implements OnInit {
  formularioAdmissao: FormGroup = this.formBuilder.group({
    cpf: ['', [
      Validators.required,
      Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/),
      Validators.minLength(14), // digits + word characters
      Validators.maxLength(14), // digits + word characters
      CpfValidator.isValidCpf()
    ]]
  }, {updateOn: 'blur'})
  isEditable = false;
  maskList = mask.default;
  secondaryButton: footerButton.FooterButton = {
    title: 'Hints for admission',
    type: 'secondary'
  };
  primaryButton: footerButton.FooterButton = {
    title: 'Start new admission',
    type: 'primary'
  };
  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {

    this.store.dispatch(new footerButton.AddFooterButtonAction(this.secondaryButton));
  }

  cardList: InfoCard[] = [];

  ngOnInit(): void {

  }

  searchInfo() {
    this.store.dispatch(new footerButton.CleanAllFooterButtonAction());
    this.store.dispatch(new footerButton.AddFooterButtonAction(this.secondaryButton));
    if(this.formularioAdmissao.valid) {
      this.cardList = [
        {
          title: 'Document Register Situation',
          subTitle: 'Situation Consult',
          infoList: [
            {
              label: 'Name',
              icon: 'person',
              value: 'Chris Brown'
            },
            {
              label: 'Document situation',
              icon: 'check_circle',
              value: 'Regular',
              iconColor: '#079c43',
              outlined: true
            },
          ]
        },
        {
          title: 'Application Account',
          subTitle: 'Viacredi',
          infoList: [
            {
              label: 'Account Number',
              icon: 'credit_card',
              value: '557932-4'
            }
          ],
          buttonList: [
            {
              title: 'Duplicate Account'
            }
          ]
        },
        {
          title: 'Current Account',
          subTitle: 'Viacredi',
          infoList: [
            {
              label: 'Account Number',
              icon: 'credit_card',
              value: '778461-8'
            }
          ],
          buttonList: [
            {
              title: 'Duplicate Account'
            }
          ]
        }
      ];
      this.store.dispatch(new footerButton.AddFooterButtonAction(this.primaryButton));
    }
    else {
      this.formularioAdmissao.get('cpf')?.setErrors({cpfNotValid: true});
      this.cardList = [];
    }
  }

}
