"use client"
import Page from "@/components/layouts/page";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
import FormContent from "@/components/layouts/PageFormContent";

import useUser from "@/hooks/useUser";

export default function Reset() {
    const userHook = useUser();

    return (
        <Page>
            <FormContent
                header='Reset password'
            >
                {userHook.stage === 0 ?
                    <>
                        <TextField 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined"
                            defaultValue={userHook.email} 
                            onChange={(event) => { userHook.setEmail(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <Button
                            variant="contained"
                            onClick={() => { userHook.doCreateUserPasswordCode(); }}
                            style={{
                                width: '100%',
                                height: 48,
                                backgroundColor: '#2B318A',
                                borderRadius: 8,
                                color: '#ffffff',
                            }}>Reset</Button>
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
                                Do you remember your password?
                            </div>
                            <Link href='/signin'>
                                <div style={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: '#2B318A',
                                }}>
                                    Sign in
                                </div>
                            </Link>
                        </div>
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
                    </>
                : userHook.stage === 1 ?
                    <>
                        <TextField 
                            id="outlined-basic" 
                            label="Code" 
                            variant="outlined" 
                            defaultValue={userHook.passwordCode} 
                            onChange={(event) => { userHook.setPasswordCode(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <TextField
                            id="outlined-basic" 
                            label="Password" 
                            variant="outlined"
                            defaultValue={userHook.password} 
                            onChange={(event) => { userHook.setPassword(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <Button 
                            variant="contained" 
                            onClick={() => { userHook.doCreateUserPassword(); }}
                            style={{
                                width: '100%',
                                height: 48,
                                backgroundColor: '#2B318A',
                                borderRadius: 8,
                                color: '#ffffff',
                            }}>Sign up</Button>
                    </>
                : userHook.stage === 2 &&
                    <>
                        <div style={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}>
                            Congratulations! Your password has been reset.
                        </div>
                        <Link href='/signin' style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 8,
                        }}>
                            <Button 
                                variant="contained" 
                                style={{
                                    width: '100%',
                                    height: 48,
                                    backgroundColor: '#2B318A',
                                    borderRadius: 8,
                                    color: '#ffffff',
                                }}>Sign up</Button>
                        </Link>
                    </>
                }
            </FormContent>
        </Page>
    )
}