import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class ManagerBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    // o manager aprovar orçamentos de até 5000
    if (budget.total <= 5000) {
      console.log('O gerente aprovou o orçamento!');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
