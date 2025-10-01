import { 
  Title, 
  Text, 
  Container, 
  Image, 
  Grid, 
  Card, 
  List, 
  ThemeIcon, 
  Stack,
  Button,
  Group,
  Breadcrumbs,
  Anchor,
  Box,
  Paper
} from "@mantine/core";
import { useEffect } from "react";
import { 
  IconMapPin, 
  IconCurrency, 
  IconLanguage, 
  IconPlane, 
  IconCalendar,
  IconArrowLeft,
  IconHome
} from "@tabler/icons-react";

interface CountryDetailProps {
  country: string;
  onBack: () => void;
}

export default function CountryDetail({ country, onBack }: CountryDetailProps) {
  // Add keyboard shortcut for back navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onBack();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  // Country data - in a real app, this would come from an API
  const countryData = {
    "Kina": {
      name: "Kina",
      capital: "Beijing",
      population: "1.4 milliarder",
      currency: "Yuan (CNY)",
      language: "Mandarin",
      description: "Kina er et enormt land med rik historie, fantastisk mat og imponerende landskap. Fra de store byene som Beijing og Shanghai til de små landsbyene i fjellene - Kina har noe for alle.",
      highlights: [
        "Den kinesiske mur - en av verdens syv underverker",
        "Forbidden City i Beijing",
        "Terracotta Army i Xi'an",
        "Shanghai's moderne skyline",
        "Guilin's karstfjell",
        "Pandas i Chengdu"
      ],
      tips: [
        "Lær noen grunnleggende mandarin-fraser",
        "Last ned WeChat for kommunikasjon",
        "Bruk Alipay eller WeChat Pay for betalinger",
        "Vær tålmodig med offentlig transport",
        "Prøv lokal mat - ikke bare i restauranter, men også gatemat"
      ],
      bestTime: "Høst (september-november) og vår (mars-mai)",
      budget: "Moderat - 300-500 NOK per dag",
      image: "images/background3.jpeg" // You can add specific country images later
    }
  };

  const data = countryData[country as keyof typeof countryData];

  if (!data) {
    return (
      <Container size="md" py="xl">
        <Title order={1}>Land ikke funnet</Title>
        <Text>Dette landet er ikke tilgjengelig ennå.</Text>
        <Button onClick={onBack} mt="md" leftSection={<IconArrowLeft size={16} />}>
          Tilbake
        </Button>
      </Container>
    );
  }

  return (
    <Box>
      {/* Floating Back Button for Mobile */}
      <Button
        onClick={onBack}
        variant="filled"
        color="green"
        leftSection={<IconArrowLeft size={16} />}
        size="md"
        style={{
          position: 'fixed',
          top: '100px',
          left: '20px',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          display: 'none' // Hidden by default, can be shown on mobile
        }}
        className="floating-back-btn"
      >
        Tilbake
      </Button>

      <Container size="lg" py="xl">
        {/* Breadcrumb Navigation */}
        <Paper p="md" mb="xl" withBorder radius="md" style={{ backgroundColor: '#f8f9fa' }}>
          <Breadcrumbs>
            <Anchor 
              onClick={onBack} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                textDecoration: 'none',
                color: '#2bdd4c',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <IconHome size={16} />
              Hjem
            </Anchor>
            <Text size="sm" c="dimmed">Destinasjoner</Text>
            <Text size="sm" c="dimmed">{data.name}</Text>
          </Breadcrumbs>
        </Paper>

      {/* Header with Back Button */}
      <Box mb="xl">
        <Group justify="space-between" align="flex-start" mb="md">
          <div style={{ flex: 1 }}>
            <Title order={1} c="green" mb="md">
              {data.name}
            </Title>
            <Text size="lg" c="dimmed" mb="xs">
              {data.description}
            </Text>
            <Text size="xs" c="dimmed" style={{ fontStyle: 'italic' }}>
              💡 Tips: Trykk Esc for å gå tilbake raskt
            </Text>
          </div>
          <Button 
            onClick={onBack} 
            variant="filled"
            color="green"
            leftSection={<IconArrowLeft size={16} />}
            size="md"
            style={{ 
              minWidth: '140px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
            title="Tilbake til hjemmesiden (eller trykk Esc)"
          >
            Tilbake
          </Button>
        </Group>
      </Box>

      <Stack gap="xl">

        <Grid>
          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="xl">
              <Card withBorder p="xl">
                <Title order={3} mb="md">Høydepunkter</Title>
                <List
                  spacing="sm"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="green" size={24} radius="xl">
                      <IconMapPin size="0.8rem" />
                    </ThemeIcon>
                  }
                >
                  {data.highlights.map((highlight, index) => (
                    <List.Item key={index}>{highlight}</List.Item>
                  ))}
                </List>
              </Card>

              <Card withBorder p="xl">
                <Title order={3} mb="md">Reisetips</Title>
                <List
                  spacing="sm"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="blue" size={24} radius="xl">
                      <IconPlane size="0.8rem" />
                    </ThemeIcon>
                  }
                >
                  {data.tips.map((tip, index) => (
                    <List.Item key={index}>{tip}</List.Item>
                  ))}
                </List>
              </Card>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Stack gap="md">
              <Card withBorder p="md">
                <Title order={4} mb="md">Grunnleggende info</Title>
                <Stack gap="sm">
                  <Group>
                    <ThemeIcon color="green" size="sm">
                      <IconMapPin size="0.8rem" />
                    </ThemeIcon>
                    <Text size="sm"><strong>Hovedstad:</strong> {data.capital}</Text>
                  </Group>
                  <Group>
                    <ThemeIcon color="blue" size="sm">
                      <IconLanguage size="0.8rem" />
                    </ThemeIcon>
                    <Text size="sm"><strong>Språk:</strong> {data.language}</Text>
                  </Group>
                  <Group>
                    <ThemeIcon color="yellow" size="sm">
                      <IconCurrency size="0.8rem" />
                    </ThemeIcon>
                    <Text size="sm"><strong>Valuta:</strong> {data.currency}</Text>
                  </Group>
                  <Group>
                    <ThemeIcon color="orange" size="sm">
                      <IconCalendar size="0.8rem" />
                    </ThemeIcon>
                    <Text size="sm"><strong>Beste tid:</strong> {data.bestTime}</Text>
                  </Group>
                </Stack>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="md">Budget</Title>
                <Text size="sm" c="dimmed">
                  {data.budget}
                </Text>
              </Card>

              <Card withBorder p="md">
                <Title order={4} mb="md">Befolkning</Title>
                <Text size="sm" c="dimmed">
                  {data.population}
                </Text>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>
      </Stack>
      </Container>
    </Box>
  );
}
