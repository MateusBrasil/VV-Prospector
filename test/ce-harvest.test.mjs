import assert from 'node:assert/strict';
import test from 'node:test';
import { urlDoZip } from '../tools/ce-harvest.mjs';

test('ce-harvest aceita somente nomes de ZIP do catálogo e codifica a URL', () => {
  assert.equal(urlDoZip('001-vetic.zip'), 'https://eynifdmidipyhvdwmfes.supabase.co/storage/v1/object/public/wrepo-zips/001-vetic.zip');
  for (const nome of ['../segredo.zip', 'x.zip&calc.exe', 'https://exemplo.test/x.zip', 'x.zip;whoami', 'x'])
    assert.throws(() => urlDoZip(nome), /pacote inválido/);
});
