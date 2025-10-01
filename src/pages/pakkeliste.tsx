import { Divider, List, Tabs, Title, Image } from "@mantine/core";

export default function Pakkeliste() {
  return (
    <>
      <Title order={1} c="green">
        Vi tar et par grunnregler først!
      </Title>
      <List type="ordered">
        <List.Item>
          Det er ikke backpacking hvis du reiser med koffert. Det er udiskuterbart.
        </List.Item>
        <List.Item>
          Ikke pakk sekken helt full. Du må ha plass til nye klær og minner.
        </List.Item>
        <List.Item>
          Det er enkelte ting du kan kjøpe når du lander og ikke trenger å ta med selv.
        </List.Item>
      </List>
      <Divider my="md" />

      <Image radius="md" h={200} src="images/pakking.png" />
      <Divider my="md" />

      <Tabs color="green" defaultValue="ompakking" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="sekk">Sekk</Tabs.Tab>
          <Tabs.Tab value="sko">Sko</Tabs.Tab>
          <Tabs.Tab value="tech">Tech</Tabs.Tab>
          <Tabs.Tab value="duppeditt">Duppeditter</Tabs.Tab>
          <Tabs.Tab value="bad">Bad</Tabs.Tab>
          <Tabs.Tab value="ekstra">Ekstra</Tabs.Tab>
          <Tabs.Tab value="dokumenter">Dokumenter</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="sekk">
          {" "}
          <Title order={2} c="green">
            Her har du to valg, slik jeg ser det
          </Title>
        </Tabs.Panel>
        <Tabs.Panel value="sko">
          {" "}
          <Title order={2} c="green">
            Et par holder i massevis
          </Title>
        </Tabs.Panel>
        <Tabs.Panel value="tech">
          {" "}
          <Title order={2} c="green">
            Her har du to valg, slik jeg ser det
          </Title>
        </Tabs.Panel>
        <Tabs.Panel value="duppeditt">
          {" "}
          <Title order={2} c="green">
            Her har du to valg, slik jeg ser det
          </Title>
        </Tabs.Panel>
        <Tabs.Panel value="bad">
          {" "}
          <Title order={2} c="green">
            Her har du to valg, slik jeg ser det
          </Title>
        </Tabs.Panel>
        <Tabs.Panel value="ekstra">
          {" "}
          <Title order={2} c="green">
            Her har du to valg, slik jeg ser det
          </Title>
        </Tabs.Panel>
        <Tabs.Panel value="dokumenter">
          {" "}
          <Title order={2} c="green">
            Hvis teknologien svikter, kan det være greit med noen fysiske dokumenter
          </Title>
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
