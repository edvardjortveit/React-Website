import { AppShell, Title, Text } from "@mantine/core";
import { HEADER_STYLE, HEADER_CONTAINER_STYLE } from "../constants";

export default function Header() {
  return (
    <AppShell.Header p="md" style={HEADER_STYLE}>
      <div style={HEADER_CONTAINER_STYLE}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Title order={2} c="black" style={{ margin: 0 }}>
            🌍 Reisebois
          </Title>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Text size="sm" c="dimmed">
            Din guide til backpacking
          </Text>
        </div>
      </div>
    </AppShell.Header>
  );
}
