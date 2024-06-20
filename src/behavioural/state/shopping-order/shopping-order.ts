import { OrderPending } from './order-pending';
import { ShoppingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private state: ShoppingOrderState = new OrderPending(this);

  getState(): ShoppingOrderState {
    return this.state;
  }

  setState(state: ShoppingOrderState): void {
    this.state = state;
    console.log(`O estado do pedido agora é ${this.state.getName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    return this.state.approvePayment();
  }

  rejectPayment(): void {
    return this.state.rejectPayment();
  }

  waitPayment(): void {
    return this.state.waitPayment();
  }

  shipOrder(): void {
    return this.state.shipOrder();
  }
}
