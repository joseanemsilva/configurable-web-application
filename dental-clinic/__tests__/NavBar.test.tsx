import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NavBar from '@/components/NavBar'
 
describe('Navbar', () => {
  it('renders a home link', () => {
    render(<NavBar />)
 
    const navbar = screen.getByRole('link', { name: 'Home'})
 
    expect(navbar).toBeInTheDocument()
  })
});