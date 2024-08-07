import { z } from 'zod';

export const LoginSchema = z.object({
    email: z.string().email("Format d'email invalide").min(5, "L'email doit contenir au moins 5 caractères"),
    password: z.string().min(8, {
        message: 'Le mot de passe doit contenir au moins 8 caractères',
    }).max(50, {
        message: 'Le mot de passe ne doit pas dépasser 50 caractères',
    }).regex(/[a-zA-Z]/, {
        message: 'Le mot de passe doit contenir au moins une lettre',
    }).regex(/[0-9]/, {
        message: 'Le mot de passe doit contenir au moins un chiffre',
    }),
});

const OTPSchema = z.object({
    emailNumber: z.number().min(6).max(6)
});

export const SignInSchema = z.object({
    name: z.string().min(4, "Le nom d'utilisateur doit contenir au moins 5 caractères"),
    email: z.string().email("Format d'email invalide").min(5, "L'email doit contenir au moins 5 caractères"),
    password: z.string().min(8, {
        message: 'Le mot de passe doit contenir au moins 8 caractères',
    }).max(50, {
        message: 'Le mot de passe ne doit pas dépasser 50 caractères',
    }).regex(/[a-zA-Z]/, {
        message: 'Le mot de passe doit contenir au moins une lettre',
    }).regex(/[0-9]/, {
        message: 'Le mot de passe doit contenir au moins un chiffre',
    }),
    gender: z.boolean(),
});



export type SigninSchema = z.infer<typeof SignInSchema>;
export type Loginschema = z.infer<typeof LoginSchema>;
