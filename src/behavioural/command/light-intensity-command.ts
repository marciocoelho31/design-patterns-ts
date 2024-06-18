import { SmartHouseCommand } from './smart-house-command';
import { SmartHouseLight } from './smart-house-light';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(
      `${this.light.name} agora está com intensidade de ${intensity}%`,
    );
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(
      `${this.light.name} agora está com intensidade de ${intensity}%`,
    );
  }
}
