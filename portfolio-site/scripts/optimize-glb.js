#!/usr/bin/env node
/*
 Simple GLB optimization script using gltf-transform.
 Install: npm i -D @gltf-transform/cli @gltf-transform/core @gltf-transform/draco @gltf-transform/quantize
 Usage: node scripts/optimize-glb.js input.glb output.glb
*/
import { NodeIO } from '@gltf-transform/core';
import { draco } from '@gltf-transform/draco';
import { quantize } from '@gltf-transform/quantize';

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node scripts/optimize-glb.js input.glb output.glb');
  process.exit(1);
}

const [input, output] = args;

async function run() {
  const io = new NodeIO().registerExtensions([draco]);
  const doc = await io.read(input);
  await doc.transform(draco({ compressionLevel: 7 }));
  await doc.transform(quantize({}) );
  await io.write(output, doc);
  console.log('Optimized', input, '→', output);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
