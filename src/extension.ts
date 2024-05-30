import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	let command = vscode.commands.registerTextEditorCommand('html-to-js.insertFunction', (editor: vscode.TextEditor, edit: vscode.TextEditorEdit) => {
        // do things here
	});
    
	context.subscriptions.push(command);
}

export function deactivate() { }
