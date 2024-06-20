import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder(); // pendente
order.approvePayment(); // aprovado
order.waitPayment(); // pendente
order.shipOrder();

order.rejectPayment(); // rejeitado - daqui pra baixo nao altera mais o estado
order.approvePayment();
order.waitPayment();
order.approvePayment();
order.shipOrder();
