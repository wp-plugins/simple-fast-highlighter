(function() {

  tinymce.PluginManager.add('simplefasthighlighter_code_button', function( editor, url ) {

    var button;

    editor.on("init", function() {

      // editor.formatter.register('simplefasthighlighter_codeify', {
      //    inline: 'code'
      //  });

       editor.on("NodeChange", function(e) {
         var n = editor.selection && editor.selection.getNode();
         if (n) {
           button.active(tinymce.DOM.getParent(n, "code") ? true : false);
         }
       });

    });

    editor.addButton( 'simplefasthighlighter_code_button', {
      title: "Code",
      icon: "code",
      onclick: function(e) {

        e.preventDefault();
        editor.focus();

        var sel = editor.selection;
        var containerNode = sel && sel.getNode();

        if (containerNode) {


          if (containerNode.nodeName.toLowerCase() == "code") {
          sel.select(containerNode);
          sel.setContent(containerNode.innerHTML);
          //editor.execCommand("mceReplaceContent", false, containerNode.innerHTML);
        } else {
          sel.setContent("<code>" + sel.getContent() + "</code>");
          //editor.execCommand("mceReplaceContent", false, "<code>{$selection}</code>");
          //editor.execCommand("mceReplaceContent", false, "<code>" + editor.selection.getContent() + "</code>");
        }


          // Dit gaat niet goed als je een class hangt aan de code...
          // if (containerNode.nodeName.toLowerCase() == "code") {
          //
          //   console.log("remove");
          //   editor.formatter.remove('simplefasthighlighter_codeify');
          // } else {
          //
          //   editor.formatter.apply('simplefasthighlighter_codeify');
          // }
        }
      },
      onPostRender: function() {
         button = this;
      }
    });
  });
})();
