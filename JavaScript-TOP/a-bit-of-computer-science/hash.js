class MyHashMap {
  constructor(size = 16) {
    this.size = size;
    this.count = 0;
    this.loadFactor = 0.75;
    this.buckets = this.createBuckets(size);
  }

  createBuckets(n) {
    return Array.from({ length: n }, () => []);
  }

  hash(key) {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h = h * 31 + key.charCodeAt(i);

      h = h >>> 0;
    }
    return h;
  }

  getIndex(key) {
    return this.hash(key) % this.size;
  }

  put(key, value) {
    const index = this.getIndex(key);
    const bucket = this.buckets[index];

    for (const pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    bucket.push([key, value]);
    this.count++;

    if (this.count / this.size > this.loadFactor) {
      this.resize();
    }
  }

  get(key) {
    const index = this.getIndex(key);
    const bucket = this.buckets[index];

    for (const [k, v] of bucket) {
      if (k === key) return v;
    }
    return undefined;
  }

  resize() {
    const oldBuckets = this.buckets;

    this.size = this.size * 2;
    this.buckets = this.createBuckets(this.size);
    this.count = 0;

    for (const bucket of oldBuckets) {
      for (const [k, v] of bucket) {
        this.put(k, v);
      }
    }
  }

  print() {
    this.buckets.forEach((bucket, i) => {
      if (bucket.length > 0) {
        console.log(`bucket ${i}:`, JSON.stringify(bucket));
      }
    });
  }
}

const map = new MyHashMap();

map.put('ali', 'mien hu babi');
map.put('sara', 'mien hu shi.da');
map.put('ila', 'mien hu lier');

console.log("hash('ali') =", map.hash('ali'), '-> bucket', map.getIndex('ali'));
console.log("hash('ila') =", map.hash('ila'), '-> bucket', map.getIndex('ila'));

console.log(map.get('ali'));
console.log(map.get('ila'));
console.log(map.get('sara'));
console.log(map.get('zai'));

map.put('ali', 'mien hu babi ka ali');

console.log('ali updated:', map.get('ali'));

console.log('\nResize se pehle: size =', map.size, ', count =', map.count);

for (let i = 1; i <= 20; i++) {
  map.put('user' + i, i * 10);
}

console.log('Resize ke baad:  size =', map.size, ', count =', map.count);

console.log(map.get('user20'));
console.log(map.get('ali'));
console.log(map.get('user9'));

map.print();
