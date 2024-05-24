"use client"
import Page from "@/components/layouts/page";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from "next/link";
import FormContent from "@/components/layouts/PageFormContent";

import useUser from "@/hooks/useUser";

export default function Signup() {
    const userHook = useUser();

    return (
        <Page>
            <FormContent
                header='Sign up'
            >
                {userHook.stage === 0 ?
                    <>
                        <TextField 
                            id="outlined-basic" 
                            label="Nickname" 
                            variant="outlined" 
                            defaultValue={userHook.nickname} 
                            onChange={(event) => { userHook.setNickname(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <TextField 
                            id="outlined-basic" 
                            label="First name" 
                            variant="outlined" 
                            defaultValue={userHook.firstName} 
                            onChange={(event) => { userHook.setFirstName(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <TextField
                            id="outlined-basic" 
                            label="Last name" 
                            variant="outlined"
                            defaultValue={userHook.lastName} 
                            onChange={(event) => { userHook.setLastName(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <TextField 
                            id="outlined-basic" 
                            label="Gender" 
                            variant="outlined" 
                            type="phone"
                            defaultValue={userHook.gender} 
                            onChange={(event) => { userHook.setGender(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <Button 
                            variant="contained" 
                            onClick={() => { userHook.setStage(1); }}
                            style={{
                                width: '100%',
                                height: 48,
                                backgroundColor: '#2B318A',
                                borderRadius: 8,
                                color: '#ffffff',
                            }}>Next</Button>
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
                                Already have an account?
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
                    </>
                : userHook.stage === 1 ?
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
                        <TextField 
                            id="outlined-basic" 
                            label="Phone" 
                            variant="outlined" 
                            type="phone"
                            defaultValue={userHook.phone} 
                            onChange={(event) => { userHook.setPhone(event.target.value) }} 
                            style={{
                                width: '100%',
                            }}/>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8,
                        }}>
                            <Button 
                                variant="contained" 
                                onClick={() => { userHook.setStage(0); }}
                                style={{
                                    width: '100%',
                                    height: 48,
                                    backgroundColor: '#2B318A',
                                    borderRadius: 8,
                                    color: '#ffffff',
                                }}>Back</Button>
                            <Button 
                                variant="contained" 
                                onClick={() => { userHook.doCreateUser(); }}
                                style={{
                                    width: '100%',
                                    height: 48,
                                    backgroundColor: '#2B318A',
                                    borderRadius: 8,
                                    color: '#ffffff',
                                }}>Sign up</Button>
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
                                Already have an account?
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
                    </>
                : userHook.stage === 2 ?
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
                : userHook.stage === 3 &&
                    <>
                        <div style={{
                            fontSize: 12,
                            fontWeight: 600,
                        }}>
                            Congratulations! Your account has been created.
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