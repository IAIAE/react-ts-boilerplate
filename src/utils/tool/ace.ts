export function bindAceKeys(editor){
    editor.commands.addCommand({
        name: "newlinedown",
        bindKey: {win: "Ctrl-Enter", mac: "Command-Enter"},
        exec: function(editor) {
            editor.execCommand('gotolineend');
            editor.execCommand('insertstring', '\n');
        }
    })
    
    editor.commands.addCommand({
        name: "newlineup",
        bindKey: {win: "Shift-Ctrl-Enter", mac: "Shift-Command-Enter"},
        exec: function(editor) {
            editor.execCommand('gotolinestart');
            editor.execCommand('insertstring', '\n');
            editor.execCommand('golineup')
        }
    })

}