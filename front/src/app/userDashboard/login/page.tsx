"use client"
import React, { useEffect } from 'react'
import LoginClient from '@/components/LoginClient/LoginClient';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/user';

export default function LoginPage() {
  const [token, setToken] = useState<string | null>(null);
  const { isLogged } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (isLogged) {
      router.push("/home");
    }
  }, [isLogged, router]);


  if (isLogged) {
    return null;
  }

  return (
    <LoginClient setToken={setToken} />
  );
}
