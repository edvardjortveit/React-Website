import {Stack, Text } from "@mantine/core"

interface Props {
    name: string
}
export function Header(props: Props) {
    return <Stack>
        <Text>Halla {props.name}</Text>
    </Stack>
    
    
  }