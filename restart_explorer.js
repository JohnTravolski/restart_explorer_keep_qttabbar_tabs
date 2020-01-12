var qs = new ActiveXObject( "QTTabBarLib.Scripting" );
var wnd = qs.ActiveWindow;
var tab = wnd.ActiveTab;
var alltabs = wnd.AllTabs;

var str = "";
var paths = []
for(var ii = 0; ii < alltabs.Count; ii++)
{
  paths.push(alltabs.Item(ii).path);
  str += '"'
  str += alltabs.Item(ii).path;
  str += '"'
  if(ii != alltabs.Count - 1)
  {
    // str += "\r\n";
    str += "~"
  }
}

var objShell = new ActiveXObject("WScript.shell");
objShell.run('"QTTabBar_Refresher.bat" ' + str);

