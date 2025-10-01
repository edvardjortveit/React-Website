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
  Paper,
  ScrollArea,
  SimpleGrid,
  Badge,
  Divider,
  Center,
  ActionIcon
} from "@mantine/core";
import { useEffect, useState } from "react";
import { 
  IconMapPin, 
  IconCurrency, 
  IconLanguage, 
  IconPlane, 
  IconCalendar,
  IconArrowLeft,
  IconHome,
  IconChevronLeft,
  IconChevronRight,
  IconX
} from "@tabler/icons-react";

interface CountryTemplateProps {
  country: string;
  onBack: () => void;
}

interface CountryData {
  name: string;
  capital: string;
  population: string;
  currency: string;
  language: string;
  description: string;
  heroImage: string;
  cities: string[];
  images: string[];
  highlights: string[];
  tips: string[];
  bestTime: string;
  budget: string;
}

export default function CountryTemplate({ country, onBack }: CountryTemplateProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

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

  // Country data template - easily expandable
  const countryData: Record<string, CountryData> = {
    "Kina": {
      name: "Kina",
      capital: "Beijing",
      population: "1.4 milliarder",
      currency: "Yuan (CNY)",
      language: "Mandarin",
      description: "Kina er et enormt land med rik historie, fantastisk mat og imponerende landskap. Fra de store byene som Beijing og Shanghai til de små landsbyene i fjellene - Kina har noe for alle.",
      heroImage: "images/background3.jpeg",
      cities: ["Beijing", "Shanghai", "Xi'an", "Guilin", "Chengdu", "Hangzhou", "Suzhou"],
      images: [
        "images/background3.jpeg",
        "images/background2.png", 
        "images/background4.jpeg",
        "images/pakking.png"
      ],
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
      budget: "Moderat - 300-500 NOK per dag"
    }
  };

  const data = countryData[country];

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

  const nextImage = () => {
    setSelectedImageIndex(prev => 
      prev === null ? 0 : (prev + 1) % data.images.length
    );
  };

  const prevImage = () => {
    setSelectedImageIndex(prev => 
      prev === null ? data.images.length - 1 : (prev - 1 + data.images.length) % data.images.length
    );
  };

  return (
    <Box>
      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <Box
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.9)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ActionIcon
            onClick={() => setSelectedImageIndex(null)}
            style={{
              position: 'absolute',
              top: 20,
              right: 20,
              zIndex: 2001
            }}
            size="lg"
            variant="filled"
            color="dark"
          >
            <IconX size={20} />
          </ActionIcon>
          
          <ActionIcon
            onClick={prevImage}
            style={{
              position: 'absolute',
              left: 20,
              zIndex: 2001
            }}
            size="lg"
            variant="filled"
            color="dark"
          >
            <IconChevronLeft size={20} />
          </ActionIcon>
          
          <ActionIcon
            onClick={nextImage}
            style={{
              position: 'absolute',
              right: 20,
              zIndex: 2001
            }}
            size="lg"
            variant="filled"
            color="dark"
          >
            <IconChevronRight size={20} />
          </ActionIcon>

          <Image
            src={data.images[selectedImageIndex]}
            alt={`${data.name} image ${selectedImageIndex + 1}`}
            style={{
              maxWidth: '90%',
              maxHeight: '90%',
              objectFit: 'contain'
            }}
          />
        </Box>
      )}

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
          display: 'none'
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

        {/* Hero Section with Country Image and Title */}
        <Box mb="xl" style={{ position: 'relative' }}>
          <Image
            src={data.heroImage}
            alt={`${data.name} landscape`}
            height={300}
            radius="md"
            style={{ objectFit: 'cover' }}
          />
          <Box
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              padding: '40px 20px 20px 20px',
              borderRadius: '0 0 8px 8px'
            }}
          >
            <Group justify="space-between" align="flex-end">
              <div>
                <Title order={1} c="white" mb="xs">
                  {data.name}
                </Title>
                <Text size="lg" c="white" style={{ opacity: 0.9 }}>
                  {data.description}
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
        </Box>

        {/* Travel Route Section */}
        <Card withBorder p="xl" mb="xl">
          <Title order={2} mb="md" c="green">
            🗺️ Min reiserute
          </Title>
          <Text size="sm" c="dimmed" mb="md">
            Byene jeg besøkte i {data.name}:
          </Text>
          <Group gap="sm">
            {data.cities.map((city, index) => (
              <Badge
                key={city}
                size="lg"
                variant="light"
                color="green"
                leftSection={<IconMapPin size={14} />}
              >
                {city}
              </Badge>
            ))}
          </Group>
        </Card>

        {/* Photo Album Section */}
        <Card withBorder p="xl" mb="xl">
          <Title order={2} mb="md" c="green">
            📸 Fotoalbum
          </Title>
          <Text size="sm" c="dimmed" mb="md">
            Klikk på et bilde for å se det i full størrelse
          </Text>
          <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="md">
            {data.images.map((image, index) => (
              <Box
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                style={{
                  cursor: 'pointer',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.2s',
                  border: '2px solid transparent'
                }}
                className="image-thumbnail"
              >
                <Image
                  src={image}
                  alt={`${data.name} photo ${index + 1}`}
                  height={150}
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Card>

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
      </Container>
    </Box>
  );
}
