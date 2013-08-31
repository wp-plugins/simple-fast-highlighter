=== Simple Fast Highlighter ===
Contributors: michielve
Tags: highlighter, code, sourcecode, syntax
Requires at least: 3.0.1
Tested up to: 3.6
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Fast syntax highlighter written in Javascript.

== Description ==

There are other syntax highlighter plugins, but I wanted something simple and fast and
I wanted to add the code classes from within the TinyMCE editor.

Instead of regular expressions, this plugin uses an iterator to walk through the source
code which makes it faster than other highlight scripts.

I added some default languages like Javascript, PHP, Python, C, C#, VB.NET but you can
easily add other ones.

== Installation ==

1. Upload the plugin to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Select the code inside a PRE tag. Then surround it with a CODE tag (with the `Code`
item in the list box) and then select the language.

== Changelog ==

= 0.8 =
* Plugin published.
