import {
  Container,
  Button,
  Tabs,
} from 'tmhub-design-system-react';

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
      <Tabs.Root value="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">
            Tab #1
          </Tabs.Trigger>
          <Tabs.Trigger value="tab2">
            Tab #2
          </Tabs.Trigger>
          <Tabs.Trigger value="tab3">
            Tab #3
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          Content #1
        </Tabs.Content>
        <Tabs.Content value="tab2">
          Content #2
        </Tabs.Content>
        <Tabs.Content value="tab3">
          Content #3
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  );
}
