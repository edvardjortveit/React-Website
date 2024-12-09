import "./App.css";
import "@mantine/core/styles.css";
import {
  MantineProvider,
  AppShell,
  MantineColorsTuple,
  Button,
  NavLink,
  Accordion,
  createTheme,
  Tabs,
  rem,
  Title,
  BackgroundImage,
  Divider,
  Paper,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PieChart } from "@mantine/charts";

import {
  IconBackpack,
  IconUsersGroup,
  IconPlane,
  IconUserScan,
  IconGlobeFilled,
  IconHome,
  IconMoneybag,
  IconCalendarEvent,
} from "@tabler/icons-react";
import Pakkeliste from "./pakkeliste.tsx";
import Folka from "./folka.tsx";

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

const spendingData = [
  { name: "USA", value: 400, color: "indigo.6" },
  { name: "India", value: 300, color: "yellow.6" },
  { name: "Japan", value: 300, color: "teal.6" },
  { name: "Other", value: 200, color: "gray.6" },
];

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  // const handleCountryClick = (country: any) => {
  //   console.log(`Navigating to ${country}`);
  //   // You can add actual navigation logic here, like using React Router or another method.
  // };

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
          <BackgroundImage src="images/background2.png" h={320}>
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
          <Tabs radius="sm" color="green" defaultValue="hjem" variant="pills">
            <Tabs.List>
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
                Pakkelise
              </Tabs.Tab>
              <Tabs.Tab value="plan" leftSection={<IconGlobeFilled style={iconStyle} />}>
                Reiseplanlegger
              </Tabs.Tab>
              <Tabs.Tab value="folka" leftSection={<IconUserScan style={iconStyle} />}>
                Hvem er vi?
              </Tabs.Tab>
            </Tabs.List>
            <Divider my="md" />
            <Tabs.Panel value="hjem">
              <Title order={1}>Velkommen!</Title>
              <Text>Jeg regner med at du har blitt sendt hit av Edvard.</Text>
              <Paper shadow="sm" p="xl">
                <Text>Paper is the most basic ui component</Text>
                <Text>
                  Use it to create cards, dropdowns, modals and other components that
                  require background with shadow
                </Text>
              </Paper>
              <Divider my="md" />

              <Paper shadow="sm" p="xl">
                <Text>Paper is the most basic ui component</Text>
                <Text>
                  Use it to create cards, dropdowns, modals and other components that
                  require background with shadow
                </Text>
              </Paper>
            </Tabs.Panel>
            <Tabs.Panel value="pakkeliste">
              <Pakkeliste />
            </Tabs.Panel>
            <Tabs.Panel value="folka">
              <Folka />
            </Tabs.Panel>
            <Tabs.Panel value="før">
              <NavLink
                href="#required-for-focus"
                label="Reisepartnere"
                description="Hvem skal du reise med?"
                leftSection={<IconUsersGroup size="2rem" stroke={1.5} />}
                childrenOffset={44}
                defaultOpened
                // active
              >
                <NavLink label="Reise med randoms" href="#required-for-focus" />
                <NavLink label="Reise med venner" href="#required-for-focus" />
                <NavLink label="Reise alene" href="#required-for-focus" />
              </NavLink>
              <Divider my="md" />

              <NavLink
                href="#required-for-focus"
                label="Økonomi"
                description="Hvordan får du mest verdi for pengene?"
                leftSection={<IconMoneybag size="2rem" stroke={1.5} />}
                childrenOffset={44}
                defaultOpened
              >
                <NavLink label="Hva bør jeg budsjettere?" href="#required-for-focus" />
                <NavLink label="Hvor går pengene hen?">
                  Hei
                  <PieChart
                    withLabelsLine
                    // labelsPosition="outside"
                    // labelsType="percent"
                    // withLabels
                    data={spendingData}
                  />
                </NavLink>
              </NavLink>
              <Divider my="md" />

              <NavLink
                href="#required-for-focus"
                label="Planlegging"
                description="Hvor mye av reisen bør du egentlig planlegge?"
                leftSection={<IconPlane size="2rem" stroke={1.5} />}
                childrenOffset={44}
                defaultOpened
              >
                <NavLink label="Reiserute" href="#required-for-focus" />
                <NavLink label="Flybilletter" href="#required-for-focus" />
                <NavLink label="Når på året bør du reise?" href="#required-for-focus" />
              </NavLink>
              <Divider my="md" />
            </Tabs.Panel>
            <Tabs.Panel value="mens">Hallai</Tabs.Panel>
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
