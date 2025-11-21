'use client'

import { useState } from "react"
import axios from "axios"

export default function Page() {
    const [userid, setUserId] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8080/api/login", {
                userid,
                password
            })
            alert("로그인 성공: " + res.data.userid)
            localStorage.setItem("token", res.data.token)
        } catch (err) {
            alert("로그인 실패: 아이디 또는 비밀번호 확인")
        }
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "100px" }}>
            <h2>로그인</h2>
            <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", width: "250px" }}>
                <input
                    type="text"
                    placeholder="아이디"
                    value={userid}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition-all">로그인</button>
            </form>
        </div>
    )
}
