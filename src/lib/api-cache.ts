// API fetcher with caching strategy
type CacheEntry<T> = {
  data: T;
  timestamp: number;
  language: string;
};

type CacheStore = {
  [key: string]: {
    [lang: string]: CacheEntry<unknown>;
  };
};

// In-memory cache
const cache: CacheStore = {};

// Cache duration: 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;

/**
 * Fetch data with caching
 * @param endpoint - API endpoint (e.g., '/api/projects')
 * @param language - Language code (e.g., 'en', 'vi')
 * @param params - Additional query parameters
 * @returns Promise with data
 */
export async function fetchWithCache<T>(
  endpoint: string,
  language: string,
  params: Record<string, string> = {}
): Promise<{ data: T; fromCache: boolean }> {
  const cacheKey = endpoint;

  // Check if cache exists and is still valid
  if (cache[cacheKey]?.[language]) {
    const cached = cache[cacheKey][language] as CacheEntry<T>;
    const age = Date.now() - cached.timestamp;

    if (age < CACHE_DURATION) {
      console.log(`[Cache HIT] ${endpoint}?lang=${language}`);
      return { data: cached.data, fromCache: true };
    }
  }

  // Cache miss or expired - fetch from API
  console.log(`[Cache MISS] ${endpoint}?lang=${language}`);

  const queryParams = new URLSearchParams({
    lang: language,
    ...params,
  });

  const response = await fetch(`${endpoint}?${queryParams}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  const result = await response.json();

  // Store in cache
  if (!cache[cacheKey]) {
    cache[cacheKey] = {};
  }

  cache[cacheKey][language] = {
    data: result.data,
    timestamp: Date.now(),
    language,
  };

  return { data: result.data, fromCache: false };
}

/**
 * Clear cache for a specific endpoint and language
 */
export function clearCache(endpoint?: string, language?: string) {
  if (!endpoint) {
    // Clear all cache
    Object.keys(cache).forEach(key => delete cache[key]);
    console.log('[Cache] Cleared all cache');
    return;
  }

  if (language && cache[endpoint]?.[language]) {
    delete cache[endpoint][language];
    console.log(`[Cache] Cleared ${endpoint}?lang=${language}`);
  } else if (cache[endpoint]) {
    delete cache[endpoint];
    console.log(`[Cache] Cleared ${endpoint} (all languages)`);
  }
}

/**
 * Get cache status
 */
export function getCacheStatus() {
  const status: Record<string, string[]> = {};

  Object.keys(cache).forEach(endpoint => {
    status[endpoint] = Object.keys(cache[endpoint]);
  });

  return status;
}
