import { Tabs, Blockquote } from "@mantine/core";

export default function Folka() {
  return (
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
  );
}
