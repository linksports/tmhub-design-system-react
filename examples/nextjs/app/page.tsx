import {
  Container,
  Button,
  Tabs,
  Icons,
  ColoredIcons,
  Chip,
  Text,
  ActionChip,
  Table,
  Heading,
  Label,
  SegmentedControl,
  TabBar,
} from "tmhub-design-system-react";

export default function Home() {
  return (
    <Container>
      <h2>Button</h2>
      <h3>Size</h3>
      <Button size="lg">Large</Button>
      <Button size="md">Medium</Button>
      <h3>Variant</h3>
      <Button variant="filled">Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
      <h2>Tabs</h2>
      <Tabs.Root defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab #1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab #2</Tabs.Trigger>
          <Tabs.Trigger value="tab3">Tab #3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content #1</Tabs.Content>
        <Tabs.Content value="tab2">Content #2</Tabs.Content>
        <Tabs.Content value="tab3">Content #3</Tabs.Content>
      </Tabs.Root>
      <h2>Icons</h2>
      <Icons.Iconography.Add size="lg" color="primary" />
      <Icons.SportIcons.Baseball size="md" color="alert" />
      <Icons.TeamnaviSportIcons.Tennis size="sm" color="hyperlinks" />
      <h2>ColoredIcons</h2>
      <ColoredIcons.Gift size="md" />
      <h2>Chip</h2>
      <h3>Not Filled</h3>
      <Chip type="gray" text="Gray" />
      <Chip type="blue" text="Blue" />
      <Chip type="orange" text="Orange" />
      <Chip type="green" text="Green" />
      <h3>Filled</h3>
      <Chip type="gray" text="Gray" filled />
      <Chip type="blue" text="Blue" filled />
      <Chip type="orange" text="Orange" filled />
      <Chip type="green" text="Green" filled />
      <h2>Text</h2>
      <Text
        fontSize="md"
        lineHeight="normal"
        fontWeight="regular"
        color="alert"
      >
        Sample Text
      </Text>
      <h2>ActionChip.FilterChip</h2>
      <ActionChip.FilterChip active={false} text="Sample Text" />
      <ActionChip.FilterChip
        active={true}
        text="Sample Text"
        Icon={<Icons.SportIcons.Baseball size="xs" />}
      />

      <h2>ActionChip.SuggestionChip</h2>
      <ActionChip.SuggestionChip type="blue" text="Sample Text" />
      <ActionChip.SuggestionChip
        type="orange"
        text="Sample Text"
        Icon={<ColoredIcons.Gift size="md" />}
      />
      <h2>Table</h2>
      <Table
        rows={[
          { name: "TestName1", age: 20 },
          { name: "TestName2", age: 25 },
        ]}
        columns={[
          { key: "name", headerName: "Name" },
          { key: "age", headerName: "Age" },
        ]}
      />
      <h2>Heading</h2>
      <Heading level="lg" color="primary">
        Sample Heading
      </Heading>
      <h2>Label</h2>
      <Label text="Sample Label" />
      <Label text="Sample Label" type="cyan" />
      <Label text="Sample Label" type="orange" />
      <Label text="Sample Label" type="gray" />
      <Label text="Sample Label" type="pink" />
      <h3>Bold Label</h3>
      <Label bold text="Sample Label" />
      <Label bold text="Sample Label" type="cyan" />
      <Label bold text="Sample Label" type="orange" />
      <Label bold text="Sample Label" type="gray" />
      <Label bold text="Sample Label" type="pink" />
      <h2>SegmentedControl</h2>
      <SegmentedControl.Root defaultValue="tab1">
        <SegmentedControl.List>
          <SegmentedControl.Trigger value="tab1">
            Tab #1
          </SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="tab2">
            Tab #2
          </SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="tab3" disabled>
            Tab #3(disabled)
          </SegmentedControl.Trigger>
          <SegmentedControl.Trigger value="tab4">
            Tab #4
          </SegmentedControl.Trigger>
        </SegmentedControl.List>
        <SegmentedControl.Content value="tab1">
          Content #1
        </SegmentedControl.Content>
        <SegmentedControl.Content value="tab2">
          Content #2
        </SegmentedControl.Content>
        <SegmentedControl.Content value="tab3">
          Content #3
        </SegmentedControl.Content>
        <SegmentedControl.Content value="tab4">
          Content #4
        </SegmentedControl.Content>
      </SegmentedControl.Root>
      <h2>TabBar</h2>
      <TabBar.Root defaultValue="tab1">
        <TabBar.List bordered size="small">
          <TabBar.Trigger value="tab1">Tab #1</TabBar.Trigger>
          <TabBar.Trigger value="tab2">Tab #2</TabBar.Trigger>
          <TabBar.Trigger value="tab3" disabled>
            Tab #3(disabled)
          </TabBar.Trigger>
          <TabBar.Trigger value="tab4">Tab #4</TabBar.Trigger>
        </TabBar.List>
        <TabBar.Content value="tab1">Content #1</TabBar.Content>
        <TabBar.Content value="tab2">Content #2</TabBar.Content>
        <TabBar.Content value="tab3">Content #3</TabBar.Content>
        <TabBar.Content value="tab4">Content #4</TabBar.Content>
      </TabBar.Root>
    </Container>
  );
}
