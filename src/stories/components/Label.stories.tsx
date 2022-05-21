import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "../../components/Label";

export default {
    title: 'UI/Label',
    componet: Label,
    argTypes: {
        size: {
            options: ['normal', 'h1', 'h2', 'h3'],
            control: { type: 'radio' }
        },
        fontColor: {
            control: { type: 'color' }
        }
    }
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label { ...args } />

export const Basic = Template.bind({})
Basic.args = {
    label: 'Basic Label',
    allCaps: false,
}

export const AllCaps = Template.bind({})
AllCaps.args = {
    label: 'All Caps',
    size: "normal",
    allCaps: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Secondary Label',
    size: "normal",
    color: "secondary",
}

export const Tertiary = Template.bind({})
Tertiary.args = {
    label: 'Tertiary Label',
    size: "normal",
    color: "tertiary",
}

export const customFontColor = Template.bind({})
customFontColor.args = {
    label: 'Custom Font Color',
    fontColor: '#ff0000',
    size: "h1"
}