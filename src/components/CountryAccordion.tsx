import { AppShell, Title, Divider, Accordion, Button } from "@mantine/core";
import { COUNTRIES } from "../constants";

interface CountryAccordionProps {
  onCountryClick: (country: string) => void;
}

export default function CountryAccordion({ onCountryClick }: CountryAccordionProps) {
  return (
    <AppShell.Navbar p="md" withBorder>
      <Title order={3} c="green">
        Destinasjoner
      </Title>
      <Divider my="md" />

      <Accordion multiple defaultValue={["asia", "oceania"]}>
        <Accordion.Item value="asia">
          <Accordion.Control>Asia</Accordion.Control>
          <Accordion.Panel>
            {COUNTRIES.slice(0, 12).map((country) => (
              <Button 
                color="green" 
                key={country} 
                fullWidth 
                variant="subtle"
                onClick={() => onCountryClick(country)}
              >
                {country}
              </Button>
            ))}
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="oceania">
          <Accordion.Control>Oceania</Accordion.Control>
          <Accordion.Panel>
            {COUNTRIES.slice(12).map((country) => (
              <Button 
                color="green" 
                key={country} 
                fullWidth 
                variant="subtle"
                onClick={() => onCountryClick(country)}
              >
                {country}
              </Button>
            ))}
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </AppShell.Navbar>
  );
}
