import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    // o diretor aprovar orçamentos de até 50000
    if (budget.total <= 50000) {
      console.log('O diretor aprovou o orçamento!');
      budget.approved = true;
      return budget;
    }
    return super.handle(budget);
  }
}
