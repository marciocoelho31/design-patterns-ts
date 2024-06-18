import { SmartHouseCommand } from './smart-house-command';

export class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommand } = {};

  addCommand(k: string, command: SmartHouseCommand): void {
    this.commands[k] = command;
  }

  executeCommand(k: string): void {
    this.commands[k].execute();
  }

  undoCommand(k: string): void {
    this.commands[k].undo();
  }
}
