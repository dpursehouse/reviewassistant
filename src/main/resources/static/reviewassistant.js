Gerrit.install(function(self) {
    function print (c, r) {
        var url = "changes/" + c._number + "/revisions/" + r._number + "/ReviewAssistant~advice";
        console.log("Url is: " + url);
        var change_plugins = document.getElementById('change_plugins');
        console.log("Asking for advice...");
        Gerrit.get(
            url,
            function (r) {
                console.log("Got advice: " + r);
                change_plugins.innerHTML = r;
            });
    }
    self.on('showchange', print);
});