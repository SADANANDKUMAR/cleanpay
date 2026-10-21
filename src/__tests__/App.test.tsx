import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('CleanPay Landing Page', () => {
  it('renders the hero section with tagline', () => {
    render(<App />);
    expect(screen.getByText('Garbage')).toBeDefined();
    expect(screen.getByText('Value')).toBeDefined();
  });

  it('renders the navbar with brand name', () => {
    render(<App />);
    const brandElements = screen.getAllByText('CleanPay');
    expect(brandElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders Schedule Pickup CTA buttons', () => {
    render(<App />);
    const ctaButtons = screen.getAllByText('Schedule Pickup');
    expect(ctaButtons.length).toBeGreaterThanOrEqual(1);
  });

  it('renders How It Works section with all steps', () => {
    render(<App />);
    const howItWorksElements = screen.getAllByText('How It Works');
    expect(howItWorksElements.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText('Book a Pickup')).toBeDefined();
    expect(screen.getByText('We Collect')).toBeDefined();
    expect(screen.getByText('Area Sanitized')).toBeDefined();
    expect(screen.getByText('Earn Rewards')).toBeDefined();
  });

  it('renders Services section', () => {
    render(<App />);
    expect(screen.getByText('Our Services')).toBeDefined();
    const dailyPickup = screen.getAllByText('Daily Pickup');
    expect(dailyPickup.length).toBeGreaterThanOrEqual(1);
    const heavyWaste = screen.getAllByText('Heavy Waste Pickup');
    expect(heavyWaste.length).toBeGreaterThanOrEqual(1);
  });

  it('renders Sustainability section', () => {
    render(<App />);
    expect(screen.getByText('Sustainability at the Core')).toBeDefined();
    expect(screen.getByText('Smart Waste Segregation')).toBeDefined();
  });

  it('renders Rewards section with recyclable rates', () => {
    render(<App />);
    expect(screen.getByText('Rewards System')).toBeDefined();
    expect(screen.getByText('Plastic')).toBeDefined();
    expect(screen.getByText('E-Waste')).toBeDefined();
  });

  it('renders Business section', () => {
    render(<App />);
    expect(screen.getByText('For Businesses & Communities')).toBeDefined();
    expect(screen.getByText('Corporate Offices')).toBeDefined();
  });

  it('renders App Integration section', () => {
    render(<App />);
    expect(screen.getByText('One Platform, Three Experiences')).toBeDefined();
    expect(screen.getByText('Customer App')).toBeDefined();
    expect(screen.getByText('Collector App')).toBeDefined();
    expect(screen.getByText('Admin Dashboard')).toBeDefined();
  });

  it('renders Impact section', () => {
    render(<App />);
    expect(screen.getByText('Our Environmental Impact')).toBeDefined();
    expect(screen.getByText('5,000+')).toBeDefined();
  });

  it('renders Testimonials section', () => {
    render(<App />);
    expect(screen.getByText('What Our Users Say')).toBeDefined();
    expect(screen.getByText('Priya Sharma')).toBeDefined();
  });

  it('renders FAQ section and toggles accordion', () => {
    render(<App />);
    expect(screen.getByText('Frequently Asked Questions')).toBeDefined();
    const faqButton = screen.getByText('How do I earn money from recyclables?');
    fireEvent.click(faqButton);
    expect(screen.getByText(/weigh it on the spot/)).toBeDefined();
  });

  it('renders Contact section', () => {
    render(<App />);
    expect(screen.getByText('Join the Bengaluru Pilot')).toBeDefined();
    expect(screen.getAllByText('Register Your Interest').length).toBeGreaterThanOrEqual(1);
  });

  it('exposes a real, submittable interest form (not a demo stub)', () => {
    render(<App />);
    // The form used to be a no-op stub labelled "Preview Form (Not Sent)".
    expect(screen.queryByText(/Not Sent/i)).toBeNull();
    expect(screen.getByRole('button', { name: /Register Interest/i })).toBeDefined();
    // Named fields are what actually carry the lead.
    expect(screen.getByLabelText('Full Name')).toBeDefined();
    expect(screen.getByLabelText('Phone')).toBeDefined();
    expect(screen.getByLabelText('Your Locality')).toBeDefined();
  });

  it('renders Footer', () => {
    render(<App />);
    expect(screen.getByText(/2026 CleanPay/)).toBeDefined();
  });
});
