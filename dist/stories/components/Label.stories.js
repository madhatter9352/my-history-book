"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Label_1 = require("../../components/Label");
exports.default = {
    title: 'UI/Label',
    componet: Label_1.Label,
    argTypes: {
        size: {
            options: ['normal', 'h1', 'h2', 'h3'],
            control: { type: 'radio' }
        },
        fontColor: {
            control: { type: 'color' }
        }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(Label_1.Label, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Basic Label',
    allCaps: false,
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'All Caps',
    size: "normal",
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Secondary Label',
    size: "normal",
    color: "secondary",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: 'Tertiary Label',
    size: "normal",
    color: "tertiary",
};
exports.customFontColor = Template.bind({});
exports.customFontColor.args = {
    label: 'Custom Font Color',
    fontColor: '#ff0000',
    size: "h1"
};
