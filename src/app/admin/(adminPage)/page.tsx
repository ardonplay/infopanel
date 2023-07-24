import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export default function adminPage() {
    if (!cookies().has("loggined") || cookies().get("loggined")?.value === "false") {
        redirect("/admin/login")
    }
}