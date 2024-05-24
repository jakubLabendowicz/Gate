import ModuleBar from "../layouts/ModuleBar";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import ModuleBarButton from "../elements/ModuleBarButton";

import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import ModuleBarSizeButton from "../elements/ModuleBarSizeButton";

export default function GateModuleBar() {
  return  (
    <ModuleBar
        top = {
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 8,
            }}>
                <ModuleBarButton href="/" hiddenFromSignedIn={true} label="Home">
                    <HomeOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarButton href="/signup" hiddenAfterSignedIn={true} label="Sign up">
                    <PersonAddOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarButton href="/signin" hiddenAfterSignedIn={true} label="Sign in">
                    <LoginOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarButton href="/reset" hiddenAfterSignedIn={true} label="Reset password">
                    <LockResetOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarButton href="/oauth" hidden={true} label="Grant access">
                    <KeyOutlinedIcon />
                </ModuleBarButton>
            </div>
        }
        bottom = {
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: 8,
            }}>
                <ModuleBarButton href="/signout" hiddenFromSignedIn={true} label="Sign out">
                    <LogoutOutlinedIcon />
                </ModuleBarButton>
                <ModuleBarSizeButton />
            </div>
        }
    />
  )
}