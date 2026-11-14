import assert from 'node:assert/strict';
import test from 'node:test';

import { shouldLoadPracticeAnalytics } from '../src/utils/practice-analytics-policy.js';

test('practice analytics only loads on canonical production hosts', () => {
  assert.equal(shouldLoadPracticeAnalytics('donovanfamilydentistry.com', '/'), true);
  assert.equal(shouldLoadPracticeAnalytics('www.donovanfamilydentistry.com', '/services/'), true);
  assert.equal(shouldLoadPracticeAnalytics('preview.donovanfamilydentistry.com', '/'), false);
  assert.equal(shouldLoadPracticeAnalytics('candidate.pages.dev', '/'), false);
});

test('practice analytics excludes contact, forms, future designs, and review routes', () => {
  for (const pathname of ['/contact', '/contact/', '/forms', '/forms/', '/modern/', '/review/open-dental/']) {
    assert.equal(shouldLoadPracticeAnalytics('donovanfamilydentistry.com', pathname), false, pathname);
  }
});
