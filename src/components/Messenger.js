"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Messenger = (function (_super) {
    __extends(Messenger, _super);
    function Messenger() {
        _super.apply(this, arguments);
    }
    Messenger.prototype.render = function () {
        return (React.createElement("div", null,
            "\"Hello from the Messenger class, \" + ",
            this.props.name));
    };
    return Messenger;
}(React.Component));
exports.Messenger = Messenger;
// delete this this
