"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var react_router_1 = require("react-router");
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super.apply(this, arguments) || this;
    }
    HomePage.prototype.render = function () {
        return (React.createElement("div", { className: "jumbotron" },
            React.createElement("h1", null, "Pluralsight Admin"),
            React.createElement(react_router_1.Link, { to: "about", className: "btn btn-primary" }),
            "div>" + " " + ")" + " " + "}" + " " + "}"));
    };
    return HomePage;
}(React.Component));
//# sourceMappingURL=HomePage.js.map