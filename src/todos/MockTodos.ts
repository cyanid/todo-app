import { Todo } from "./Todo";

export const MOCK_TODOS = [
    new Todo({
        id: 1,
        title: 'Participate in daily meeting',
        description: 'Every day at 10am. Describe shortly what did you accomplish yesterday and what are you going to do today.',
        completed: false,
    }),
    new Todo({
        id: 2,
        title: 'Squash bugs #1337 and #6789 from Jira',
        description: 'Check Jira for bug reports, find the cause and fix em!',
        completed: false,
    }),
];
