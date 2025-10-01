import { AppShell, BackgroundImage, Tabs, Title, Text, Divider, Blockquote, Space } from "@mantine/core";
import {
  IconBackpack,
  IconPlane,
  IconUserScan,
  IconGlobeFilled,
  IconHome,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { ICON_STYLE, BACKGROUND_IMAGE_STYLE, MAIN_STYLE, CONTENT_CONTAINER_STYLE } from "../constants";
import { Pakkeliste, Folka, Før, Mens, CountryTemplate } from "../pages";

interface MainContentProps {
  selectedCountry: string | null;
  onCountryClick: (country: string) => void;
}

export default function MainContent({ selectedCountry, onCountryClick }: MainContentProps) {
  const handleBackToHome = () => {
    onCountryClick(''); // Clear selection by passing empty string
  };

  // If a country is selected, show the country detail page
  if (selectedCountry) {
    return (
      <AppShell.Main style={MAIN_STYLE}>
        <CountryTemplate country={selectedCountry} onBack={handleBackToHome} />
      </AppShell.Main>
    );
  }
  return (
    <AppShell.Main style={MAIN_STYLE}>
      <BackgroundImage 
        src="images/background3.jpeg" 
        h={320} 
        style={BACKGROUND_IMAGE_STYLE}
      >
        {/* <Title order={1}>Reisebois</Title> */}
      </BackgroundImage>
      
      <div style={CONTENT_CONTAINER_STYLE}>
        <Tabs radius="md" color="green" defaultValue="hjem">
          <Tabs.List justify="center">
            <Tabs.Tab value="hjem" leftSection={<IconHome style={ICON_STYLE} />}>
              Hjem
            </Tabs.Tab>
            <Tabs.Tab
              value="før"
              leftSection={<IconCalendarEvent style={ICON_STYLE} />}
            >
              Før du reiser
            </Tabs.Tab>
            <Tabs.Tab value="mens" leftSection={<IconPlane style={ICON_STYLE} />}>
              Mens du reiser
            </Tabs.Tab>
            <Tabs.Tab
              value="pakkeliste"
              leftSection={<IconBackpack style={ICON_STYLE} />}
            >
              Pakkeliste
            </Tabs.Tab>
            <Tabs.Tab value="plan" leftSection={<IconGlobeFilled style={ICON_STYLE} />}>
              Reiseplanlegger
            </Tabs.Tab>
            <Tabs.Tab value="folka" leftSection={<IconUserScan style={ICON_STYLE} />}>
              Hvem er vi?
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="hjem">
            <Title order={1}>Velkommen!</Title>
            <Text>What is up</Text>
            <Blockquote
              color="green"
              cite="– Leo fra Hvite Gutter"
              mt="xl"
              style={{
                maxWidth: "600px",
                margin: "0 auto",
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
            <Space h="xl" />
            <Folka />
          </Tabs.Panel>
          
          <Tabs.Panel value="før">
            <Før />
          </Tabs.Panel>
          
          <Tabs.Panel value="mens">
            <Mens />
          </Tabs.Panel>
        </Tabs>
      </div>
    </AppShell.Main>
  );
}
