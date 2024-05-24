import AppBar from "../layouts/AppBar";
import Image from 'next/image'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { useContext } from "react";
import AppBarContext from "@/context/AppBarContext";
import AirContext from "@/context/AirContext";
import ModuleBarContext from "@/context/ModuleBarContext";
import PageBarContext from "@/context/PageBarContext";

import { toast } from 'react-toastify';
import AirBar from "../layouts/AirBar";
import BasicAirBar from "./BasicAirBar";

export default function BasicAppBar() {
    const appBarContext = useContext(AppBarContext);
    const airContext = useContext(AirContext);
    const moduleBarContext = useContext(ModuleBarContext);
    const pageBarContext = useContext(PageBarContext);

    // toast.success('🦄 Wow so easy!', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });

    return (
        <AppBar
                left = {
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                    }}>
                        <div style={{
                            width: 48,
                            height: 48,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image
                                src="/logo.png"
                                width={24}
                                height={24}
                                alt="Logo"
                                />
                        </div>
                        <div style={{
                            fontSize: 16,
                            fontWeight: 600,
                        }}>
                            Forest Gate
                        </div>
                    </div>
                }
                right = {
                    <BasicAirBar />
                }
            />
    )
}