import { describe, it, expect, beforeEach, vi } from 'vitest';
import { captureAttribution, submitLead } from '../lib/leads';

function mockFetchOk() {
  const fetchMock = vi.fn().mockResolvedValue({ ok: true, text: async () => '' });
  vi.stubGlobal('fetch', fetchMock);
  return fetchMock;
}

function bodyOf(fetchMock: ReturnType<typeof mockFetchOk>) {
  return JSON.parse(fetchMock.mock.calls[0][1].body as string);
}

const baseLead = { full_name: 'Test Person', phone: '+919999900000', consent: true };

describe('lead attribution', () => {
  beforeEach(() => {
    sessionStorage.clear();
    vi.unstubAllGlobals();
    window.history.replaceState({}, '', '/');
  });

  it('captures gclid from an auto-tagged Google Ads landing URL', async () => {
    window.history.replaceState({}, '', '/?gclid=TEST_GCLID_abc123');
    captureAttribution();

    const fetchMock = mockFetchOk();
    await submitLead(baseLead);

    expect(bodyOf(fetchMock).gclid).toBe('TEST_GCLID_abc123');
  });

  it('captures fbclid from a Meta landing URL', async () => {
    window.history.replaceState({}, '', '/?fbclid=TEST_FBCLID_xyz');
    captureAttribution();

    const fetchMock = mockFetchOk();
    await submitLead(baseLead);

    expect(bodyOf(fetchMock).fbclid).toBe('TEST_FBCLID_xyz');
  });

  it('captures utm params and sends the price point', async () => {
    window.history.replaceState({}, '', '/?utm_source=google&utm_medium=cpc&utm_campaign=blr_pilot_oct');
    captureAttribution();

    const fetchMock = mockFetchOk();
    await submitLead({ ...baseLead, price_point: '₹200 – ₹399/month', locality: 'HSR Layout' });

    const body = bodyOf(fetchMock);
    expect(body.utm_source).toBe('google');
    expect(body.utm_campaign).toBe('blr_pilot_oct');
    expect(body.price_point).toBe('₹200 – ₹399/month');
    expect(body.locality).toBe('HSR Layout');
  });

  it('keeps the first touch when the visitor later navigates without params', async () => {
    window.history.replaceState({}, '', '/?gclid=FIRST_TOUCH');
    captureAttribution();
    // e.g. an in-page navigation that drops the query string
    window.history.replaceState({}, '', '/');
    captureAttribution();

    const fetchMock = mockFetchOk();
    await submitLead(baseLead);

    expect(bodyOf(fetchMock).gclid).toBe('FIRST_TOUCH');
  });

  it('surfaces a failed save instead of reporting success', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, status: 401, text: async () => 'permission denied' }),
    );
    await expect(submitLead(baseLead)).rejects.toThrow(/401/);
  });
});
