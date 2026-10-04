import { SignJWT, jwtVerify } from "jose";
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET ?? "dev-secret-replace-me");
export const COOKIE_NAME = "wf_admin_token";
export async function signToken(p: { adminId: string; email: string }) {
  return new SignJWT(p).setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime("8h").sign(SECRET);
}
export async function verifyToken(token: string) {
  try { const { payload } = await jwtVerify(token, SECRET); return payload as { adminId: string; email: string }; }
  catch { return null; }
}
