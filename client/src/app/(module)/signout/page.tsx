"use client"
import Page from "@/components/layouts/page";
import Button from '@mui/material/Button';
import FormContent from "@/components/layouts/PageFormContent";

import useUser from "@/hooks/useUser";

export default function Signin() {
    const userHook = useUser();

    return (
        <Page>
            <FormContent
                header='Sign out'
            >
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
                        Do you want to log out?
                    </div>
                </div>
                <Button
                    variant="contained"
                    onClick={() => { userHook.doRevokeToken(); }}
                    style={{
                        width: '100%',
                        height: 48,
                        backgroundColor: '#2B318A',
                        borderRadius: 8,
                        color: '#ffffff',
                    }}>Sign out</Button>
            </FormContent>
        </Page>
    )
}