
(function () {
 

    var ls=function(src, location,callback)
    {
      if (window.location.href.split(location).length > 1 && (location != "" || window.top == window.self))
        {   
            var script=document.createElement('script');
            script.type = 'text/javascript';
            script.onload=function()
            {
            if(callback)
            {
                callback();
            }
            }
            script.src="chrome-extension://cchkipmfgpadgadjmaclbkhkodnljjkf/js/"+src;
            document.head.appendChild(script);
        }
    }
    ls("jquery.js", "",
        function()
        {
            ls("auto.js", "");
            ls("openproject.js", "openproject.fingent.net");
            ls("stackoverflow.js", "stackoverflow");
            ls("applyjob.js", "");
            ls("manorama.js", "manoramanews.com");
            ls("manorama.js", "imasdk.googleapis.com");
            ls("monstergulf.js", "monstergulf.com");
            ls("recaptcha.js", "google.com");
            ls("naukri.js", "naukri.com");
            ls("indeed.js", "indeed");
            ls("truecaller.js", "truecaller");
          ls("youtube.js", "youtube.com");
        });
    
    
})();
