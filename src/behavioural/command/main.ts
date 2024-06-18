import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// chamando direto o comando
// Receiver
const bedroomLight = new SmartHouseLight('Luz do quarto');
const bathroomLight = new SmartHouseLight('Luz do banheiro');
// Command
const bedroomLightPowerCommand = new LightPowerCommand(bedroomLight);
const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);
bedroomLightPowerCommand.execute();
bedroomLightPowerCommand.undo();

// fazendo via invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-banheiro', bathroomLightPowerCommand);
smartHouseApp.executeCommand('btn-banheiro');
smartHouseApp.undoCommand('btn-banheiro');

const bedroomLightIntensityCommand = new LightIntensityCommand(bedroomLight);
smartHouseApp.addCommand(
  'btn-intensidade-quarto',
  bedroomLightIntensityCommand,
);
for (let i = 0; i < 5; i++) {
  smartHouseApp.executeCommand('btn-intensidade-quarto');
}
for (let i = 0; i < 3; i++) {
  smartHouseApp.undoCommand('btn-intensidade-quarto');
}
