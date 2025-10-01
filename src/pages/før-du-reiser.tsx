import { Divider, NavLink, Title, Text, Space } from "@mantine/core";
import { IconUsersGroup, IconMoneybag, IconPlane } from "@tabler/icons-react";

export default function Før() {
  return (
    <>
      <Title order={1}>Før du reiser</Title>
      <Space h="xl"></Space>
      <Text ta="left">
        Før du reiser er det flere ting du må tenke på. Å sette ut på en lenge reise uten
        å ha tenkt igjennom hvem du skal reise med, hvor pengene skal komme fra og hva
        selve reiseruten skal være kan være dumt.
      </Text>
      <Space h="xl"></Space>

      <NavLink
        href="#required-for-focus"
        label="Reisepartnere"
        description="Hvem skal du reise med?"
        leftSection={<IconUsersGroup size="2rem" stroke={1.5} />}
        childrenOffset={44}
        defaultOpened
      >
        <Title order={4}>Reise med venner</Title>
        <Space h="xl"></Space>
        <Text ta="left">
          Før du reiser er det flere ting du må tenke på. Å sette ut på en lenge reise
          uten å ha tenkt igjennom hvem du skal reise med, hvor pengene skal komme fra og
          hva selve reiseruten skal være kan være dumt.
        </Text>
        <Title order={4}>Reise med randoms</Title>
        <Space h="xl"></Space>
        <Text ta="left">
          Før du reiser er det flere ting du må tenke på. Å sette ut på en lenge reise
          uten å ha tenkt igjennom hvem du skal reise med, hvor pengene skal komme fra og
          hva selve reiseruten skal være kan være dumt.
        </Text>
        <Title order={4}>Reise alene</Title>
        <Space h="xl"></Space>
        <Text ta="left">
          Før du reiser er det flere ting du må tenke på. Å sette ut på en lenge reise
          uten å ha tenkt igjennom hvem du skal reise med, hvor pengene skal komme fra og
          hva selve reiseruten skal være kan være dumt.
        </Text>
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
        <NavLink label="Hva bør jeg budsjettere?" href="#budget" />
        <NavLink label="Hvor går pengene hen?" href="#expenses"></NavLink>
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
        <NavLink label="Reiserute" href="#itinerary" />
        <NavLink label="Flybilletter" href="#flights" />
        <NavLink label="Når på året bør du reise?" href="#best-time" />
      </NavLink>
      <Divider my="md" />
    </>
  );
}
