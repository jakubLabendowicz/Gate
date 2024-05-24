"use client"
import { createContext, useContext, useState } from 'react';

const UserContext = createContext({
    nickname: '',
    setNickname: (nickname: string) => { },
    firstName: '',
    setFirstName: (firstName: string) => { },
    lastName: '',
    setLastName: (lastName: string) => { },
    email: '',
    setEmail: (email: string) => { },
    phone: '',
    setPhone: (phone: string) => { },
    gender: '',
    setGender: (gender: string) => { },
    birthdate: '',
    setBirthdate: (birthdate: string) => { },
    zoneInfo: '',
    setZoneInfo: (zoneInfo: string) => { },
    locale: '',
    setLocale: (locale: string) => { },

    passwordCode: '',
    setPasswordCode: (passwordCode: string) => { },
    password: '',
    setPassword: (password: string) => { },

    stage: 0,
    setStage: (signUpStage: number) => { },

    doCreateUser: () => { },
    doCreateUserPasswordCode: () => { },
    doCreateUserPassword: () => { },
    doAuthorize: () => { },
    doRefreshToken: () => { },
    doRevokeToken: () => { },
    doGetUser: () => { },
});

export default UserContext;