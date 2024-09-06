import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { Button, MantineProvider, Stack, AppShell, Burger } from "@mantine/core";
import { Header } from "./Header";
import { useDisclosure } from "@mantine/hooks";

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider defaultColorScheme="light" theme={{ primaryColor: "dark" }}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm"></Burger>
          <div>Reisebois</div>
        </AppShell.Header>
        <AppShell.Navbar p="md">Countries</AppShell.Navbar>

        <AppShell.Main>Welcome</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
