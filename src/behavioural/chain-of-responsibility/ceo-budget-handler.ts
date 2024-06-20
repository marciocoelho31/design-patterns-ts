import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class CeoBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    // o CEO trata qualquer orçamento
    console.log('O CEO aprovou o orçamento!');
    budget.approved = true;
    return budget;
  }
}
