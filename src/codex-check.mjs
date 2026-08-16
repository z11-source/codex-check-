export function makeChecklist(task = '') {
  const cleanTask = task.trim() || 'Describe the task';

  return [
    '# Codex Pre-Code Check',
    '',
    `Task: ${cleanTask}`,
    '',
    '- Read nearby files before changing anything.',
    '- Keep the change small and easy to explain.',
    '- Add or update one useful test when behavior changes.',
    '- Run a small verification before sharing the result.'
  ].join('\n');
}
