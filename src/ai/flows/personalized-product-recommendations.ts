'use server';

/**
 * @fileOverview A flow that provides personalized product recommendations based on user history.
 *
 * - personalizedProductRecommendations - A function that returns product recommendations.
 * - PersonalizedProductRecommendationsInput - The input type for the personalizedProductRecommendations function.
 * - PersonalizedProductRecommendationsOutput - The return type for the personalizedProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedProductRecommendationsInputSchema = z.object({
  browsingHistory: z.string().describe('The user browsing history.'),
  purchaseHistory: z.string().describe('The user purchase history.'),
  userPreferences: z.string().describe('The user preferences.'),
});
export type PersonalizedProductRecommendationsInput =
  z.infer<typeof PersonalizedProductRecommendationsInputSchema>;

const PersonalizedProductRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of personalized product recommendations.'),
});
export type PersonalizedProductRecommendationsOutput =
  z.infer<typeof PersonalizedProductRecommendationsOutputSchema>;

export async function personalizedProductRecommendations(
  input: PersonalizedProductRecommendationsInput
): Promise<PersonalizedProductRecommendationsOutput> {
  return personalizedProductRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedProductRecommendationsPrompt',
  input: {schema: PersonalizedProductRecommendationsInputSchema},
  output: {schema: PersonalizedProductRecommendationsOutputSchema},
  prompt: `You are an expert e-commerce product recommendation system.

  Based on the user's browsing history, purchase history and stated preferences, you will provide a list of personalized product recommendations.

  Browsing History: {{{browsingHistory}}}
  Purchase History: {{{purchaseHistory}}}
  User Preferences: {{{userPreferences}}}

  Provide the recommendations in a clear, concise format.
  The response should be a list of product names only.
  Avoid any extra conversational text.
  `,
});

const personalizedProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedProductRecommendationsFlow',
    inputSchema: PersonalizedProductRecommendationsInputSchema,
    outputSchema: PersonalizedProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
