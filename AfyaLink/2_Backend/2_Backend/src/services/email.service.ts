import { sendMail } from "../utils/sendMail";

export async function sendReset(to: string, link: string) {
  await sendMail(to, "Reset your password", `Reset with this link: ${link}`, `<p><a href="${link}">${link}</a></p>`);
}
