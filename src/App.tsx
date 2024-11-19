import "./App.css";
import "@mantine/core/styles.css";
import {
  MantineProvider,
  AppShell,
  MantineColorsTuple,
  Button,
  Accordion,
  createTheme,
  Tabs,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconQuestionMark,
  IconUsersGroup,
  IconCameraQuestion,
  IconUserScan,
  IconGlobeFilled,
} from "@tabler/icons-react";

const countries = [
  "Kina",
  "Japan",
  "Malaysia",
  "Sør-Korea",
  "Laos",
  "Thailand",
  "Vietnam",
  "Myanmar",
  "Singapore",
  "India",
  "Filippinene",
  "Australia",
  "New Zealand",
];

const iconStyle = { width: rem(25), height: rem(25) };

const myColor: MantineColorsTuple = [
  "#e6ffeb",
  "#d3f9da",
  "#a8f2b6",
  "#7aea8f",
  "#53e36d",
  "#3bdf58",
  "#2bdd4c",
  "#1bc43d",
  "#0dae33",
  "#009727",
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  // const handleCountryClick = (country: any) => {
  //   console.log(`Navigating to ${country}`);
  //   // You can add actual navigation logic here, like using React Router or another method.
  // };

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 100 }}
        navbar={{
          width: 200,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header>
          <h1 style={{ margin: 0 }}>Reisebois</h1>
        </AppShell.Header>

        <AppShell.Navbar p="md" withBorder>
          <Accordion defaultValue="asia">
            <Accordion.Item value="asia">
              <Accordion.Control>Asia</Accordion.Control>
              <Accordion.Panel>
                {countries.slice(0, 11).map((country) => (
                  <Button color="green" key={country} fullWidth variant="subtle">
                    {country}
                  </Button>
                ))}
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="oceania">
              <Accordion.Control>Oceania</Accordion.Control>
              <Accordion.Panel>
                {countries.slice(11).map((country) => (
                  <Button color="green" key={country} fullWidth variant="subtle">
                    {country}
                  </Button>
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </AppShell.Navbar>

        <AppShell.Main>
          <Tabs radius="sm" color="green" defaultValue="gallery" variant="pills">
            <Tabs.List>
              <Tabs.Tab
                value="hvorfor"
                leftSection={<IconQuestionMark style={iconStyle} />}
              >
                Hvorfor dra på backpacking?
              </Tabs.Tab>
              <Tabs.Tab value="hvem" leftSection={<IconUsersGroup style={iconStyle} />}>
                Hvem kan dra på backpacking?
              </Tabs.Tab>
              <Tabs.Tab
                value="hva"
                leftSection={<IconCameraQuestion style={iconStyle} />}
              >
                Hva bør du ta med?
              </Tabs.Tab>
              <Tabs.Tab value="vi" leftSection={<IconUserScan style={iconStyle} />}>
                Hvem er vi?
              </Tabs.Tab>
              <Tabs.Tab value="plan" leftSection={<IconGlobeFilled style={iconStyle} />}>
                Planlegg din tur
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery">
              <Tabs
                color="green"
                variant="pills"
                orientation="vertical"
                defaultValue="gallery"
              >
                <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

                <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

                <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
              </Tabs>
            </Tabs.Panel>
            <Tabs.Panel value="hvorfor">Hvorfor dra på reise</Tabs.Panel>
            <Tabs.Panel value="hva">
              <Tabs color="green" defaultValue="gallery" orientation="vertical">
                <Tabs.List>
                  <Tabs.Tab value="sekk">Sekk</Tabs.Tab>
                  <Tabs.Tab value="sko">Sko</Tabs.Tab>
                  <Tabs.Tab value="tech">Tech</Tabs.Tab>
                  <Tabs.Tab value="duppeditt">Duppeditter</Tabs.Tab>
                  <Tabs.Tab value="bad">Bad</Tabs.Tab>
                  <Tabs.Tab value="ekstra">Ekstra</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="sekk">Gallery tab content</Tabs.Panel>
                <Tabs.Panel value="sko">Messages tab content</Tabs.Panel>
                <Tabs.Panel value="tech">Settings tab content</Tabs.Panel>
                <Tabs.Panel value="duppeditt">Gallery tab content</Tabs.Panel>
                <Tabs.Panel value="bad">Messages tab content</Tabs.Panel>
                <Tabs.Panel value="ekstra">Settings tab content</Tabs.Panel>
              </Tabs>
            </Tabs.Panel>
            <Tabs.Panel value="vi">
              <Tabs color="green" defaultValue="gallery" orientation="vertical">
                <Tabs.List>
                  <Tabs.Tab value="gallery">Edvard</Tabs.Tab>
                  <Tabs.Tab value="messages">Torbjørn</Tabs.Tab>
                  <Tabs.Tab value="settings">Henrik</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>
                <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>
                <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
              </Tabs>
            </Tabs.Panel>
          </Tabs>
        </AppShell.Main>
        {/* <AppShell.Footer>
          <div style={{ textAlign: "right" }}>
            © 2024 Reisebois. All rights reserved.
          </div>
        </AppShell.Footer> */}
      </AppShell>
    </MantineProvider>
  );
}
