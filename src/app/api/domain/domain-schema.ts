import { z } from "zod";

const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const addDomainSchema = z.object({
  incomingAddress: z
    .string()
    .min(1, "Incoming address is required")
    .refine((value) => domainRegex.test(value), {
      message:
        "Invalid domain format (must be a plain domain, e.g., example.com)",
    }),
  destinationAddress: z
    .string()
    .min(1, "Destination address is required")
    .refine((value) => domainRegex.test(value), {
      message:
        "Invalid domain format (must be a plain domain, e.g., example.com)",
    }),
  port: z.string().min(1, "Port is required"),
  enableHttps: z.boolean().default(true)
});
export type AddDomainValues = z.infer<typeof addDomainSchema>

export const deleteDomainSchema = z.object({
  incomingAddress: z
    .string()
    .min(1, "Incoming address is required")
    .refine(
      (value) => {
        return domainRegex.test(value);
      },
      { message: "Invalid domain format" }
    ),
});
export type DeleteDomainValues = z.infer<typeof deleteDomainSchema>
