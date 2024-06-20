import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class SellerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    // o seller só pode aprovar orçamentos de até 1000
    if (budget.total <= 1000) {
      console.log('O vendedor aprovou o orçamento!');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
