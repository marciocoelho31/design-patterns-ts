import { ImageEditor } from './image-editor';
import { Memento } from './memento';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: salvando o estado de ImageEditor`);
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log('Backup: não há mementos');
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Backup: memento ${memento.getName()} restaurado com sucesso`);
  }

  showMementos(): void {
    console.log('Backup: mementos salvos');
    this.mementos.forEach((memento, index) => {
      console.log(`${index + 1}: ${memento.getName()}`);
    });
  }
}
