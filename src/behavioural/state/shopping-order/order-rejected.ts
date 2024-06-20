import { ShoppingOrder } from './shopping-order';
import { ShoppingOrderState } from './shopping-order-state';

export class OrderRejected implements ShoppingOrderState {
  private name = 'OrderRejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não é possivel aprovar pagamento que ja foi rejeitado...');
  }

  rejectPayment(): void {
    console.log('O pedido já está no estado "Pagamento rejeitado".');
  }

  waitPayment(): void {
    console.log(
      'Não é possivel mover para pendente um pedido que ja foi rejeitado...',
    );
  }

  shipOrder(): void {
    console.log('Não é possivel enviar pedido com pagamento rejeitado...');
  }
}
