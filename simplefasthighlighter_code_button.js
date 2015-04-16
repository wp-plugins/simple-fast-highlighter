(function() {



  tinymce.PluginManager.add('simplefasthighlighter_code_button', function( editor, url ) {
    editor.on("init", function() {
      editor.formatter.register('mycustomformat', {
         inline: 'code'
       });
    });
    editor.addButton( 'simplefasthighlighter_code_button', {
      //title: "Code",
      //icon: "wp_code",
      text : "Code",
      onclick: function() {

        editor.focus();


         var containerNode = editor.selection.getNode();

        if (containerNode.nodeName.toLowerCase() == "code") {
          editor.formatter.remove('mycustomformat');
        } else {
          editor.formatter.apply('mycustomformat');
        }

        // var containerNode = editor.selection.getNode();
        //
        // if (containerNode.nodeName.toLowerCase() == "code") {
        //   editor.selection.select(containerNode);
        //   //editor.selection.setContent(containerNode.innerHTML);
        //   editor.execCommand("mceReplaceContent", false, containerNode.innerHTML);
        // } else {
        //   editor.selection.setContent("<code>" + editor.selection.getContent() + "</code>");
        //   //editor.execCommand("mceReplaceContent", false, "<code>{$selection}</code>");
        //   //editor.execCommand("mceReplaceContent", false, "<code>" + editor.selection.getContent() + "</code>");
        // }
      }
    });
  });
})();
