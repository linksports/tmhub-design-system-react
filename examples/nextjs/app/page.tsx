import {
  Container,
  Button,
  Tabs,
  Icons,
  ColoredIcons,
  Chip,
  Text,
  ActionChip,
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
      <Chip type="gray">Gray</Chip>
      <Chip type="blue">Blue</Chip>
      <Chip type="orange">Orange</Chip>
      <Chip type="green">Green</Chip>
      <h3>Filled</h3>
      <Chip type="gray" filled={true}>
        Gray
      </Chip>
      <Chip type="blue" filled={true}>
        Blue
      </Chip>
      <Chip type="orange" filled={true}>
        Orange
      </Chip>
      <Chip type="green" filled={true}>
        Green
      </Chip>
      <h2>Text</h2>
      <Text fontSize="M" lineHeight="Normal" fontWeight="Regular" color="alert">
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
    </Container>
  );
}
