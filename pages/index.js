
import Home from 'containers/Home'
import { BlockProvider } from 'contexts/block-context'

export default function HomePage() {
  return (
    <BlockProvider>
      <Home />
    </BlockProvider>
  )
}