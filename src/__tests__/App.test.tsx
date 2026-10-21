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

  it('renders Register Interest CTA buttons', () => {
    render(<App />);
    const ctaButtons = screen.getAllByText('Register Interest');
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

  it('renders Rewards section with indicative rates', () => {
    render(<App />);
    expect(screen.getByText('How Rewards Would Work')).toBeDefined();
    expect(screen.getByText('Indicative Recyclable Rates')).toBeDefined();
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

  it('renders goals rather than claimed impact', () => {
    render(<App />);
    expect(screen.getByText("What We're Trying to Prove")).toBeDefined();
  });

  it('renders the pilot-status section', () => {
    render(<App />);
    expect(screen.getByText("Why We're Running a Pilot")).toBeDefined();
    expect(screen.getByText("We haven't launched yet")).toBeDefined();
  });

  it('renders FAQ section and toggles accordion', () => {
    render(<App />);
    expect(screen.getByText('Frequently Asked Questions')).toBeDefined();
    const faqButton = screen.getByText('What areas do you serve?');
    fireEvent.click(faqButton);
    expect(screen.getByText(/None yet/)).toBeDefined();
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

  it('asks what people would pay, not just whether they are interested', () => {
    render(<App />);
    const priceField = screen.getByLabelText('What would you pay?') as HTMLSelectElement;
    expect(priceField).toBeDefined();
    const options = Array.from(priceField.options).map((o) => o.value);
    expect(options).toContain('Up to ₹199/month');
    expect(options).toContain('₹600+/month');
    expect(options).toContain('Only if I earn from recyclables');
  });

  it('renders Footer', () => {
    render(<App />);
    expect(screen.getByText(/2026 CleanPay/)).toBeDefined();
  });

  // Regression guard. The page previously claimed a track record it does not
  // have, which contradicts its own "not yet live" disclaimer and is the kind
  // of unsubstantiated claim that gets ads rejected under ASCI / the Consumer
  // Protection Act. Keep it out.
  it('makes no fabricated track-record or testimonial claims', () => {
    const { container } = render(<App />);
    const text = container.textContent ?? '';

    const bannedClaims = [
      '25K+',
      '150+',
      '5,000+',
      '2M Liters',
      '80 Tons',
      '98%',
      'Pickups Done',
      'Trees Saved',
      'Our Impact So Far',
      'Trusted by thousands',
      'What Our Users Say',
      'Priya Sharma',
      'Rajesh Patel',
      'Ananya Rao',
      'Vikram Singh',
      'currently operational',
      'Current Recyclable Rates',
    ];

    const found = bannedClaims.filter((claim) => text.includes(claim));
    expect(found).toEqual([]);
  });
});
