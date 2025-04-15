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
      required_error: "El apodo es requerido",
    })
    .min(3, "El apodo es muy corto."),
  birthDate: z
    .date({
      required_error: "La fecha de nacimiento es requerida.",
    })
    .refine((date) => {
      if (date.getFullYear() > 2014) return false;
      else return true;
    }, "Debes ser mayor de 10 años."),
  email: z
    .string({
      required_error: "El email es requerido.",
    })
    .email("El email debe ser correcto."),
  identity: z
    .array(
      z.string({
        required_error: "La identidad es requerida.",
      }),
      { required_error: "Las identidades son requeridas." },
    )
    .min(1, "Es necesario que añadas cualidades."),
});
export type UserSchema = z.infer<typeof userSchema>;
const HHMMSchema = z
  .string()
  .refine((value) => moment(value, "hh:mm A", true).isValid(), {
    message: "Formato de hora inválido. Debe ser hh:mm A",
  });
export const notesSchema = z.array(
  z.object(
    {
      text: z
        .string({
          required_error: "El texto es necesario",
          invalid_type_error: "El texto es invalido",
        })
        .min(10, "El texto es muy corto"),
      createdAt: z.string({
        required_error: "La fecha es necesaria",
        invalid_type_error: "La fecha es invalida",
      }),
    },
    {
      required_error: "La nota es necesaria",
      invalid_type_error: "La nota es invalida",
    },
  ),
  {
    required_error: "Las notas son requeridas",
    invalid_type_error: "Las notas son invalidas.",
  },
);
export type NotesSchema = z.infer<typeof notesSchema>;
export const habitSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es necesario.",
      invalid_type_error: "El nombre es invalido",
    })
    .min(1, "El nombre del hábito es muy corto."),
  description: z
    .string({
      required_error: "La descripción es necesaria.",
      invalid_type_error: "La descripción es invalida.",
    })
    .min(1, "El nombre del hábito es muy corto."),
  identity: userSchema.shape.identity,
  difficulty: z.enum(DifficultyLevel, {
    required_error: "La dificultad es necesaria.",
    invalid_type_error: "La dificultad es inválida.",
  }),
  executionDays: z.array(z.nativeEnum(DaysOfWeek), {
    required_error: "Los días son necesarios",
  }),
  startDate: HHMMSchema,
  endDate: HHMMSchema,
});
export type HabitSchema = z.infer<typeof habitSchema>;
