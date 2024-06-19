import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const imageEditorBackupManager = new ImageEditorBackupManager(imageEditor);

imageEditorBackupManager.backup();
imageEditor.convertFormatTo('gif');
//console.log(imageEditor);

imageEditorBackupManager.backup();
imageEditor.convertFormatTo('bmp');

imageEditorBackupManager.backup();
imageEditor.convertFormatTo('tiff');

imageEditorBackupManager.backup();
imageEditor.convertFormatTo('psd');

//imageEditorBackupManager.undo();
console.log(imageEditor);

imageEditorBackupManager.undo();
console.log(imageEditor);

imageEditorBackupManager.undo();
console.log(imageEditor);

imageEditorBackupManager.undo();
console.log(imageEditor);

imageEditorBackupManager.undo();
console.log(imageEditor);

imageEditorBackupManager.undo();
console.log(imageEditor);
