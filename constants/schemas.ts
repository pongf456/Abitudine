import { DaysOfWeek, DifficultyLevel } from "@/types/enums";
import moment from "moment";
import z from "zod";
export const userSchema = z.object({
  perfilUri: z.string({
    required_error: "La imagen de perfil es necesaria.",
    invalid_type_error: "La imagen de perfil es inválida.",
  }),
  nickname: z
    .string({
      required_error: "El apodo es necesario.",
      invalid_type_error: "El apodo es inválido.",
    })
    .min(3, "El apodo es muy corto."),
  birthDate: z
    .date({
      required_error: "La fecha de nacimiento es requerida.",
    })
    .refine((date) => {
      if (date.getFullYear() >= 2012) return false;
      else return true;
    }, "Debes ser mayor de 13 años."),
  email: z
    .string({
      required_error: "El correo electrónico es necesario.",
      invalid_type_error: "El correo electrónico es inválido.",
    })
    .email("El correo electrónico debe ser valido."),
  identity: z
    .array(
      z.string({
        required_error: "La identidad es requerida.",
      }),
      { required_error: "Las identidades son requeridas." },
    )
    .min(1, "Es necesario que añadas cualidades que te identifiquen."),
});
export type UserSchema = z.infer<typeof userSchema>;
const HHMMSchema = z
  .string()
  .refine((value) => moment(value, "hh:mm A", true).isValid(), {
    message: "Formato de hora inválido. Debe ser 'hh:mm A'.",
  });
export const notesSchema = z.array(
  z.object(
    {
      text: z
        .string({
          required_error: "La nota es necesaria.",
          invalid_type_error: "La nota es inválida.",
        })
        .min(10, "La nota es muy corta."),
      createdAt: z.string({
        required_error: "La fecha de la nota es necesaria.",
        invalid_type_error: "La fecha de la nota es inválida.",
      }),
    },
    {
      required_error: "El objeto es inválido.",
      invalid_type_error: "El objeto es inválido.",
    },
  ),
  {
    required_error: "Las notas son necesarias.",
    invalid_type_error: "Las notas son inválidas.",
  },
);
export type NotesSchema = z.infer<typeof notesSchema>;
export const habitSchema = z.object({
  name: z
    .string({
      required_error: "El nombre del hábito es necesario.",
      invalid_type_error: "El nombre del hábito es inválido.",
    })
    .min(1, "El nombre del hábito es muy corto."),
  description: z
    .string({
      required_error: "La descripción del hábito es necesaria.",
      invalid_type_error: "La descripción del hábito es invalida.",
    })
    .min(1, "La descripción del hábito es muy corta."),
  identity: userSchema.shape.identity,
  difficulty: z.enum(DifficultyLevel, {
    required_error: "Es necesaria la dificultad del hábito.",
    invalid_type_error: "La dificultad del hábito es inválida.",
  }),
  executionDays: z.array(z.nativeEnum(DaysOfWeek), {
    required_error: "Los días de ejecución son necesarios.",
    invalid_type_error: "Los días de ejecución son inválidos.",
  }),
  startDate: HHMMSchema,
  endDate: HHMMSchema,
});
export type HabitSchema = z.infer<typeof habitSchema>;
