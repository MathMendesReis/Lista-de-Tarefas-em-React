import Home from '@/app/page'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

test('loads and displays greeting', async () => {
  // ARRANGE
  const view = render(<Home/>)
  view.debug()
  
})