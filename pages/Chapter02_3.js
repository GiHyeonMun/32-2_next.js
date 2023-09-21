import Head from "next/head"
import Image from "next/image"
import { Inter } from "next/font/google"
import styles from '@/styles/Home.module.css'
// 추가
import { useEffect, useState } from "react"
import Highlight from "@/components/Highlight"

const inter = Inter({subsets: ['latin']})

export default function Chapter02_3() {
    const [isClientf, setIsClient] = useState(false)
    
} 