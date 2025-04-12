import { Tabs, Blockquote, Divider } from "@mantine/core";
import { Timeline, Text } from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
  IconPlaneDeparture,
  IconSchool,
  IconCash,
} from "@tabler/icons-react";

export default function Folka() {
  return (
    <>
      <Timeline active={3} bulletSize={34} lineWidth={4} color="green">
        <Timeline.Item
          bullet={<IconPlaneDeparture size={12} />}
          title="Backpacking til Asia"
        >
          <Text c="dimmed" size="sm">
            Guttene satte ut på sin første ekspedisjon.
          </Text>
          <Text size="xs" mt={4}>
            Våren 2019
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconSchool size={12} />} title="Starter på studier">
          <Text c="dimmed" size="sm">
            Guttene startet sine studier på NTNU.
          </Text>
          <Text size="xs" mt={4}>
            Høsten 2019
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Backpacking til Asia 2.0 "
          bullet={<IconPlaneDeparture size={12} />}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            Guttene var ikke lei av Asia helt enda, så det ble en tur til.
          </Text>
          <Text size="xs" mt={4}>
            Våren 2023
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconSchool size={12} />} title="Fullfører studier">
          <Text c="dimmed" size="sm">
            Guttene prøver å fullføre studiene sine.
          </Text>
          <Text size="xs" mt={4}>
            Våren 2025
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Jobblivet" bullet={<IconCash size={12} />}>
          <Text c="dimmed" size="sm">
            Guttene må tjene til livets opphold.
          </Text>
          <Text size="xs" mt={4}>
            2025 til 2027
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Backpacking til Sør-Amerika"
          bullet={<IconPlaneDeparture size={12} />}
        >
          <Text c="dimmed" size="sm">
            Guttene trenger en pause mellom jobber.
          </Text>
          <Text size="xs" mt={4}>
            2027
          </Text>
        </Timeline.Item>
      </Timeline>

      <Divider my="md" />

      <Tabs color="green" defaultValue="gallery" orientation="vertical">
        <Tabs.List>
          <Tabs.Tab value="edvard">Edvard</Tabs.Tab>
          <Tabs.Tab value="torbjørn">Torbjørn</Tabs.Tab>
          <Tabs.Tab value="henrik">Henrik</Tabs.Tab>
          <Tabs.Tab value="markus">Markus</Tabs.Tab>
          <Tabs.Tab value="just">Just</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="edvard">
          {" "}
          <Blockquote
            color="green"
            cite="– Edvard Schwabe Jortveit"
            mt="xl"
            style={{
              maxWidth: "600px", // Restricts the maximum width
              margin: "0 auto", // Centers it horizontally
            }}
          >
            Røsk meg i balla og kall meg Truls.
          </Blockquote>
        </Tabs.Panel>
        <Tabs.Panel value="torbjørn">
          <Blockquote
            color="green"
            cite="– Torbjørn Smedshaug"
            mt="xl"
            style={{
              maxWidth: "600px", // Restricts the maximum width
              margin: "0 auto", // Centers it horizontally
            }}
          >
            Vi tar én øl, og så ser vi hva som skjer.
          </Blockquote>
        </Tabs.Panel>
        <Tabs.Panel value="henrik">
          {" "}
          <Blockquote
            color="green"
            cite="– Henrik Kavli"
            mt="xl"
            style={{
              maxWidth: "600px", // Restricts the maximum width
              margin: "0 auto", // Centers it horizontally
            }}
          >
            Hold kjeft din feite jævel! (Dytter Lars ut av heisen.)
          </Blockquote>
        </Tabs.Panel>
        <Tabs.Panel value="markus">
          {" "}
          <Blockquote
            color="green"
            cite="– Markus August Narum"
            mt="xl"
            style={{
              maxWidth: "600px", // Restricts the maximum width
              margin: "0 auto", // Centers it horizontally
            }}
          >
            Tar en tur til Thailand for å øve til eksamen, jeg!
          </Blockquote>
        </Tabs.Panel>
        <Tabs.Panel value="just">
          {" "}
          <Blockquote
            color="green"
            cite="– Just Broch"
            mt="xl"
            style={{
              maxWidth: "600px", // Restricts the maximum width
              margin: "0 auto", // Centers it horizontally
            }}
          >
            Perspektiver.
          </Blockquote>
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
