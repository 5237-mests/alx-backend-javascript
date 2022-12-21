export default function guardrail(inputFunction) {
  const queue = [];

  try {
    queue.push(inputFunction());
  } catch (e) {
    queue.push(`${e}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
