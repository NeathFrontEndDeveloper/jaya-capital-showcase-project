// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import CryptoJS from "crypto-js";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const secretKey = "my-super-secret"; // store in env for production

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();
//       if (data.token) {
//         // Encrypt token
//         const encrypted = CryptoJS.AES.encrypt(data.token, secretKey).toString();
//         localStorage.setItem("authToken", encrypted);

//         router.push("/dashboard"); // redirect to dashboard
//       } else {
//         alert("Login failed");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-20">
//       <input
//         type="email"
//         placeholder="Email"
//         className="p-2 border rounded"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="p-2 border rounded"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//         Login
//       </button>
//     </form>
//   );
// }
