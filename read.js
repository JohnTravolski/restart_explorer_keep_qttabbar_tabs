var qs = new ActiveXObject( "QTTabBarLib.Scripting" );
var wnd = qs.ActiveWindow;
// qs.alert("run");

var fso = new ActiveXObject("Scripting.FileSystemObject");
var txtFile = fso.OpenTextFile("dirs.txt", 1, false, 0);
var fText = txtFile.ReadAll();
txtFile.Close();
// qs.alert(fText);
var arr = fText.split('~')

for(var ii = arr.length - 1; ii >= 0; ii--)
{
  var value = arr[ii].slice(1, -1);
  // qs.alert(arr[ii]);
  // qs.alert(value)
  var returned_tab = wnd.Insert(arr[ii], 0, 1, 1);
  if(returned_tab == null)
  {
    qs.open(arr[ii]);
  }
}

// close the "This PC" default tab that was opened
wnd.AllTabs.Item(wnd.AllTabs.Count - 1).Close()