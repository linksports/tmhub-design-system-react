import { StoryFn, Meta } from "@storybook/react";
import SegmentedControl from "./SegmentedControl";

const meta: Meta<typeof SegmentedControl.Root> = {
  component: SegmentedControl.Root,
  title: "Components/SegmentedControl",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onValueChange: {
      action: "onValueChange",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
  },
};
export default meta;

const Template: StoryFn<typeof SegmentedControl.Root> = (args) => (
  <SegmentedControl.Root {...args}>
    <SegmentedControl.List>
      <SegmentedControl.Trigger value="tab1">Tab #1</SegmentedControl.Trigger>
      <SegmentedControl.Trigger value="tab2">Tab #2</SegmentedControl.Trigger>
      <SegmentedControl.Trigger value="tab3" disabled>
        Tab #3
      </SegmentedControl.Trigger>
      <SegmentedControl.Trigger value="tab4">Tab #4</SegmentedControl.Trigger>
    </SegmentedControl.List>
    <SegmentedControl.Content value="tab1">
      <h3>Tab #1</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </SegmentedControl.Content>
    <SegmentedControl.Content value="tab2">
      <h3>Tab #2</h3>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section
        1.10.32.
      </p>
    </SegmentedControl.Content>
    <SegmentedControl.Content value="tab3">
      <h3>Tab #3</h3>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus
        Bonorum et Malorum by Cicero are also reproduced in their exact original
        form, accompanied by English versions from the 1914 translation by H.
        Rackham.
      </p>
    </SegmentedControl.Content>
    <SegmentedControl.Content value="tab4">
      <h3>Tab #4</h3>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus
        Bonorum et Malorum by Cicero are also reproduced in their exact original
        form, accompanied by English versions from the 1914 translation by H.
        Rackham.
      </p>
    </SegmentedControl.Content>
  </SegmentedControl.Root>
);

export const Basic = Template.bind({});
Basic.args = {
  defaultValue: "tab1",
};
