import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedido.dto';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  pedido:  PedidoDTO;
  parcelas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; 
  formGroup: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder  
  ) {
    this.pedido = this.navParams.get('pedido');
    
    this.formGroup = this.formBuilder.group({
      numeroParcelas: [1, Validators.required],
      "@type": ["pagamentoCartao", Validators.required]
    });
    }

  nextPage() {
    this.pedido.pagamento = this.formGroup.value;
    console.log(this.pedido)
    this.navCtrl.setRoot('OrderConfirmationPage', {pedido: this.pedido});
  }

}
