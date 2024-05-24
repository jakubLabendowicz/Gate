"use client"
import Page from "@/components/layouts/page";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
import FormContent from "@/components/layouts/PageFormContent";

import useUser from "@/hooks/useUser";

export default function Signin() {
    const userHook = useUser();

    return (
        <Page>
            <FormContent
                header='Sign in'
            >
                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined"
                    defaultValue={userHook.email} 
                    onChange={(event) => { userHook.setEmail(event.target.value) }} 
                    style={{
                        width: '100%',
                    }}/>
                <TextField 
                    id="outlined-basic" 
                    label="Password" 
                    variant="outlined" 
                    type="password"
                    defaultValue={userHook.password} 
                    onChange={(event) => { userHook.setPassword(event.target.value) }} 
                    style={{
                        width: '100%',
                    }}/>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                }}>
                    <Link href='/reset'>
                        <div style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#2B318A',
                        }}>
                            Forgot password?
                        </div>
                    </Link>
                </div>
                <Button
                    variant="contained"
                    onClick={() => { userHook.doAuthorize(); }}
                    style={{
                        width: '100%',
                        height: 48,
                        backgroundColor: '#2B318A',
                        borderRadius: 8,
                        color: '#ffffff',
                    }}>Sign in</Button>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                }}>
                    <div style={{
                        fontSize: 12,
                        fontWeight: 600,
                    }}>
                        Do not have an account?
                    </div>
                    <Link href='/signup'>
                        <div style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#2B318A',
                        }}>
                            Sign up
                        </div>
                    </Link>
                </div>
            </FormContent>
        </Page>
    )
}