import { Divider, NavLink, Space, Title, Text } from "@mantine/core";
import {
  IconUsersGroup,
  IconMoneybag,
  IconPlane,
  IconTimeline,
  IconTimelineEventExclamation,
  IconHome,
  IconHospital,
  IconBuildingHospital,
  IconMan,
} from "@tabler/icons-react";

export default function Mens() {
  return (
    <>
      <Title order={1}>Mens du reiser</Title>
      <Space h="xl"></Space>
      <Text ta="left">
        Før du reiser er det flere ting du må tenke på. Å sette ut på en lenge reise uten
        å ha tenkt igjennom hvem du skal reise med, hvor pengene skal komme fra og hva
        selve reiseruten skal være kan være dumt.
      </Text>
      <Space h="xl"></Space>

      <NavLink
        href="#required-for-focus"
        label="Hvem møter man på backpacking?"
        description="Folka"
        leftSection={<IconMan size="2rem" stroke={1.5} />}
        childrenOffset={44}
        defaultOpened
      >
        <NavLink label="Nasjonaliteter" href="#randoms" />
        <NavLink label="Aldre" href="#friends" />
        <NavLink label="Typer mennesker" href="#solo" />
      </NavLink>
      <Divider my="md" />
      <NavLink
        href="#required-for-focus"
        label="Hostell eller hotell?"
        description="Fordeler og ulemper"
        leftSection={<IconHome size="2rem" stroke={1.5} />}
        childrenOffset={44}
        defaultOpened
      >
        <NavLink label="Hosteller" href="#randoms" />
        <NavLink label="Hoteller" href="#friends" />
        <NavLink label="AirBnB" href="#solo" />
      </NavLink>
      <Divider my="md" />

      <NavLink
        href="#required-for-focus"
        label="Hva gjør man på tur?"
        description="Så mye tid! Hva skal du bruke den på?"
        leftSection={<IconTimelineEventExclamation size="2rem" stroke={1.5} />}
        childrenOffset={44}
        defaultOpened
      >
        <NavLink label="Drive dank" href="#budget" />
        <NavLink label="Naturopplevelser" href="#expenses">
          <NavLink label="Museer"></NavLink>
          <NavLink label="Krigsminner"></NavLink>
          <NavLink label="Skuespill og konserter"></NavLink>
          <NavLink label="Sportsarrangementer"></NavLink>
          <NavLink label="Mat og drikke" href="#expenses"></NavLink>
        </NavLink>
        <NavLink label="Kulturopplevelser" href="#expenses">
          <NavLink label="Museer og Krigsminner"></NavLink>
          <NavLink label="Dark Tourism"></NavLink>
          <NavLink label="Skuespill og Konserter"></NavLink>
          <NavLink label="Sportsarrangementer"></NavLink>
        </NavLink>
        <NavLink label="Mat og drikke" href="#expenses"></NavLink>
      </NavLink>
      <Divider my="md" />

      <NavLink
        href="#required-for-focus"
        label="Risikoer"
        description="Vær forsiktig"
        leftSection={<IconBuildingHospital size="2rem" stroke={1.5} />}
        childrenOffset={44}
        defaultOpened
      >
        <NavLink label="Mat og drikke" href="#itinerary" />
        <NavLink label="Sykdom" href="#flights" />
        <NavLink label="Miste pass" href="#best-time" />
      </NavLink>
      <Divider my="md" />
    </>
  );
}
