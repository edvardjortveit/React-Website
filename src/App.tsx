import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { Button, MantineProvider, Stack, AppShell, Burger} from '@mantine/core';
import { Header } from './Header';
import { useDisclosure } from '@mantine/hooks';

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  return <MantineProvider defaultColorScheme="light" theme={{primaryColor: "dark"}}>
  
    <AppShell
      header={{height: 60}}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md">
      <AppShell.Header>
        <Burger
          opened = {opened}
          onClick = {toggle}
          hiddenFrom = "sm"
          size="sm">
        </Burger>
        <div>Reisebois</div>
      </AppShell.Header>
      <AppShell.Navbar p="md">Countries</AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
    {/* <Stack>
      <Header name='Edvard'/>
      <Button>Learn more</Button>
    </Stack> */}

  </MantineProvider>;
}

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Reisebois Travelblog</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           Countries traveled to {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Reisebois Travelblog</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           Countries traveled to {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
