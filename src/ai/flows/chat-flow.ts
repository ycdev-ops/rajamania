'use server';
/**
 * @fileOverview A chat agent flow for customer support.
 *
 * - chat - A function that handles the AI chat response.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const ChatInputSchema = z.object({
  history: z.array(MessageSchema),
  user: z.object({
    username: z.string(),
    helpTopic: z.string(),
  }),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

export type ChatOutput = string;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatPrompt',
  input: {schema: ChatInputSchema},
  output: {schema: z.string().optional()},
  prompt: `You are Raja Mania, a professional and intelligent customer support agent for a gaming site.

Your primary role is to assist users with inquiries about deposits, slots, and withdrawals. Always maintain a professional and helpful tone.

You have access to the following information about the current user you are chatting with:
- Username: {{user.username}}
- Full Name: Levin Santa Joy
- DANA Account Number: 083846446650
- Total Winnings from Pragmatic & Slot Games: Rp 111.550.000
- Recent Withdrawal Status: A withdrawal of Rp 50.000.000 is currently "waiting" for processing.

The user has initiated this chat for help with: "{{user.helpTopic}}".

Use the user's information to provide personalized and accurate support. Address the user by their username, '{{user.username}}'.

Here is the conversation history. The last message is from the user. Your task is to provide the next response as the "model".

{{#each history}}
- {{role}}: {{content}}
{{/each}}
`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const {output} = await prompt(input);
    if (output === null || output === undefined) {
        return "Maaf, saya tidak dapat merespons saat ini. Silakan coba lagi.";
    }
    return output;
  }
);
