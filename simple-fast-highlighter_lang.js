(function(global) {

  var Language = global.Highlighter.Language;
  
  Language.sql = {
    comment : {
      single : "#",
      multi : ["<!--", "-->"]
    },
    quote : Language.defaults.quote,
    escape : Language.defaults.escape,
    keyword : ["ADD", "ALTER", "AND", "AS", "COLUMN", "CREATE", "CURDATE", "DATE", "DATABASE", "DELETE", "DESCRIBE", "DISTINCT", "DO", "DROP", "EXPLAIN", "FROM", "GROUP BY", "HANDLER", "INDEX", "INSERT", "INTO", "LEFT", "JOIN", "LIMIT", "NOW", "ON", "OPTIMIZE", "ORDER BY", "RENAME", "REPLACE", "SELECT", "SET", "SHOW", "TABLE", "UPDATE", "USE", "WHERE"],
    operator : ["<", ">", "=", "(", ")", "*", ";", "!", ","]
  };
    
  Language.csharp = {
    comment : Language.defaults.comment,
    quote : Language.defaults.quote,
    escape : Language.defaults.escape,
    keyword : ["#if", "#else", "#endif", "abstract", "as", "base", "bool", "break", "byte", "case", "catch", "char", "checked", "class", "const", "continue", "decimal", "default", "delegate", "do", "double", "else", "enum", "event", "explicit", "extern", "false", "finally", "fixed", "float", "for", "foreach", "goto", "get", "if", "implicit", "in", "int", "interface", "internal", "is", "locak", "long", "namespace", "new", "null", "object", "operator", "out", "override", "params", "partial", "private", "protected", "public", "readonly", "ref", "return", "sbyte", "sealed", "set", "short", "sizeof", "stackalloc", "static", "string", "struct", "switch", "this", "throw", "true", "try", "typeof", "uint", "ulong", "unchecked", "unsafe", "ushort", "using", "value", "virtual", "volatile", "void", "where", "while", "yield"],
    operator : global.Highlighter.copyShallow(Language.defaults.operator, [])
  };

  Language.java = {
    comment : Language.defaults.comment,
    quote : Language.defaults.quote,
    escape : Language.defaults.escape,
    keyword : ["@Override", "abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "const", "continue", "default", "do", "double", "else", "enum", "extends", "final", "finally", "float", "for", "goto", "if", "implements", "import", "instanceof", "int", "interface", "long", "native", "new", "null", "package", "private", "protected", "public", "return", "short", "static", "strictfp", "super", "switch", "this", "throw", "throws", "transient", "try", "void", "volatile", "while"],
    operator : global.Highlighter.copyShallow(Language.defaults.operator, [])
  };

  Language.c = {
    comment : Language.defaults.comment,
    quote : Language.defaults.quote,
    escape : Language.defaults.escape,
    keyword : ["auto", "break", "case", "char", "const", "continue", "default", "do", "double", "else", "enum", "extern", "float", "for", "goto", "if", "int", "long", "register", "return", "short", "signed", "sizeof", "static", "struct", "switch", "typedef", "union", "unsigned", "void", "volatile", "wchar_t", "while"],
    operator : global.Highlighter.copyShallow(Language.defaults.operator, [])
  };

  Language.php = {
    comment : Language.defaults.comment,
    quote : Language.defaults.quote,
    escape : Language.defaults.escape,
    keyword : ["abstract", "array", "as", "bool", "boolean", "break", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "define", "do", "echo", "else", "elseif", "empty", "exit", "extends", "final", "for", "foreach", "function", "if", "implements", "include", "include_once", "int", "interface", "isset", "list", "new", "null", "object", "print", "private", "protected", "public", "require", "require_once", "return", "static", "string", "switch", "throw", "try", "unset", "while"],
    operator : global.Highlighter.copyShallow(Language.defaults.operator, [])
  };

  Language.js = {
    comment : Language.defaults.comment,
    quote : Language.defaults.quote,
    escape : Language.defaults.escape,
    keyword : ["Array", "Boolean", "break", "case", "catch", "continue", "Date", "delete", "do", "else", "Error", "false", "for", "Function", "function", "if", "in", "Infinity", "Math", "NaN", "new", "null", "Number", "Object", "RegExp", "return", "String", "switch", "this", "throw", "true", "try", "undefined", "var", "while"],
    operator : global.Highlighter.copyShallow(Language.defaults.operator, [])
  };
    
  Language.python = {
    comment : {
      single : "#",
      multi : ["\"\"", "\"\""]
    },
    quote : Language.defaults.quote,
    escape : Language.defaults.escape,
    keyword : ["and", "as", "assert", "break", "class", "continue", "def", "del", "elif", "else", "except", "exec", "False", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "None", "not", "or", "pass", "print", "raise", "return", "True", "try", "while", "with", "yield"],
    operator : global.Highlighter.copyShallow(Language.defaults.operator, [])
  };

  Language.vb = {
    comment : {
      single : "'"
    },
    quote : ["\""],
    keyword : ["AddHandler", "AddressOf", "Alias", "And", "AndAlso", "As", "Boolean", "ByRef", "Byte", "ByVal", "Call", "Case", "Catch", "CBool", "CByte", "CChar", "CDate", "CDec", "CDbl", "Char", "CInt", "Class", "CLng", "CObj", "Const", "Continue", "CSByte", "CShort", "CSng", "CStr", "CType", "CUInt", "CULong", "CUShort", "Date", "Decimal", "Declare", "Default", "Delegate", "Dim", "DirectCast", "Do", "Double", "Each", "Else", "ElseIf", "End", "Enum", "Erase", "Error", "Event", "Exit", "False", "Finally", "For", "Friend", "Function", "Get", "GetType", "Global", "GoTo", "Handles", "If", "Implements", "Imports", "In", "Inherits", "Integer", "Interface", "Is", "IsNot", "Lib", "Like", "Long", "Loop", "Me", "Mod", "Module", "MustInherit", "MustOverride", "MyBase", "MyClass", "Namespace", "Narrowing", "New", "Next", "Not", "Nothing", "NotInheritable", "NotOverridable", "Object", "Of", "On", "Operator", "Option", "Optional", "Or", "OrElse", "Overloads", "Overridable", "Overrides", "ParamArray", "Partial", "Private", "Property", "Protected", "Public", "RaiseEvent", "ReadOnly", "ReDim", "REM", "RemoveHandler", "Resume", "Return", "SByte", "Select", "Set", "Shadows", "Shared", "Short", "Single", "Static", "Step", "Stop", "String", "Structure", "Sub", "SyncLock", "Then", "Throw", "To", "True", "Try", "TryCast", "TypeOf", "UInteger", "ULong", "Until", "UShort", "Using", "When", "While", "Widening", "With", "WithEvents", "WriteOnly", "Xor"],
    escape : "\\",
    operator : global.Highlighter.copyShallow(Language.defaults.operator, [])
  };

  Language.html = {
    comment : {
      multi : ["<!--", "-->"]
    },
    quote : ["\"", "'"],
    keyword : [],
    escape : Language.defaults.escape,
    operator : []
  };

  Language.css = {
    comment : Language.defaults.comment,
    escape : Language.defaults.escape,
    quote : Language.defaults.quote,
    keyword : ["color", "background-color", "border", "margin", "padding", "text-decoration"],
    operator : global.Highlighter.copyShallow(Language.defaults.operator, [])
  };

}(this));