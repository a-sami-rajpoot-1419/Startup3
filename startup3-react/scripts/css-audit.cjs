#!/usr/bin/env node
/* CSS Audit: duplicates, size summary */
const fs = require('fs');
const path = require('path');

const cssPath = path.resolve('src/styles.css');
if(!fs.existsSync(cssPath)) { console.error('styles.css not found'); process.exit(1); }
const css = fs.readFileSync(cssPath,'utf8');

// Very naive parse
const selectorRegex = /([^{}]+)\{/g; // crude selector capture prior to '{'
const counts = new Map();
let m;
while((m = selectorRegex.exec(css))){
  const raw = m[1].trim();
  if(!raw) continue;
  const parts = raw.split(',').map(s=>s.trim()).filter(Boolean);
  for(const p of parts){ counts.set(p, (counts.get(p)||0)+1); }
}

const duplicates = [...counts.entries()].filter(([,c])=>c>1).sort((a,b)=>b[1]-a[1]);
const bytes = Buffer.byteLength(css,'utf8');

console.log('CSS Audit Report');
console.log('================');
console.log('File:', cssPath);
console.log('Size (KB):', (bytes/1024).toFixed(2));
console.log('\nTop duplicate selectors (>1 occurrence):');
for(const [sel,c] of duplicates.slice(0,25)){
  console.log(`  ${c}x  ${sel}`);
}
if(!duplicates.length) console.log('  None');

// Heuristic potential duplicates noisy list length
if(duplicates.length>0){
  console.log(`\nTotal duplicate selector entries: ${duplicates.length}`);
}

// Simple budget check
const budgetKB = 90; // arbitrary uncompressed budget
if(bytes/1024 > budgetKB){
  console.warn(`WARNING: CSS exceeds ${budgetKB}KB budget.`);
}

// Exit non-zero if excessive duplicates
if(duplicates.length > 120){
  console.error('Too many duplicate selector definitions (>120). Consider refactor.');
  process.exit(2);
}
