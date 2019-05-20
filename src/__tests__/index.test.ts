import sqlite from '../index';

test('should work', async function () {
  const db = sqlite({
    resource: {
      config: {
        filename: ':memory:'
      }
    }
  });

  const query = await db.query('SELECT 1+1');

  expect(query).toHaveLength(1);
  expect(query[0]['1+1']).toEqual(2);

  const execute = await db.execute('SELECT 1+1');

  expect(execute).toHaveLength(1);
  expect(execute[0]['1+1']).toEqual(2);
});
