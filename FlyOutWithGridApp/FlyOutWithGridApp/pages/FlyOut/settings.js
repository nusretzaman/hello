(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("/pages/FlyOut/settings.html", {
        ready: function (element, options) {
            document.getElementById("formatTextButton").addEventListener(
                "click", showFormatTextFlyout, false);
            document.getElementById("textColor").addEventListener(
                "change", changeColor, false);
            document.getElementById("textSize").addEventListener(
                "change", changeSize, false);
        }
    });

    // Show the flyout
    function showFormatTextFlyout() {
        var formatTextButton = document.getElementById("formatTextButton");
        document.getElementById("formatTextFlyout").winControl.show(formatTextButton);
    }

    // Change the text color
    function changeColor() {
        document.getElementById("outputText").style.color = document.getElementById(
            "textColor").value;
    }

    // Change the text size
    function changeSize() {
        document.getElementById("outputText").style.fontSize = document.getElementById(
        "textSize").value + "pt";
    }

    function checkControl() {
        var dummyControl = document.getElementById("dummy").winControl;
        dummyControl.setMessage("It works!");
    }

  
})();

WinJS.Namespace.define("Test", {
    CustomControl: WinJS.Class.define(
        function (element, options) {
            // constructor
            this.element = element;
            this.options = options;
            this.init();
        }, {
            // instance members
            init: function () {
                this.h1 = document.createElement("h1");
                this.h1.innerText = this.options.message || "Hello world";
                this.element.appendChild(this.h1);
            },

            setMessage: function (message) {
                this.h1.innerText = message;
            }
        }, {
            // static members
        })
}
);