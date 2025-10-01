import "./styles/App.css";
import "@mantine/core/styles.css";
import { MantineProvider, AppShell, createTheme } from "@mantine/core";
import { useState } from "react";
import { MY_COLOR } from "./constants";
import { Header, CountryAccordion, MainContent } from "./components";

const theme = createTheme({
  colors: {
    myColor: MY_COLOR,
  },
});

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const handleCountryClick = (country: string) => {
    if (country === '') {
      setSelectedCountry(null);
    } else {
      console.log(`Selected country: ${country}`);
      setSelectedCountry(country);
    }
  };

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 80 }}
        navbar={{
          width: 200,
          breakpoint: "sm",
          collapsed: { mobile: false },
        }}
      >
        <Header />
        <CountryAccordion onCountryClick={handleCountryClick} />
        <MainContent selectedCountry={selectedCountry} onCountryClick={handleCountryClick} />
      </AppShell>
    </MantineProvider>
  );
}
