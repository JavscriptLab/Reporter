chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('app.html', {
        resizable:true,
        alwaysOnTop:true,
        frame: "none",
      'outerBounds': {
        'width': 300,
        'height': 500
      }
    }
    ,function(win) {
        win.outerBounds.setPosition(
           screen.availWidth - win.outerBounds.width, // left
          screen.availHeight - win.outerBounds.height // top
        );}
       );
  });