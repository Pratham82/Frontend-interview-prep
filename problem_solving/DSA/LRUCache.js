/** This is very Bruteforce approach like at some point we can get rid of extra space and all but this is very first time i try to build a LRU after reading the theory part :))
 *  LRU as name suggest Least recently used
 *  constraints
 *  - Cache has fix size allocated if size exceeds remove least used key which is last key from our cache,
 *  - has get() which checks the cache and return the value from cache also update its position to recently use means add it to the front of stack
 *  - has put() add the values to cache store if size exceed removes the last key which is least used and add the new keys to cache store also if cache has same key in store
 *    it removes from the particular location and add it to the front of stack (latest entry in short if i had to say)
 */

const CACHE_SIZE = 4;

const cache = new Map();

// this basically get the key from cache store and update its entry with new entry into stack
const get = (key) => {
  const obj = {};
  if (cache.has(key)) {
    obj[key] = cache.get(key);
    cache.delete(key);
    cache.set(key, obj[key]);
    delete obj[key];
  }
};

const put = (obj) => {
  const cacheSize = cache.size;

  const ObjKey = Object.keys(obj);

  if (cacheSize >= CACHE_SIZE) {
    console.log("Cache size is greater than", CACHE_SIZE);
    const [key, value] = cache.entries().next().value;

    // if key is present in cache store we delete the position of the key and add it to the front of stack (fresh entry) into stack
    if (cache.has(ObjKey[0])) {
      cache.delete(ObjKey[0]);
      for (const [key, value] of Object.entries(obj)) {
        cache.set(key, value);
      }
    } else {
      // else we delete the least use key from back and add new entry into stack
      cache.delete(key);
      for (const [key, value] of Object.entries(obj)) {
        cache.set(key, value);
      }
    }

    return;
  }

  // This adds to cache store basically we iterate to
  for (const [key, value] of Object.entries(obj)) {
    cache.set(key, value);
  }
};

put({ 2: 6 });
put({ 4: 7 });
put({ 8: 11 });
put({ 7: 10 });
console.log("Cache after initial push:", cache);

get("2");
get("8");
console.log("Cache after accessing keys 2 and 8:", cache);

put({ 5: 6 });
console.log("Cache after putting key 5:", cache);

get("7");
console.log("Cache after accessing key 7:", cache);

put({ 5: 7 });

console.log("->", cache);
console.log("Cache after updating key 5:", cache);

// prev -> Map(4) { '2' => 6, '8' => 11, '5' => 6, '7' => 10 }
