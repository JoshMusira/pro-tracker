import { z } from 'zod';

export const createIssueSchema = z.object({
    title: z.string().min(1, 'Tittle is required').max(255),
    description: z.string().min(1, 'Description is required').max(65535),
});


export const createUserSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    username: z.string().min(1, 'Username is required'),
    email: z.string().email(),
    password: z.string().min(1, 'Password is required'),

});
