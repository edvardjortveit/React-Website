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
  Text,
  rem,
  Title,
  BackgroundImage,
  Divider,
  Blockquote,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
  IconBackpack,
  IconPlane,
  IconUserScan,
  IconGlobeFilled,
  IconHome,
  IconCalendarEvent,
} from "@tabler/icons-react";
import Pakkeliste from "./pakkeliste.tsx";
import Folka from "./folka.tsx";
import Før from "./før-du-reiser.tsx";
import Mens from "./mens-du-reiser.tsx";

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
  "Russland",
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

  const handleCountryClick = (country: any) => {
    console.log(`Navigating to ${country}`);
    // You can add actual navigation logic here, like using React Router or another method.
  };

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 320 }}
        navbar={{
          width: 200,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
      >
        <AppShell.Header>
          <BackgroundImage src="images/background3.jpeg" h={320}>
            {/* <Title order={1}>Reisebois</Title> */}
          </BackgroundImage>
        </AppShell.Header>

        <AppShell.Navbar p="md" withBorder>
          <Title order={3} c="green">
            Destinasjoner{" "}
          </Title>
          <Divider my="md" />

          <Accordion defaultValue="asia">
            <Accordion.Item value="asia">
              <Accordion.Control>Asia</Accordion.Control>
              <Accordion.Panel>
                {countries.slice(0, 12).map((country) => (
                  <Button color="green" key={country} fullWidth variant="subtle">
                    {country}
                  </Button>
                ))}
              </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="oceania">
              <Accordion.Control>Oceania</Accordion.Control>
              <Accordion.Panel>
                {countries.slice(12).map((country) => (
                  <Button color="green" key={country} fullWidth variant="subtle">
                    {country}
                  </Button>
                ))}
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </AppShell.Navbar>

        <AppShell.Main>
          <Tabs radius="md" color="green" defaultValue="hjem">
            <Tabs.List justify="center">
              <Tabs.Tab value="hjem" leftSection={<IconHome style={iconStyle} />}>
                Hjem
              </Tabs.Tab>
              <Tabs.Tab
                value="før"
                leftSection={<IconCalendarEvent style={iconStyle} />}
              >
                Før du reiser
              </Tabs.Tab>
              <Tabs.Tab value="mens" leftSection={<IconPlane style={iconStyle} />}>
                Mens du reiser
              </Tabs.Tab>
              <Tabs.Tab
                value="pakkeliste"
                leftSection={<IconBackpack style={iconStyle} />}
              >
                Pakkeliste
              </Tabs.Tab>
              <Tabs.Tab value="plan" leftSection={<IconGlobeFilled style={iconStyle} />}>
                Reiseplanlegger
              </Tabs.Tab>
              <Tabs.Tab value="folka" leftSection={<IconUserScan style={iconStyle} />}>
                Hvem er vi?
              </Tabs.Tab>
              {/* <Tabs.Tab value="hjem" leftSection={<IconHome style={iconStyle} />}>
                Land
              </Tabs.Tab> */}
            </Tabs.List>

            <Tabs.Panel value="hjem">
              <Title order={1}>Velkommen!</Title>
              <Text>WHat is up</Text>
              <Blockquote
                color="green"
                cite="– Leo fra Hvite Gutter"
                mt="xl"
                style={{
                  maxWidth: "600px", // Restricts the maximum width
                  margin: "0 auto", // Centers it horizontally
                }}
              >
                Hva er det de har vært på? De har vært på sånn... Sånn greie... Når du er
                rik, og så later du som du er fattig... Backpacking? Backpacking.
              </Blockquote>

              <Divider my="md" />
            </Tabs.Panel>
            <Tabs.Panel value="pakkeliste">
              <Pakkeliste />
            </Tabs.Panel>
            <Tabs.Panel value="folka">
              <Space h="xl"></Space>
              <Folka />
            </Tabs.Panel>
            <Tabs.Panel value="før">
              <Før />
            </Tabs.Panel>
            <Tabs.Panel value="mens">
              <Mens />
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
